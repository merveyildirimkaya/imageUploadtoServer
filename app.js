const dotenv = require('dotenv').config();

const express = require('express')
const app = express()
const path = require('path')


app.use("/uploads",express.static(path.join(__dirname,'/src/uploads')))


const imageRouter = require("./src/routers/image_router")


app.use('/', imageRouter)


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on Port:${process.env.PORT}`)
})