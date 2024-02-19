const express = require("express");
const cors = require("cors");
const connectDB = require("./dbConnection");
const mongoose = require("mongoose");
const personalInfoRoute = require("./routes/personalInfoRoute");
const professionalInfoRoute = require("./routes/professionalInfoRoute");
const resumeInfoRoute = require("./routes/resumeInfoRoute");

const app = express();

// Middleware
app.use(cors(
  {
    origin: 'https://resume-builder-1wqd.vercel.app/',
    methods: ['POST', 'GET'],
    credentials:'true'
  }
));
app.use(express.json());

// initializing DB connection
connectDB().catch(console.dir);

mongoose.connection.on("error", (err) => {
  console.log(err);
});

// Routes
app.use("/data", personalInfoRoute);
app.use("/professional-data", professionalInfoRoute);
app.use("/resume-data", resumeInfoRoute);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
