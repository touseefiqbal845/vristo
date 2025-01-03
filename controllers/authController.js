// server/controllers/authController.js

const UserConfiguration = require("../models/UserConfiguration");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const sendEmail = require("../services/emailService"); // Importing the email service

dotenv.config();

// Generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ user: { id, role } }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

// @desc    Register a new user (Owner/Admin)
// @route   POST /api/auth/users/registernewadmin
// @access  Public (or restricted based on your design)
exports.registerUser = async (req, res) => {
  const {
    company,
    database,
    name,
    package: userPackage,
    surname,
    GOOGLE_ADS_CUSTOMER_ID,
    email,
    user_status,
    url_Cors_1,
    url_Cors_2,
    url_Cors_3,
    url_Cors_4,
    password,
    role, // Should be 'owner' or 'admin'
  } = req.body;

  try {
    // Validate required fields
    if (
      !company ||
      !database ||
      !name ||
      !surname ||
      !GOOGLE_ADS_CUSTOMER_ID ||
      !email ||
      !password ||
      !role
    ) {
      return res
        .status(400)
        .json({ msg: "Please provide all required fields." });
    }

    // Check for valid role
    const validRoles = ["owner", "admin"];
    if (!validRoles.includes(role)) {
      return res.status(400).json({ msg: "Invalid role specified." });
    }

    // Check if user already exists
    let user = await UserConfiguration.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists." });
    }

    // Create new user
    user = new UserConfiguration({
      company,
      database,
      name,
      package: userPackage || "basic", // Default package if not provided
      surname,
      GOOGLE_ADS_CUSTOMER_ID,
      email,
      user_status: user_status || "ACTIVE",
      // Assign URL_Cors fields, defaulting to null if empty
      url_Cors_1: url_Cors_1 || null,
      url_Cors_2: url_Cors_2 || null,
      url_Cors_3: url_Cors_3 || null,
      url_Cors_4: url_Cors_4 || null,
      password,
      password,
      role,
    });

    await user.save();

    // Generate verification token
    const verificationToken = generateToken(user._id, user.role);

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
      msg: "User registered successfully. Please check your email to verify.",
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Authenticate user and get token
// @route   POST /api/auth/users/login
// @access  Public
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "Please provide email and password." });
    }

    // Check for user
    const user = await UserConfiguration.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    // Check if user is active
    if (user.user_status !== "ACTIVE") {
      return res.status(403).json({ msg: "User is not active." });
    }

    // Check if email is confirmed
    if (!user.emailConfirmed) {
      return res
        .status(403)
        .json({ msg: "Please verify your email before logging in." });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    // Generate token
    const token = generateToken(user._id, user.role);

    res.json({
      token,
      user: {
        id: user._id,
        company: user.company,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        currency_symbol: user?.currency_symbol
      },
    });
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ msg: "Server error." });
  }
};

// @desc    Verify user's email
// @route   GET /api/auth/users/verify-email?token=...
// @access  Public
exports.verifyEmail = async (req, res) => {
  const token = req.query.token;

  if (!token) {
    return res.status(400).json({ msg: "Invalid or missing token." });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.user.id;

    // Find user and update email confirmation
    const user = await UserConfiguration.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }

    if (user.emailConfirmed) {
      return res.status(400).json({ msg: "Email already verified." });
    }

    user.emailConfirmed = true;
    await user.save();

    // Send welcome email after successful verification
    await sendEmail(
      user.email,
      "Welcome to Thot AI!",
      "welcomeEmail", // Template name without extension
      {
        name: user.name,
        surname: user.surname,
        company: user.company,
      }
    );

    res.json({ msg: "Email verified successfully." });
  } catch (error) {
    console.error("Error in verifyEmail:", error);
    res.status(400).json({ msg: "Invalid or expired token." });
  }
};
