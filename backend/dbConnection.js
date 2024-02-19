const mongoose = require('mongoose')
//  we are using mongoose as ODM to manage our mongodb schemas
async function connectDB () {
    try {
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://rahmanasad222:patnCLpnioJ57KOD@test-project.cxx21np.mongodb.net/?retryWrites=true&w=majority');
      console.log("Successfully connected to Mongo DB");

    } catch (error) {
      console.log(error);
    }
};



module.exports = connectDB;