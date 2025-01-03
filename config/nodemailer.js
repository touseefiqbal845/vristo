// server/config/nodemailer.js

const nodemailer = require("nodemailer");
const { engine } = require("express-handlebars");
const path = require("path");
const nodemailerExpressHandlebars = require("nodemailer-express-handlebars");

// Load environment variables
require("dotenv").config();

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
  port: process.env.EMAIL_PORT, // e.g., 587
  secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your email password or app-specific password
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error("Error connecting to email server:", error);
  } else {
    console.log("Email server is ready to take messages");
  }
});

// Configure Handlebars options
const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./server/templates/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./server/templates/"),
  extName: ".hbs",
};

// Use a template engine with Nodemailer
transporter.use("compile", nodemailerExpressHandlebars(handlebarOptions));

module.exports = transporter;
