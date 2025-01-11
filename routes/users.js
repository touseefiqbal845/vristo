const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const companyOwnerController = require("../controllers/companyOwnerController");
const appOwnerController = require("../controllers/appOwnerController");
const { protect } = require("../middleware/auth");
const { roleCheck } = require("../middleware/roleCheck");
const rateLimiter = require("../middleware/rateLimiter");
const logger = require("../config/logger");
const { body, param } = require("express-validator");
const validate = require("../middleware/validate");

// Public Routes
router.post("/registernewadmin", rateLimiter, authController.registerUser);
router.post("/login", rateLimiter, authController.loginUser);
router.get("/verify-email", authController.verifyEmail);

// Protected Routes

router.get(
  "/protected-route",
  protect,
  roleCheck(["owner", "admin"]),
  (req, res) => {
    res.json({ msg: `Hello ${req.user.name}, you have access to this route.` });
  }
);

// Owner Routes
router.post(
  "/owner/create-company-owner",
  protect,
  roleCheck(["owner"]),
  appOwnerController.createCompanyOwner
);

router.put(
  "/owner/pause-company-owner/:ownerId",
  protect,
  roleCheck(["owner"]),
  appOwnerController.pauseCompanyOwner
);

router.get(
  "/owner/all-company-owners",
  protect,
  roleCheck(["owner"]),
  appOwnerController.getAllCompanyOwners
);

router.put(
  "/owner/update-package/:ownerId",
  protect,
  roleCheck(["owner"]), 
  appOwnerController.updatePackage
);

// Admin Routes
router.get(
  "/owner/admins-and-users",
  protect,
  roleCheck(["owner"]),
  userController.getAllAdminsAndTheirUsers
);

// Admin Routes
router.post(
  "/admin/create-user",
  protect,
  roleCheck(["admin", "owner"]),
  validate([
    body("name").notEmpty().withMessage("Name is required."),
    body("surname").notEmpty().withMessage("Surname is required."),
    body("email").isEmail().withMessage("Please provide a valid email."),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long."),
  ]),
  userController.createUserByAdmin
);

router.put(
  "/admin/pause-user/:userId",
  protect,
  roleCheck(["admin", "owner"]),
  userController.pauseUser
);

// Update Admin Profile Route
router.put(
  "/admin/update-admin",
  protect,
  roleCheck(["admin", "owner"]),
  userController.updateAdmin
);

// **Delete User Route**
router.delete(
  "/admin/delete-user/:userId",
  protect,
  roleCheck(["admin", "owner"]), // Accessible by admin and owner
  userController.deleteUserByAdmin
);

// Password Reset Routes
router.post(
  "/request-reset-password",
  rateLimiter,
  userController.requestPasswordReset
);
router.post("/reset-password", rateLimiter, userController.resetPassword);

// Restore a soft-deleted user
router.put(
  "/admin/restore-user/:userId",
  protect,
  roleCheck(["admin", "owner"]),
  validate([
    param("userId").isMongoId().withMessage("Invalid user ID format."),
  ]),
  userController.restoreUserByAdmin
);

// Additional routes can be added here

module.exports = router;
