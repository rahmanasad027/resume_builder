const express = require('express');
const personalInfoRoute = require('./routes/personalInfoRoute');
const connectDB = require('./dbConnection')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3010;
// allow requests to be managed from different origins.
app.use(cors());
app.use(express.json());
// initializing DB connection
connectDB().catch(console.dir);

mongoose.connection.on('error', err => {
  console.log(err);
});
// Routes
app.use('/data', personalInfoRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
//  backend server port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = app