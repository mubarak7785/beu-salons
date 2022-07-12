const express=require("express")

const router=express.Router()

const Product=require("../models/product.model")


router.post("",async function(req,res){
    try{
        const product=await Product.create(req.body)
        return res.status(201).send(product)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("",async function(req,res){
    try{
        const product=await Product.find().lean().exec()
        return res.status(201).send(product)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

router.delete("/:id",async function(req,res){
    try{
        const product=await Product.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send(product)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports=router;