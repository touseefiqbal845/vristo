const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/users");
const companyDataRoutes = require("./routes/companyDataRoutes");
dotenv.config();
const path = require("path"); 

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, 'build')));
app.get("*", (req, res) =>
  res.sendFile(path.resolve("build", "index.html"))
);

// // Allowed origins
// const allowedOrigins = ["http://localhost:3000"];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true, // Allow credentials
//   })
// );

// Routes
app.use("/api/auth/users", userRoutes);
app.use("/api/company/data", companyDataRoutes);

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.MONGO_URI, {
    // useFindAndModify: false, // Deprecated in Mongoose 6
  })
  .then(() => {
    console.log("MongoDB Connected...");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.json({ status: "success" });
});
