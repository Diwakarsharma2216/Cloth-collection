const express=require("express")
const { connections } = require("./db")
var cors = require('cors')
const { ClothRouter } = require("./routes/Cloth.routes")
const { userRouter } = require("./routes/User.routes")
require("dotenv").config()

const app=express()
app.use(cors())
app.use(express.json())

// ###### user Router here  ########
app.use("/user",userRouter)

//###### Cloth Router is Here #####
app.use("/cloth",ClothRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await connections 
        console.log(`Server is Running at ${process.env.PORT}`)
        console.log(">>>>>>>>>> connected to the DataBase>>>>>>>>>>>>")
    } catch (error) {
        console.log("Something Went Wrong To connected the database")
    }
})