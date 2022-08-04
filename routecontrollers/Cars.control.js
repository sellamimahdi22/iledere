const Cars = require("../models/Cars");


exports.getcars=async(req,res)=>{
    try {
        const car= await Cars.find() ;
        res.send(car)
    } catch (error) {
        res.status(500).json({errors:error.message})
    }
};

exports.addcars=async(req,res)=>{
    const {nom,description,localisation,prix,features,passenger,Gearshift,images,bagagge,door}=req.body
    try {
        const newcar=  new Cars({
            nom,description,localisation,prix,features,passenger,Gearshift,images,bagagge,door
        });
        await newcar.save();
        res.send(newcar)
    } catch (error) {
        res.status(500).json({errors: error.message});

    }
}
exports.getonecar=async(req,res)=>{
    try {
        const Car = await Cars.findById(req.params.id);
        res.send(Car);
      } catch (error) {
        res.status(500).json({errors: error.message});
      }
};