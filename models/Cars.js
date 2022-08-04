const mongoose=require('mongoose')
const Schema= mongoose.Schema
const carschema = new Schema({
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
        features:{
            type:String,
        },
        passenger:{
            type:Number,
        },
        Gearshift:{
            type:String,
        },
        images:[],
        bagagge:{
            type:Number,
        },
        door:{
            type:Number,
        }

    }
)
module.exports=mongoose.model("Cars",carschema)