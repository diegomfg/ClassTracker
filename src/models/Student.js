const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const constants = require('../../util/constants');


const StudentSchema = new mongoose.Schema({

  first_name: {
    type: String,
    default: null,
    // required: true,
  },
  last_name: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  biography: {
    type: String,
    // required: false,
    // minlength: 5,
    default: ""
  },
  major: {
    type: String,
    required: false,
    default: ""
  },

  role: {
    type: String,
    enum: constants.USER_ROLES,
    default: constnats.USER_ROLES[0]
  }

});

StudentSchema.pre("save", function(next){

  let user = this;

      // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });

})

const Student = mongoose.model("Student", StudentSchema);

module.exports = { Student }