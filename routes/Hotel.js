const express=require('express');
const { gethotels, addhotels, getoneHotel } = require('../routecontrollers/Hotel.control');

const router =express.Router();


router.get('/get-hotels',gethotels);
router.get('/getone-hotels',getoneHotel);
router.get('/add-hotels',addhotels);



module.exports=router