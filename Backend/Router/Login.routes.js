const express = require('express')
const Users = require('../Controller/User.controller')
const Admins = require('../Controller/Admin.controller')
// import User from '../Model/UserSchema.model'
// import Users from '../Controller/User.controller'
// import express from 'express'
const router = express.Router()


router.post('/User', Users.createUserLogin)
router.post('/Admin',Admins.createAdminLogin)
router.get('/', async (req,res)=>{
    try {
        res.send("On the user page")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.get('/users',Users.getAllUsers)

module.exports = router;