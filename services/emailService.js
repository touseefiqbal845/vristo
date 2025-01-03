// server/services/emailService.js

const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const logger = require("../config/logger"); // Assuming you have a logger setup

// Load environment variables
require("dotenv").config();

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
  port: process.env.EMAIL_PORT, // e.g., 587
  secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    logger.error("Error connecting to email server:", error);
  } else {
    logger.info("Email server is ready to take messages");
  }
});

/**
 * Send an email using a Handlebars template.
 *
 * @param {string} to - Recipient's email address.
 * @param {string} subject - Subject of the email.
 * @param {string} templateName - Name of the Handlebars template file (without extension).
 * @param {object} context - Dynamic data to inject into the template.
 * @returns {Promise} - Resolves if email is sent successfully, rejects otherwise.
 */
const sendEmail = async (to, subject, templateName, context) => {
  try {
    // Path to the template file
    const templatePath = path.join(
      __dirname,
      "../templates",
      `${templateName}.hbs`
    );

    // Read the template file
    const templateSource = fs.readFileSync(templatePath, "utf8");

    // Compile the template
    const template = handlebars.compile(templateSource);

    // Generate the HTML by injecting the context data
    const html = template(context);

    // Define email options
    const mailOptions = {
      from: `"Thot AI" <${process.env.EMAIL_USER}>`, // Sender address
      to, // List of recipients
      subject, // Subject line
      html, // HTML body content
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    logger.info(
      `Email sent to ${to} with subject "${subject}" using template "${templateName}".`
    );
  } catch (error) {
    logger.error(`Error sending email to ${to}: ${error.message}`);
    throw error;
  }
};

module.exports = sendEmail;
