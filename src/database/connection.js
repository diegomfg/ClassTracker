const Mongoose = require('mongoose');
const {Student} = require('../models/Student')

class Connection{
   constructor () {
    // this.Connect();
    this.Wipe();
    // this.Populate();
  }

  Connect = async () => {
    try {
      await Mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
      console.log("Mongoose connected");

    } catch (error) {
      throw new Error(error);
    }
  }

  Wipe = async () => {
    try {
      await Student.deleteMany({})
      console.log('whiped all');
    } catch (error) {
      console.log("\n\n[MONGOOSE ERROR [WHIPE METHOD]]=>", error)
    }
  }

  Populate = async () => {
    try {

      await Student.create({
        first_name: "Admin",
        last_name: "Administrator",
        password: "adminpwd",
        email: "admin@pwd.el",
        major: "Logistics",
        role: "ADMIN"
      })

    } catch (error) {
      
      console.log("\n\n[POPULATE]: ERROR POPULATING => ", error)

    }
  }
}

module.exports = new Connection;