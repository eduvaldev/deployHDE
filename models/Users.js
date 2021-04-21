const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const role = {
  superAdmin:'superAdmin',
  admin: 'admin',
  stuff: 'stuff',
  client: 'client'
}

const usersSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"]
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: props => `${props.value} is not a valid email`
    },
    required: [true, "email is required"]
  },
  password: {
    type: String,
    unique: false,
    validate: {
      validator: function (v) {
        return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(v);
      },
      message: props => `${props.value} is not a valid password.`
    },
    required: [true, "password is required"]
  },
  role: {
    type: String,
    unique: false,
    required: [true,"role is required"],
    default: role.client
  },
  manager: {
    type: String,
    unique: false,
  },
  status: {
    type: String,
    unique: false,
    default: 'active'
  }
},
{ timestamps: { createdAt: true } });

usersSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

usersSchema.methods.validPassword = function (password, encrypted) {
  return bcrypt.compareSync(password, encrypted);
}

const User = mongoose.model("User", usersSchema);

//Create super user
User.findOne( {email:'super_admin@ihde.com'}, function(err, user){
  if(!user){
    let superUser = new User({
      username: 'Super Admin',
      email:'super_admin@ihde.com',
      password:'superuser123#@!',
      role: role.superAdmin
    })
    
    superUser.password = superUser.generateHash(superUser.password)
    superUser.save(function (err){
      if (err) throw err;
            console.log("super user created!");
    })
  }
})

module.exports = User;
