const express = require("express");
const router = express.Router();
const personalInfoController = require("../controllers/personalInfoController");

// POST request to accept incoming data
router.post("/", personalInfoController.handleIncomingData);

module.exports = router;
