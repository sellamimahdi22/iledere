const mongoose=require('mongoose')
const Schema= mongoose.Schema


var URLSlug = require("mongoose-slug-generator");

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
        },
        slug: { type: String, slug: "nom"}

    })
    carschema.pre("save", function(next) {
        this.slug = this.nom.split(" ").join("-");
        next();
    }
)
module.exports=mongoose.model("Cars",carschema)