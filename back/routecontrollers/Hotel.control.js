const Hotel = require("../models/Hotel");




exports.gethotels=async(req,res)=>{
    try {
        const hotel= await Hotel.find() ;
        res.send(hotel)
    } catch (error) {
        res.status(500).json({errors:error.message})
    }
};

exports.addhotels=async(req,res)=>{
    const {nom,description,localisation,prix,Equipments,service,images}=req.body
    try {
        const newhotel=  new Hotel({
            nom,description,localisation,prix,Equipments,service,images
        });
        await newhotel.save();
        res.send(newhotel)
    } catch (error) {
        res.status(500).json({errors: error.message});

    }
}