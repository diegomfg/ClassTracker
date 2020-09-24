const Mongoose = require('mongoose');

class Connection{
   constructor () {
    this.Connect();
  }

  Connect = async () => {
    try {
      await Mongoose.connect("mongodb://localhost:27017/classTracker", {useNewUrlParser: true, useUnifiedTopology: true});
      console.log("Mongoose connected");
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new Connection;