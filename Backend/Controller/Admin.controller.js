const Admins = require('../Model/AdminSchema.model')

const createAdminLogin = async (req,res)=>{
    try {
        const admin = req.body;

        if (!admin.name || !admin.password) {
            res.status(404).json({message: "Enter name or password"})
        }
        const newAdmin = new Admins(admin);
         await newAdmin.save()
         res.status(200).json({success: true, data: newAdmin})
    } catch (e) {
        res.status(500).json({message:console.error(e)})
    }
}

module.exports ={
    createAdminLogin
}