const express=require('express');
const { getrando, addRando, getoneRando } = require('../routecontrollers/Rando.control');

const router =express.Router();


router.get('/get-rando',getrando);
router.get('/getone-rando',getoneRando);
router.get('/add-rando',addRando);



module.exports=router