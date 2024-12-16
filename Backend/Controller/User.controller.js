const User = require('../Model/UserSchema.model')

const getAllUsers = async (req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

module.exports = {
    getAllUsers
}