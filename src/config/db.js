const mongoose=require("mongoose")

module.exports=()=>{
    return mongoose.connect("mongodb+srv://mubarak:mubarak_123@cluster0.pvaka.mongodb.net/beusalon?retryWrites=true&w=majority")
}