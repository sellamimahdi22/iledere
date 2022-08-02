const mongoose=require('mongoose')
const schema= mongoose.schema
const Eventschema= new schema(
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