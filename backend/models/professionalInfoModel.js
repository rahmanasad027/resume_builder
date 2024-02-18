const mongoose = require("mongoose");
//  defining schema for our personalInfo data.
const professionalInfoSchema = new mongoose.Schema({
  degree: { type: String },
  workExperiences: { type: Array },
  cert: { type: String },
  skill: { type: String },
  project: { type: String },
  linkedin: { type: String },
  accomp: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'ProfessionalInfo' }); 

const ProfessionalInfoModel = mongoose.model(
  "ProfessionalInfo",
  professionalInfoSchema
);

module.exports = ProfessionalInfoModel;
