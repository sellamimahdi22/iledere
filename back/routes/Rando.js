const express=require('express');
const { getrando, addRando } = require('../routecontrollers/Rando.control');

const router =express.Router();


router.get('/get-rando',getrando);
router.get('/add-rando',addRando);



module.exports=router