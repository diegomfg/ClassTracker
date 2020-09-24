const Student = require('../models/Student');

class StudentController{
  constructor(){
  }

  handleRoot = async (req, res)=>{
    
    try {
      let student = new Student({first_name: "diego", last_name: "Matheus", major: "Computer Science", password: "diego1210", email: "asda@s.com"});
      student.save().then((student)=>{
        res.json(student);
      }).catch((error)=>{
        throw error;
      });
    } catch (error) {
      throw error;
    }
  }
}

exports.StudentController = new StudentController;