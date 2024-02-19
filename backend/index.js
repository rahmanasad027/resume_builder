const express = require("express");
// const cors = require("cors");
const connectDB = require("./dbConnection");
const mongoose = require("mongoose");
const personalInfoRoute = require("./routes/personalInfoRoute");
const professionalInfoRoute = require("./routes/professionalInfoRoute");
const resumeInfoRoute = require("./routes/resumeInfoRoute");

const app = express();

// Middleware new 1
// app.use(cors({
//   origin: 'https://resume-builder-frontend-seven.vercel.app',
//   credentials: true
// }));
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
