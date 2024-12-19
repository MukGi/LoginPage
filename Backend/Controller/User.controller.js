const User = require('../Model/UserSchema.model')

const getAllUsers = async (req,res)=>{
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const createUserLogin = async (req,res)=>{
    try {
        const user = req.body
        const newUser = new User(user)
        //const newUser = await User.create(req.body)
        await newUser.save();
        res.status(200).json({success: true, data: user})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAllUsers,
    createUserLogin
}