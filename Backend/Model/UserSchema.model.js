//Acitvage Mongoose
const mongoose = require('mongoose');
const { timeStamp } = require('node:console');

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
    
},
{
    timestamps: true
});
exports.UserSchema = UserSchema;


//Defining the models
const User = mongoose.model("User", UserSchema)


//Export modules for use
module.exports = User;

