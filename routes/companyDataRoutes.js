// server/routes/companyDataRoutes.js

const express = require("express");
const router = express.Router();
const companyDataController = require("../controllers/companyDataController");
const { protect } = require("../middleware/auth");
const { roleCheck } = require("../middleware/roleCheck");

/**
 * Route: GET /api/company/data/all
 * Description: Fetch all data from all collections.
 * Access: owner, admin, user
 */
router.get(
  "/all",
  protect,
  roleCheck(["owner", "admin", "user"]),
  companyDataController.getAllCompanyData
);

/**
 * Route: GET /api/company/data/:collectionName
 * Description: Fetch data from a specific collection.
 * Access: owner, admin, user
 */
router.get(
  "/:collectionName",
  protect,
  roleCheck(["owner", "admin", "user"]),
  companyDataController.getCompanyCollectionData
);

/**
 * Route: POST /api/company/data/:collectionName
 * Description: Create a new document in a specific collection.
 * Access: owner, admin
 */
router.post(
  "/:collectionName",
  protect,
  roleCheck(["owner", "admin"]),
  companyDataController.createCompanyCollectionData
);

/**
 * Route: PUT /api/company/data/:collectionName/:id
 * Description: Update a document in a specific collection.
 * Access: owner, admin
 */
router.put(
  "/:collectionName/:id",
  protect,
  roleCheck(["owner", "admin"]),
  companyDataController.updateCompanyCollectionData
);

/**
 * Route: DELETE /api/company/data/:collectionName/:id
 * Description: Delete a document from a specific collection.
 * Access: owner, admin
 */
router.delete(
  "/:collectionName/:id",
  protect,
  roleCheck(["owner", "admin"]),
  companyDataController.deleteCompanyCollectionData
);

module.exports = router;
