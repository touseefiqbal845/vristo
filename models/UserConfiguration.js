const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userConfigurationSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    database: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    package: {
      type: String,
      enum: ["basic", "premium"],
      default: "basic",
    },
    surname: {
      type: String,
      required: true,
    },
    currency_symbol: {
      type: String,
      required: false,
    },
    GOOGLE_ADS_CUSTOMER_ID: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    user_status: {
      type: String,
      enum: ["ACTIVE", "PAUSED"],
      default: "ACTIVE",
    },
    url_Cors_1: {
      type: String,
    },
    url_Cors_2: {
      type: String,
    },
    url_Cors_3: {
      type: String,
    },
    url_Cors_4: {
      type: String,
    },
    role: {
      type: String,
      enum: ["owner", "admin", "user"],
      default: "admin",
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    emailConfirmed: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserConfiguration",
      required: function () {
        return this.role === "admin" || this.role === "user";
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // Additional fields can be added here
  },
  {
    collection: "user_configuration",
  }
);

// Pre-save middleware to hash password if modified or new
userConfigurationSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare entered password with hashed password
userConfigurationSchema.methods.matchPassword = async function (
  enteredPassword
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("UserConfiguration", userConfigurationSchema);
