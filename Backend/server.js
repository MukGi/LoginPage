/**
 * Dependencies import
 */
const express = require('express')
const PORT = process.env.PORTS||4000
require('dotenv/config')
const app = express()
const mongoose = require('mongoose')
const cors =require('cors')

/**
 * Routes
 */
const Loginroute = require('./Router/Login.routes')

/**DB Connection */
mongoose.connect(process.env.MONGO_DB)
.then(()=>{
    console.log("Connected to DB");
    
})
.catch(()=>{
    console.log("Failed Connection");
})

/**
 * Route References
 */
app.use(express.json())
app.use(cors())
app.use('/Login',Loginroute)


app.get('/', async (req,res)=>{
    try {
        res.send("READ")
    } catch (error) {
        res.status(500).send(`Error: ${error}`)
    }
})


app.listen(PORT,()=>{
    console.log(`Express server running at http://localhost:${PORT}/`);
})
