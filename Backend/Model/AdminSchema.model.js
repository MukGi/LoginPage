const { timeStamp } = require('console');
const mongoose = require('mongoose')

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
}, {
    timestamps: true
}
    
)

//Create the model
const Admin = mongoose.model("Admin",AdminSchema)
module.exports = Admin;
