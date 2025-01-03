// server/controllers/userController.js

const UserConfiguration = require("../models/UserConfiguration");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const dotenv = require("dotenv");
const sendEmail = require("../services/emailService"); // Utilize the centralized email service
const logger = require("../config/logger"); // Importing the logger for better error and action logging

dotenv.config();

// @desc    Get all admins and their users
// @route   GET /api/auth/users/owner/admins-and-users
// @access  Owner
exports.getAllAdminsAndTheirUsers = async (req, res) => {
  try {
    // Find all admins who are not soft-deleted
    const admins = await UserConfiguration.find({
      role: "admin",
      deleted: false,
    });

    // For each admin, find their active users
    const result = await Promise.all(
      admins.map(async (admin) => {
        const users = await UserConfiguration.find({
          createdBy: admin._id,
          deleted: false,
        });
        return {
          adminId: admin._id,
          company: admin.company,
          name: admin.name,
          surname: admin.surname,
          email: admin.email,
          user_status: admin.user_status,
          package: admin.package,
          GOOGLE_ADS_CUSTOMER_ID: admin.GOOGLE_ADS_CUSTOMER_ID,
          url_Cors_1: admin.url_Cors_1,
          url_Cors_2: admin.url_Cors_2,
          url_Cors_3: admin.url_Cors_3,
          url_Cors_4: admin.url_Cors_4,
          users: users.map((user) => ({
            userId: user._id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            user_status: user.user_status,
          })),
        };
      })
    );

    res.json(result);
  } catch (error) {
    logger.error(`Error in getAllAdminsAndTheirUsers: ${error.message}`);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Create a new user under an admin
// @route   POST /api/auth/users/admin/create-user
// @access  Admin
exports.createUserByAdmin = async (req, res) => {
  const {
    name,
    surname,
    email,
    password,
    user_status, // Optional: Admins may set this
  } = req.body;

  try {
    // Validate required fields
    if (!name || !surname || !email || !password) {
      return res
        .status(400)
        .json({ msg: "Please provide all required fields." });
    }

    // Check if user already exists
    let user = await UserConfiguration.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists." });
    }

    // Inherit fields from admin's data
    const {
      company,
      database,
      package: inheritedPackage,
      GOOGLE_ADS_CUSTOMER_ID,
      url_Cors_1,
      url_Cors_2,
      url_Cors_3,
      url_Cors_4,
    } = req.user;

    // Create new user with inherited fields
    user = new UserConfiguration({
      company,
      database,
      name,
      package: inheritedPackage, // Inherited, cannot be set by admin
      surname,
      GOOGLE_ADS_CUSTOMER_ID,
      email,
      user_status: user_status || "ACTIVE",
      url_Cors_1,
      url_Cors_2,
      url_Cors_3,
      url_Cors_4,
      password,
      role: "user",
      createdBy: req.user._id, // Track which admin created this user
    });

    await user.save();

    // Generate verification token
    const verificationToken = jwt.sign(
      { user: { id: user._id, role: user.role } },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Create verification URL
    const verificationUrl = `http://localhost:5001/api/auth/users/verify-email?token=${verificationToken}`;

    // Send verification email using the email service
    await sendEmail(
      user.email,
      "Verify Your Email",
      "verificationEmail", // Template name without extension
      {
        name: user.name,
        surname: user.surname,
        verificationUrl,
        company: user.company,
      }
    );

    res.status(201).json({
      msg: "User created successfully. Please check your email to verify.",
    });
  } catch (error) {
    logger.error(`Error in createUserByAdmin: ${error.message}`);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Pause or activate a user
// @route   PUT /api/auth/users/admin/pause-user/:userId
// @access  Admin
exports.pauseUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await UserConfiguration.findById(userId);

    if (!user || user.deleted) {
      return res.status(404).json({ msg: "User not found." });
    }

    // Only allow admins to pause/activate users they created or owners can pause any user
    if (
      user.createdBy.toString() !== req.user._id.toString() &&
      req.user.role !== "owner"
    ) {
      return res
        .status(403)
        .json({ msg: "You do not have permission to modify this user." });
    }

    user.user_status = user.user_status === "ACTIVE" ? "PAUSED" : "ACTIVE";
    await user.save();

    res.json({ msg: `User status updated to ${user.user_status}.` });
  } catch (error) {
    logger.error(`Error in pauseUser: ${error.message}`);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Request password reset
// @route   POST /api/auth/users/request-reset-password
// @access  Public

exports.requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    // Validate input
    if (!email) {
      return res.status(400).json({ msg: "Please provide your email." });
    }

    // Find user by email
    const user = await UserConfiguration.findOne({ email });
    if (!user || user.deleted) {
      // To prevent email enumeration, respond with the same message
      return res.status(200).json({
        msg: "If this email is registered, a reset link has been sent.",
      });
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Hash the token before saving to the database
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // Set reset token and expiration on the user
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1 hour from now

    await user.save();

    // Create reset URL
    const resetUrl = `http://localhost:5001/api/auth/users/reset-password?token=${resetToken}&email=${email}`;

    // Send reset email using the email service
    await sendEmail(
      user.email,
      "Password Reset Request",
      "passwordReset", // Template name without extension
      {
        name: user.name,
        surname: user.surname,
        resetUrl,
        company: user.company,
      }
    );

    // Log the password reset request
    logger.info(`Password reset requested for email: ${email}`);

    res.status(200).json({
      msg: "If this email is registered, a reset link has been sent.",
    });
  } catch (error) {
    logger.error(`Error in requestPasswordReset: ${error.message}`);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Reset password
// @route   POST /api/auth/users/reset-password
// @access  Public
exports.resetPassword = async (req, res) => {
  const { token, email, newPassword } = req.body;

  try {
    // Validate input
    if (!token || !email || !newPassword) {
      logger.warn("Password reset attempt with missing fields.");
      return res.status(400).json({ msg: "Invalid request." });
    }

    // Hash the incoming token to compare with the stored hashed token
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // Find user by email and token, and ensure token hasn't expired
    const user = await UserConfiguration.findOne({
      email,
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user || user.deleted) {
      logger.warn(`Invalid or expired token for email: ${email}`);
      return res
        .status(400)
        .json({ msg: "Invalid or expired password reset token." });
    }

    // Update user's password
    user.password = newPassword;
    // Remove reset token and expiration
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    // Optionally, set emailConfirmed to true if not already
    user.emailConfirmed = true;

    await user.save();

    // Send confirmation email using the email service
    await sendEmail(
      user.email,
      "Password Reset Successful",
      "passwordResetConfirmation", // Template name without extension
      {
        name: user.name,
        surname: user.surname,
        company: user.company,
      }
    );

    // Log the successful password reset
    logger.info(`Password reset successful for email: ${email}`);

    res.status(200).json({ msg: "Password has been reset successfully." });
  } catch (error) {
    logger.error(`Error in resetPassword: ${error.message}`);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Update admin's profile and cascade changes to users
// @route   PUT /api/auth/users/admin/update-admin
// @access  Admin and Owner
exports.updateAdmin = async (req, res) => {
  const {
    // Fields that Admin can update
    GOOGLE_ADS_CUSTOMER_ID,
    url_Cors_1,
    url_Cors_2,
    url_Cors_3,
    url_Cors_4,
    name,
    surname,
    email,
    password,
    user_status,
    // Fields that only Owner can update (if applicable)
    company, // Optional: Only Owners can update
    database, // Optional: Only Owners can update
    package: updatedPackage, // Optional: Only Owners can update
  } = req.body;

  try {
    const admin = await UserConfiguration.findById(req.user._id);

    if (!admin || admin.deleted) {
      return res.status(404).json({ msg: "Admin not found." });
    }

    // Only Owners can update certain fields
    if (company || database || updatedPackage) {
      if (admin.role !== "owner") {
        return res
          .status(403)
          .json({ msg: "Only owners can update these fields." });
      }

      if (company) admin.company = company;
      if (database) admin.database = database;
      if (updatedPackage) admin.package = updatedPackage;
    }

    // Update fields that Admin can modify
    if (GOOGLE_ADS_CUSTOMER_ID)
      admin.GOOGLE_ADS_CUSTOMER_ID = GOOGLE_ADS_CUSTOMER_ID;
    if (url_Cors_1) admin.url_Cors_1 = url_Cors_1;
    if (url_Cors_2) admin.url_Cors_2 = url_Cors_2;
    if (url_Cors_3) admin.url_Cors_3 = url_Cors_3;
    if (url_Cors_4) admin.url_Cors_4 = url_Cors_4;
    if (name) admin.name = name;
    if (surname) admin.surname = surname;
    if (email) admin.email = email;
    if (password) admin.password = password; // Will be hashed due to pre-save middleware
    if (user_status) admin.user_status = user_status;

    await admin.save();

    // Cascade updates to all users created by this admin
    const updateFields = {
      GOOGLE_ADS_CUSTOMER_ID:
        GOOGLE_ADS_CUSTOMER_ID || admin.GOOGLE_ADS_CUSTOMER_ID,
      url_Cors_1: url_Cors_1 || admin.url_Cors_1,
      url_Cors_2: url_Cors_2 || admin.url_Cors_2,
      url_Cors_3: url_Cors_3 || admin.url_Cors_3,
      url_Cors_4: url_Cors_4 || admin.url_Cors_4,
      user_status: user_status || admin.user_status,
    };

    // If owner updated company or database, cascade to users
    if (admin.role === "owner" && (company || database || updatedPackage)) {
      if (company) updateFields.company = company;
      if (database) updateFields.database = database;
      if (updatedPackage) updateFields.package = updatedPackage;
    }

    await UserConfiguration.updateMany(
      { createdBy: admin._id, deleted: false },
      updateFields
    );

    res.json({ msg: "Admin profile updated successfully." });
  } catch (error) {
    logger.error(`Error in updateAdmin: ${error.message}`);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Delete a user created by the admin
// @route   DELETE /api/auth/users/admin/delete-user/:userId
// @access  Admin and Owner
exports.deleteUserByAdmin = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user to be deleted
    const userToDelete = await UserConfiguration.findById(userId);

    if (!userToDelete || userToDelete.deleted) {
      return res.status(404).json({ msg: "User not found." });
    }

    // Check if the requesting admin is the creator of the user or is an owner
    if (
      userToDelete.createdBy.toString() !== req.user._id.toString() &&
      req.user.role !== "owner"
    ) {
      return res
        .status(403)
        .json({ msg: "You do not have permission to delete this user." });
    }

    // Soft delete the user by setting 'deleted' to true
    userToDelete.deleted = true;
    await userToDelete.save();

    // Optionally, send deletion notification email using the email service
    await sendEmail(
      userToDelete.email,
      "Your Account Has Been Deleted",
      "userDeletion", // Template name without extension
      {
        name: userToDelete.name,
        surname: userToDelete.surname,
        company: userToDelete.company,
      }
    );

    // Log the deletion
    logger.info(
      `User with ID ${userId} was soft deleted by Admin ID ${req.user._id}`
    );

    res.json({ msg: "User has been deleted successfully." });
  } catch (error) {
    logger.error(`Error in deleteUserByAdmin: ${error.message}`);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Restore a soft-deleted user (Optional)
// @route   PUT /api/auth/users/admin/restore-user/:userId
// @access  Admin and Owner
exports.restoreUserByAdmin = async (req, res) => {
  const { userId } = req.params;

  try {
    const userToRestore = await UserConfiguration.findById(userId);

    if (!userToRestore || !userToRestore.deleted) {
      return res.status(404).json({ msg: "User not found or not deleted." });
    }

    // Check if the requesting admin is the creator of the user or is an owner
    if (
      userToRestore.createdBy.toString() !== req.user._id.toString() &&
      req.user.role !== "owner"
    ) {
      return res
        .status(403)
        .json({ msg: "You do not have permission to restore this user." });
    }

    // Restore the user by setting 'deleted' to false
    userToRestore.deleted = false;
    await userToRestore.save();

    // Optionally, send restoration notification email using the email service
    await sendEmail(
      userToRestore.email,
      "Your Account Has Been Restored",
      "userRestoration", // Template name without extension
      {
        name: userToRestore.name,
        surname: userToRestore.surname,
        company: userToRestore.company,
      }
    );

    // Log the restoration
    logger.info(
      `User with ID ${userId} was restored by Admin ID ${req.user._id}`
    );

    res.json({ msg: "User has been restored successfully." });
  } catch (error) {
    logger.error(`Error in restoreUserByAdmin: ${error.message}`);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Update a user's profile
// @route   PUT /api/auth/users/admin/update-user/:userId
// @access  Admin and Owner
exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const {
    name,
    surname,
    email,
    password,
    user_status,
    // Additional fields can be added as needed
  } = req.body;

  try {
    const user = await UserConfiguration.findById(userId);

    if (!user || user.deleted) {
      return res.status(404).json({ msg: "User not found." });
    }

    // Only allow admins to update users they created or owners can update any user
    if (
      user.createdBy.toString() !== req.user._id.toString() &&
      req.user.role !== "owner"
    ) {
      return res
        .status(403)
        .json({ msg: "You do not have permission to update this user." });
    }

    // Update fields if provided
    if (name) user.name = name;
    if (surname) user.surname = surname;
    if (email) user.email = email;
    if (password) user.password = password; // Will be hashed due to pre-save middleware
    if (user_status) user.user_status = user_status;

    await user.save();

    res.json({ msg: "User profile updated successfully." });
  } catch (error) {
    logger.error(`Error in updateUser: ${error.message}`);
    res.status(500).json({ msg: "Server error." });
  }
};

// Additional controllers (e.g., deleteUser, etc.) can be added here
