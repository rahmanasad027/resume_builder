// resumeController.js
const ProfessionalInfoModel = require('../models/professionalInfoModel');
const PersonalInfoModel = require('../models/personalInfoModel');

const fetchResumeData = async (req, res) => {
  try {
    // Fetch the latest document from 'ProfessionalInfo' collection
    const latestProfessionalInfo = await ProfessionalInfoModel.findOne().sort({ createdAt: -1 });

    // Fetch the latest document from 'personalinfos' collection
    const latestPersonalInfo = await PersonalInfoModel.findOne().sort({ createdAt: -1 });

    // Combine the latest documents into a single response object
    const responseData = {
      professionalInfo: latestProfessionalInfo,
      personalInfo: latestPersonalInfo,
    };

    // Respond with the combined data
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { fetchResumeData };
