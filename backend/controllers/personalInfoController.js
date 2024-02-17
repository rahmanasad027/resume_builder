
const personalInfoModel = require('../models/personalInfoModel');
//  validating schema for incoming data and saving it
const handleIncomingData = async (req, res) => {
  try {
    const  personalInfo  = req.body; // Extract personalInfo from req.body
    console.log('personalInfo: ', personalInfo)
    // Create an instance of your model with the incoming data
    const newData = new personalInfoModel(personalInfo); // Pass personalInfo directly

    // Save the data to MongoDB
    await newData.save();

    // Respond with a success message
    res.status(200).json({ message: 'Data received and saved successfully', receivedData: personalInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  handleIncomingData,
};
