const mongoose=require('mongoose')
const Schema= mongoose.Schema
const hotelschema = new Schema({
    
        nom:{
            type: String,
            required:true,
        },
        description:{
            type: String,
            
        },
        localisation:{
            type: String,

        },
        prix:{
            type:Number,
        },
        Equipments:{
            type:String,
        },
        service:{
            type:String,
        },
        images:[],

    }
)
module.exports=mongoose.model("hotel",hotelschema)