const UserConfiguration = require("../models/UserConfiguration");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const connectToCompanyDB = require("../utils/dbConnection");

dotenv.config();

// Utility function to send emails (reuse or refactor if necessary)
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Thot AI <${process.env.EMAIL_USER}>`,
    to: options.to,
    subject: options.subject,
    text: options.text,
    // html: options.html, // Optional
  };

  await transporter.sendMail(mailOptions);
};

// Generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ user: { id, role } }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
