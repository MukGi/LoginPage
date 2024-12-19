const express = require('express')
const Users = require('../Controller/User.controller')
const Admins = require('../Controller/Admin.controller')
const Admin = require('../Model/AdminSchema.model')
const router = express.Router()

/**
 * User Routes
 */
router.post('/User', Users.createUserLogin)
router.delete('/User/:id',Users.deleteUser)
router.get('/User',Users.getAllUsers)
router.put('/User/:id',Users.updateUser)
router.get('/User/:id',Users.getUser)

/**
 * Admin Routes
 */
router.post('/Admin',Admins.createAdmin)
router.delete('/Admin/:id',Admins.deleteAdmin)
router.get('/Admin', Admins.getAllAdmins)
router.get('/Admin/:id',Admins.getAdmin)
router.put('/Admin/:id', Admins.updateAdmin)

/**
 * Login Page Routes
 */
router.get('/', async (req,res)=>{
    try {
        res.send("On the Login Page")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

module.exports = router;