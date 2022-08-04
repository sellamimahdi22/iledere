const Rando = require("../models/Rando");




exports.getrando=async(req,res)=>{
    try {
        const rando= await Rando.find() ;
        res.send(rando)
    } catch (error) {
        res.status(500).json({errors:error.message})
    }
};
exports.addRando=async(req,res)=>{
    const {nom,description,localisation,prix,duration,TourType,GroupSize,images}=req.body
    try {
        const newrando=  new Rando({
            nom,description,localisation,prix,duration,TourType,GroupSize,images
        });
        await newrando.save();
        res.send(newrando)
    } catch (error) {
        res.status(500).json({errors: error.message});

    }
}
exports.getoneRando=async(req,res)=>{
    try {
        const oneRando = await Rando.findById(req.params.id);
        res.send(oneRando);
      } catch (error) {
        res.status(500).json({errors: error.message});
      }
};