const Admins = require('../Model/AdminSchema.model')

//Create admin
const createAdmin = async (req,res)=>{
    try {
        const admin = req.body;

        if (!admin.name || !admin.password) {
            return res.status(404).json({message: "Enter name or password"})
        }
        const newAdmin = new Admins(admin);
         await newAdmin.save()
         res.status(200).json({success: true, data: newAdmin})
    } catch (e) {
        res.status(500).json({message:console.error(e)})
    }
}

//Delete admin by id
const deleteAdmin = async (req, res)=>{
    try {
        const {id} = req.params;
        const admin = Admins.findById(id)
        if(!admin){
            return res.status(404).json({message:"Admin does not exist"})
        }
        await Admins.findByIdAndDelete(id)
        res.status(200).json({success:true, message:`Admin deleted successfully`})
    } catch (error) {
        res.status(500).json({message:`error occured:${error}`})
    }
}

//Get least of all admins
const getAllAdmins = async (req,res)=>{
    try {
        const admins = await Admins.find({})
        if(!admins){
            res.status(404).json({message:"No Admins found"})
        }
        else{
            const allAdmins = await Admins.find({})
            //res.status(200).json({success: true, data: allAdmins})
            res.status(200).json({success:true, data: allAdmins})
        }

        

    } catch (e) {
        res.status(500).json({success: false, message:"Could got get Admin list"})
    }
}

//Get admin by id
const getAdmin = async (req,res) => {
    try {
        const {id} = req.params;
        const admin = await Admins.findById(id)
        if(!admin){
           return res.status(404).json({message:`Admin not found`})
        }
        res.status(200).json({success: true, data: admin})
    } catch (e) {
        console.error(e)
        res.status(500).json({message: `Error Occured: ${e}`})
    }
}

//Update admin by ID
const updateAdmin = async (req,res) => {
    try {
        const { id } = req.params;
        const admin = Admins.findById(id);
        if(!admin){
            return res.status(404).json({success: false, message:"Admin not found"})
        }
        else{
            const updateAdmin = await Admins.findByIdAndUpdate(id,req.body)
            res.status(200).json({success: true, message: updateAdmin})
        }
    } catch (e) {
        res.status(500).json({success: false, message:`Error Occured: ${e}`})
    }
}
module.exports ={
    createAdmin,
    deleteAdmin,
    getAllAdmins,
    getAdmin,
    updateAdmin
}