const Maison=require('../models/Maisondhote')


exports.getmaisons=async(req,res)=>{
    try {
        const maison= await Maison.find() ;
        res.send(maison)
    } catch (error) {
        res.status(500).json({errors:error.message})
    }
};

exports.addmaison=async(req,res)=>{
    const {localisation,square,Amenities,Nperson,bathroom,NBed,nom,description,images}=req.body
    try {
        const newmaison=  new Maison({
            localisation,square,Amenities,Nperson,bathroom,NBed,nom,description,images
        });
        await newmaison.save();
        res.send(newmaison)
    } catch (error) {
        res.status(500).json({errors: error.message});

    }
}

exports.getoneMaison=async(req,res)=>{
    try {
        const oneMaison = await Maison.findById(req.params.id);
        res.send(oneMaison);
      } catch (error) {
        res.status(500).json({errors: error.message});
      }
};