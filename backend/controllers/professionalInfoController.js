const ProfessionalInfoModel = require("../models/professionalInfoModel");
//  validating schema for incoming data and saving it
const handleIncomingData = async (req, res) => {
  try {
    const professionalInfo = req.body; // Extract personalInfo from req.body
    console.log("professionalInfo: ", professionalInfo);
    // Create an instance of your model with the incoming data
    const newData = new ProfessionalInfoModel(professionalInfo); // Pass personalInfo directly

    // Save the data to MongoDB
    await newData.save();

    // Respond with a success message
    res
      .status(200)
      .json({
        message: "Data received and saved successfully",
        receivedData: professionalInfo,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  handleIncomingData,
};
