const express=require('express');
const { gethotels, addhotels } = require('../routecontrollers/Hotel.control');

const router =express.Router();


router.get('/get-hotels',gethotels);
router.get('/add-hotels',addhotels);



module.exports=router