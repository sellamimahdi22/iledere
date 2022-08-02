const mongoose=require('mongoose')
const Schema= mongoose.Schema
const maisonschema = new Schema({
    
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
        NBed:{
            type:Number,
        },
        bathroom:{
            type:Number,
        },
        square:{
            type:Number,
        },
        Amenities:{
            type:String,
        },
        Nperson:{
            type:Number,
        }
        ,
        images:[],

    }
)
module.exports=mongoose.model("maison",maisonschema)