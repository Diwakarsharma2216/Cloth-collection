const { Schema, model } =require("mongoose");

const ClothScema=Schema({
    title:String,
    price:String,
    description:String,
    size:String,
    color:String,
    quantity:Number

})

const ClothModel=model("cloth",ClothScema)

module.exports={ClothModel}
