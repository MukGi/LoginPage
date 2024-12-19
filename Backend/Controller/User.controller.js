const User = require('../Model/UserSchema.model')

//Create a new user name and password
const createUserLogin = async (req,res)=>{
    try {
        const user = req.body
        if(!user.name||!user.password){
            res.status(400).json({message:"Enter Name or password"})
        }
        const newUser = await User.create(user)
        res.status(200).json({success: true, data: newUser})
    } catch (error) {
        res.status(500).json({message: `Might be: ${e}`})
    }
}

// Get a list of all users
const getAllUsers = async (req,res)=>{
    try {
        const users = await User.find({});
        res.status(200).json({success:true, data:users})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

//Get User by ID
const getUser = async (req,res) => {
    try {
        const {id} = req.params;
        const user = User.findById(id);

        if (!user) {
            return res.status(404).json({success:false,message:"User not found"})
        }
        const foundUser = await User.find(user);
        res.status(200).json({success: true, message:foundUser})
    } catch (e) {
        res.status(500).json({success:false, message:`Error: ${e}`})
    }
}
//Update Existing User
const updateUser = async (req,res) => {
    try {
        const {id} = req.params;
        const user = User.findById(id);
        if (!user) {
            return res.status(404).json({success:false,message:"User not found"})
        }
        const updatedUser = await User.findByIdAndUpdate(id,req.body)
        res.status(200).json({
            success: true,
            message: updatedUser
        })
    } catch (e) {
        res.status(500).json({success:false,message:`${e}`})
    }
}
//Delete User by ID
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        await User.findByIdAndDelete(id);
        res.status(200).json({message:`User deleted`})

    } catch (e) {
        res.status(500).json({message: `${e}`})
    }
    
}

module.exports = {
    getAllUsers,
    createUserLogin,
    deleteUser,
    getUser,
    updateUser
}