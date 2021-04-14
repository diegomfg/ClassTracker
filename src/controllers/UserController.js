const { Student } = require('../models/Student');

class UserController{

  constructor(){
    
  }

  handleRoot = async (req, res)=>{
    
    try {

      const users = await Student.find({})

      res.json(users)

    } catch (error) {

      throw error;
      
    }
  }
}

exports.UserController = new UserController;