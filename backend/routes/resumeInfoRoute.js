// resumeRoute.js

const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeInfoController');

// GET request to fetch combined resume data
router.get('/', resumeController.fetchResumeData);

module.exports = router;
