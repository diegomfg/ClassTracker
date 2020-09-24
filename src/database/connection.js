const Mongoose = require('mongoose');

class Connection{
   constructor () {
    this.Connect();
  }

  Connect = async () => {
    try {
      await Mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
      console.log("Mongoose connected");
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new Connection;