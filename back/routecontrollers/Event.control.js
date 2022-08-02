const Event = require("../models/Events");




exports.getevents=async(req,res)=>{
    try {
        const event= await Event.find() ;
        res.send(event)
    } catch (error) {
        res.status(500).json({errors:error.message})
    }
};

exports.addevents=async(req,res)=>{
    const {nom,description,localisation,prix,duration,startTime,EventType,images}=req.body
    try {
        const newevent=  new Event({
            nom,description,localisation,prix,duration,startTime,EventType,images
        });
        await newcar.save();
        res.send(newevent)
    } catch (error) {
        res.status(500).json({errors: error.message});

    }
}