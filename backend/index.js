const express=require("express")
const { connections } = require("./db")
require("dotenv").config()
const app=express()

app.listen(process.env.PORT,async()=>{
    try {
        await connections 
        console.log(`Server is Running at ${process.env.PORT}`)
        console.log(">>>>>>>>>> connected to the DataBase>>>>>>>>>>>>")
    } catch (error) {
        console.log("Something Went Wrong To connected the database")
    }
})