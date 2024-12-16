const express = require('express')
const router = express.Router()
const User = require('../Model/UserSchema.model')
const Users = require('../Controller/User.controller')
router.post('/', async (req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
router.get('/', async (req,res)=>{
    try {
        const user = await User.find({})
        res.send("On the user page")
    } catch (error) {
        
    }
})

router.get('/users',Users.getAllUsers)

module.exports = router;