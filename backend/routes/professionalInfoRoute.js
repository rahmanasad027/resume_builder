const express = require('express');
const router = express.Router();
const ProfessionalInfoController = require('../controllers/professionalInfoController');

// POST request to accept incoming data
router.post('/', ProfessionalInfoController.handleIncomingData);

module.exports = router;