const express=require('express');
const { getcars, addcars, getonecar } = require('../routecontrollers/Cars.control');

const router =express.Router();


router.get('/get-cars',getcars);
router.get('/add-cars',addcars);
router.get('/getone-cars',getonecar);



module.exports=router