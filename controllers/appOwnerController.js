//server/controllers/appOwnerController.js

const UserConfiguration = require("../models/UserConfiguration");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const connectToCompanyDB = require("../utils/dbConnection");

// @desc    Create a new Company Owner (Admin) by App Owner
// @route   POST /api/auth/users/owner/create-company-owner
// @access  App Owner
exports.createCompanyOwner = async (req, res) => {
  const {
    company,
    database,
    name,
    package: userPackage,
    surname,
    GOOGLE_ADS_CUSTOMER_ID,
    email,
    user_status,
    currency_symbol,
    url_Cors_1,
    url_Cors_2,
    url_Cors_3,
    url_Cors_4,
    password,
  } = req.body;

  try {
    // Check if user already exists
    let user = await UserConfiguration.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists." });
    }

    // Create new Company Owner
    user = new UserConfiguration({
      company,
      database,
      name,
      package: userPackage,
      surname,
      currency_symbol:currency_symbol,
      GOOGLE_ADS_CUSTOMER_ID,
      email,
      user_status,
      url_Cors_1,
      url_Cors_2,
      url_Cors_3,
      url_Cors_4,
      password,
      role: "owner",
    });

    await user.save();

    // Optionally, create the company's database upon creation
    await connectToCompanyDB(database);

    // Send verification email
    const verificationToken = jwt.sign(
      { user: { id: user._id, role: user.role } },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    const verificationUrl = `http://yourfrontend.com/verify-email?token=${verificationToken}`;

    await sendEmail({
      to: user.email,
      subject: "Verify Your Email",
      text: `Please verify your email by clicking the following link: ${verificationUrl}`,
    });

    res.status(201).json({
      msg: "Company Owner registered successfully. Please check your email to verify.",
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    console.error("Error in createCompanyOwner:", error);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Pause or activate a Company Owner
// @route   PUT /api/auth/users/owner/pause-company-owner/:ownerId
// @access  App Owner
exports.pauseCompanyOwner = async (req, res) => {
  const { ownerId } = req.params;

  try {
    const owner = await UserConfiguration.findById(ownerId);

    if (!owner) {
      return res.status(404).json({ msg: "Company Owner not found." });
    }

    if (owner.role !== "owner") {
      return res
        .status(400)
        .json({ msg: "Specified user is not a Company Owner." });
    }

    owner.user_status = owner.user_status === "ACTIVE" ? "PAUSED" : "ACTIVE";
    await owner.save();

    // Additionally, pause all users under this company
    await UserConfiguration.updateMany(
      { createdBy: owner._id },
      { user_status: owner.user_status }
    );

    res.json({ msg: `Company Owner status updated to ${owner.user_status}.` });
  } catch (error) {
    console.error("Error in pauseCompanyOwner:", error);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Get all Company Owners and their Users (App Owner)
// @route   GET /api/auth/users/owner/all-company-owners
// @access  App Owner
exports.getAllCompanyOwners = async (req, res) => {
  try {
    const owners = await UserConfiguration.find({ role: "owner" });

    const result = await Promise.all(
      owners.map(async (owner) => {
        const users = await UserConfiguration.find({ createdBy: owner._id });
        return {
          ownerId: owner._id,
          company: owner.company,
          name: owner.name,
          surname: owner.surname,
          email: owner.email,
          user_status: owner.user_status,
          package: owner.package,
          GOOGLE_ADS_CUSTOMER_ID: owner.GOOGLE_ADS_CUSTOMER_ID,
          url_Cors_1: owner.url_Cors_1,
          url_Cors_2: owner.url_Cors_2,
          url_Cors_3: owner.url_Cors_3,
          url_Cors_4: owner.url_Cors_4,
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
    console.error("Error in getAllCompanyOwners:", error);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Update a Company Owner's package
// @route   PUT /api/auth/users/owner/update-package/:ownerId
// @access  Owner
exports.updatePackage = async (req, res) => {
  const { ownerId } = req.params;
  const { package: newPackage } = req.body;

  // Validate package value
  const validPackages = ["basic", "premium"];
  if (!validPackages.includes(newPackage)) {
    return res.status(400).json({ msg: "Invalid package type." });
  }

  try {
    const owner = await UserConfiguration.findById(ownerId);

    if (!owner) {
      return res.status(404).json({ msg: "Company Owner not found." });
    }

    if (owner.role !== "owner") {
      return res
        .status(400)
        .json({ msg: "Specified user is not a Company Owner." });
    }

    owner.package = newPackage;
    await owner.save();

    // Update package for all users under this owner
    await UserConfiguration.updateMany(
      { createdBy: owner._id },
      { package: newPackage }
    );

    res.json({ msg: `Company Owner package updated to ${newPackage}.` });
  } catch (error) {
    console.error("Error in updatePackage:", error);
    res.status(500).json({ msg: "Server error." });
  }
};
