const express=require("express")

const app=express()
const port=process.env.PORT || 2331
app.use(express.json())
const connect=require("./config/db")


const productController=require("./controllers/product.controller")

app.use("/products",productController)

app.listen(port,async function(req,res){
    try{
        connect()
        console.log("listening port 2331")
    }
    catch(err){
        console.log(err.message)
    }
})