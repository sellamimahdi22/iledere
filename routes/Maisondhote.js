const express=require('express');
const { getmaisons, addmaison, getoneMaison } = require('../routecontrollers/Maison.control');

const router =express.Router();


router.get('/get-maison',getmaisons);
router.get('/getone-maison',getoneMaison);
router.post('/add-maison',addmaison);



module.exports=router