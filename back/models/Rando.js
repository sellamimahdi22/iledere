const mongoose=require('mongoose')
const schema= mongoose.schema
const Randoschema= new schema(
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
        TourType:{
            type:String,
        },
        GroupSize:{
            type:String,
        },
        images:[],

    }
)
module.exports=mongoose.model("Randos",Randoschema)