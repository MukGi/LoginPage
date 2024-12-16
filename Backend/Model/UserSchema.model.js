//Acitvage Mongoose
const mongoose = require('mongoose')

//Create User Schema
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    password:{
        type: String,
        require: true
    }
})

//Create Admin Schema
const AdminSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    password:{
        type: String,
        require: true
    }
})

//Defining the models
const User = mongoose.model("User", UserSchema)
const Admin = mongoose.model("Admin",AdminSchema)

//Export modules for use
module.exports = {
    User,
    Admin
};

