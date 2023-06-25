const express=require("express")
const {ClothModel}=require("../module/Cloth.module")
const ClothRouter=express.Router()

ClothRouter.post("/create",async(req,res)=>{
    try {
        console.log(req.body)
     const singlecloth=new ClothModel(req.body)
    await singlecloth.save()
    res.status(200).json({msg:"Data is Added at DB",data:req.body})

    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})

ClothRouter.get("/",async(req,res)=>{
    try {
 const data=await ClothModel.find() 
 res.status(200).json({msg:data})   
 
    } catch (error) {
        res.status(400).json({msg:error.message})
        
    }
})

module.exports={ClothRouter}