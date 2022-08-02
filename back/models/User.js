const mongoose=require('mongoose')
const Schema= mongoose.Schema
const userschema = new Schema({
    firstname: String,
    Lastname: String,
    Email: String,
    password:String,
    phone: String,
    

})
module.exports=mongoose.model("user",userschema)