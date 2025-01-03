const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connections = {};

const connectToCompanyDB = async (dbName) => {
  if (connections[dbName]) {
    return connections[dbName];
  }

  const dbURI = `mongodb+srv://datatransfer:8TdjENrPnUHnZTVb@thotai.gm2xz.mongodb.net/${dbName}?authSource=admin`;

  const connection = await mongoose.createConnection(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false, // Deprecated in Mongoose 6
  });

  connections[dbName] = connection;
  console.log(`Connected to company database: ${dbName}`);

  return connection;
};

module.exports = connectToCompanyDB;
