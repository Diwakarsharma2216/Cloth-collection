const { Schema, model } =require("mongoose")

const userScema=Schema({
    name:String,
    email:String,
    gender:String,
    address:String,
    userprofile:String
})

const usermodel=model("user",userScema)

module.exports={usermodel}