/**
 * Dependencies import
 */
const express = require('express')
const PORT = process.env.PORTS
const PORTS = 4000
require('dotenv/config')
const app = express()
const mongoose = require('mongoose')

/**
 * Routes
 */
const Useroute = require('./Backend/Router/Login.routes')

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
app.use('/Login',Useroute)


app.get('/', async (req,res)=>{
    try {
        res.send("READ")
    } catch (error) {
        res.status(500).send(`Error: ${error}`)
    }
})

app.listen(PORTS,()=>{
    console.log(`Express server running at http://localhost:${PORTS}/`);
})
