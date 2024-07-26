const express = require('express');
const Connection  = require('./database/db');
const dotenv = require('dotenv');
const Router = require('./routes/route');
const cors = require('cors')
const bodyParser = require('body-parser')

dotenv.config()
const app=express()

const port = 8000


app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', Router)


const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD


Connection(USERNAME,PASSWORD)
app.listen(port, ()=> console.log(`Server is running at port no. ${port}`))