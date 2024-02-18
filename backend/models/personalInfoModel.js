const mongoose = require('mongoose');
//  defining schema for our personalInfo data.
const personalInfoSchema = new mongoose.Schema({
  name: { type: String },
  title: { type: String },
  desc: { type: String },
  contact: { type: String },
  email: { type: String},
  skills: { type: String },
  interests: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const PersonalInfoModel = mongoose.model('PersonalInfo', personalInfoSchema);

module.exports = PersonalInfoModel;
