const mongoose=require('mongoose')
const Schema= mongoose.Schema
const Eventschema = new Schema(
    {
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
        duration:{
            type:Number,
        },
        startTime:{
            type:Date,
        },
        EventType:{
            type:String,
        },
        images:[],

    }
)
module.exports=mongoose.model("Events",Eventschema)