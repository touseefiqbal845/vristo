const jwt = require("jsonwebtoken");
const UserConfiguration = require("../models/UserConfiguration");
const dotenv = require("dotenv");

dotenv.config();

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Get token from header
    token = req.headers.authorization.split(" ")[1];
  }

  // Make sure token exists
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied." });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request
    req.user = await UserConfiguration.findById(decoded.user.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ msg: "User not found, authorization denied." });
    }

    next();
  } catch (err) {
    console.error("Token verification error:", err);
    res.status(401).json({ msg: "Token is not valid." });
  }
};
