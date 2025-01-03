const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserConfiguration = require("../models/UserConfiguration");
const bcrypt = require("bcryptjs");

dotenv.config();

const seedAppOwner = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});

    // Check if App Owner already exists
    const existingOwner = await UserConfiguration.findOne({ role: "owner" });
    if (existingOwner) {
      console.log("App Owner already exists.");
      process.exit(0);
    }

    // Create App Owner

    const appOwner = new UserConfiguration({
      company: "Thot AI",
      database: "appOwnerDB",
      name: "App",
      package: "premium",
      surname: "Owner",
      GOOGLE_ADS_CUSTOMER_ID: "0000000000",
      email: "jonylatino87@gmail.com",
      user_status: "ACTIVE",
      url_Cors_1: "https://appowner.thedigitalprofitmakers.com",
      url_Cors_2: "",
      url_Cors_3: "",
      url_Cors_4: "",
      password: "Latino0024",
      role: "owner",
    });

    await appOwner.save();

    // Send verification email
    const jwt = require("jsonwebtoken");
    const token = jwt.sign(
      { user: { id: appOwner._id, role: appOwner.role } },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    const verificationUrl = `http://localhost:5001/api/auth/users//verify-email?token=${token}`;

    const nodemailer = require("nodemailer");

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
      to: appOwner.email,
      subject: "Verify Your Email",
      text: `Please verify your email by clicking the following link: ${verificationUrl}`,
    };

    await transporter.sendMail(mailOptions);

    console.log("App Owner created and verification email sent.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding App Owner:", error);
    process.exit(1);
  }
};

seedAppOwner();
