const express=require('express');
const { getmaisons, addmaison } = require('../routecontrollers/Maison.control');

const router =express.Router();


router.get('/get-maison',getmaisons);
router.post('/add-maison',addmaison);



module.exports=router