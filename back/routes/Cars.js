const express=require('express');
const { getcars, addcars } = require('../routecontrollers/Cars.control');

const router =express.Router();


router.get('/get-cars',getcars);
router.get('/add-cars',addcars);



module.exports=router