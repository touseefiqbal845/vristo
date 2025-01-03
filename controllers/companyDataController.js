//serrver/controllers/companyDataController.js

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const connectToCompanyDB = require("../utils/dbConnection");

// List of collections to manage
const collections = [
  "ad_sets",
  "ads",
  "basic_sales",
  "calls_booked",
  "campaigns",
  "daily",
  "hql",
  "id_names",
  "leads",
  "basic_sales",
  "premium_sales",
];

// Generic schema for collections without predefined schemas
const DynamicSchema = new mongoose.Schema({}, { strict: false });

/**
 * Fetch data from all collections.
 * Endpoint: GET /api/company/data/all
 */
exports.getAllCompanyData = async (req, res) => {
  try {
    const companyDBName = req.user.database;
    const companyDB = await connectToCompanyDB(companyDBName);

    const allData = {};

    for (const collectionName of collections) {
      // Dynamically create or retrieve the model for each collection
      const DynamicModel = companyDB.model(
        collectionName,
        DynamicSchema,
        collectionName
      );
      allData[collectionName] = await DynamicModel.find({});
    }

    res.status(200).json(allData);
  } catch (error) {
    console.error(`Error fetching data from all collections:`, error);
    res.status(500).json({
      msg: `Error fetching data from all collections.`,
    });
  }
};

/**
 * Fetch data from a specific collection.
 * Endpoint: GET /api/company/data/:collectionName
 */
exports.getCompanyCollectionData = async (req, res) => {
  try {
    const { collectionName } = req.params;

    if (!collections.includes(collectionName)) {
      return res.status(400).json({ msg: "Invalid collection name." });
    }

    const companyDBName = req.user.database;
    const companyDB = await connectToCompanyDB(companyDBName);
    const DynamicModel = companyDB.model(
      collectionName,
      DynamicSchema,
      collectionName
    );

    const data = await DynamicModel.find({});

    res.status(200).json(data);
  } catch (error) {
    console.error(
      `Error fetching data from collection ${req.params.collectionName}:`,
      error
    );
    res.status(500).json({
      msg: `Error fetching data from collection ${req.params.collectionName}.`,
    });
  }
};

/**
 * Create a new document in a specific collection.
 * Endpoint: POST /api/company/data/:collectionName
 */
exports.createCompanyCollectionData = async (req, res) => {
  try {
    const { collectionName } = req.params;
    const newData = req.body;

    if (!collections.includes(collectionName)) {
      return res.status(400).json({ msg: "Invalid collection name." });
    }

    const companyDBName = req.user.database;
    const companyDB = await connectToCompanyDB(companyDBName);
    const DynamicModel = companyDB.model(
      collectionName,
      DynamicSchema,
      collectionName
    );

    const createdDocument = await DynamicModel.create(newData);

    res.status(201).json({
      msg: `${collectionName} document created successfully.`,
      data: createdDocument,
    });
  } catch (error) {
    console.error(
      `Error creating data in collection ${req.params.collectionName}:`,
      error
    );
    res.status(500).json({
      msg: `Server error while creating data in ${req.params.collectionName}.`,
    });
  }
};

/**
 * Update a document in a specific collection.
 * Endpoint: PUT /api/company/data/:collectionName/:id
 */
exports.updateCompanyCollectionData = async (req, res) => {
  try {
    const { collectionName, id } = req.params;
    const updatedData = req.body;

    if (!collections.includes(collectionName)) {
      return res.status(400).json({ msg: "Invalid collection name." });
    }

    const companyDBName = req.user.database;
    const companyDB = await connectToCompanyDB(companyDBName);
    const DynamicModel = companyDB.model(
      collectionName,
      DynamicSchema,
      collectionName
    );

    const updatedDocument = await DynamicModel.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updatedData },
      { new: true } // return the updated document
    );

    if (!updatedDocument) {
      return res.status(404).json({ msg: "Document not found." });
    }

    res.status(200).json({
      msg: `${collectionName} document updated successfully.`,
      data: updatedDocument,
    });
  } catch (error) {
    console.error(
      `Error updating data in collection ${req.params.collectionName}:`,
      error
    );
    res.status(500).json({
      msg: `Server error while updating data in ${req.params.collectionName}.`,
    });
  }
};

/**
 * Delete a document from a specific collection.
 * Endpoint: DELETE /api/company/data/:collectionName/:id
 */
exports.deleteCompanyCollectionData = async (req, res) => {
  try {
    const { collectionName, id } = req.params;

    if (!collections.includes(collectionName)) {
      return res.status(400).json({ msg: "Invalid collection name." });
    }

    const companyDBName = req.user.database;
    const companyDB = await connectToCompanyDB(companyDBName);
    const DynamicModel = companyDB.model(
      collectionName,
      DynamicSchema,
      collectionName
    );

    const deleteResult = await DynamicModel.deleteOne({
      _id: new ObjectId(id),
    });

    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ msg: "Document not found." });
    }

    res.status(200).json({
      msg: `${collectionName} document deleted successfully.`,
    });
  } catch (error) {
    console.error(
      `Error deleting data from collection ${req.params.collectionName}:`,
      error
    );
    res.status(500).json({
      msg: `Server error while deleting data from ${req.params.collectionName}.`,
    });
  }
};
