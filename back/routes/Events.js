const express=require('express');
const { getevents, addevents } = require('../routecontrollers/Event.control');

const router =express.Router();


router.get('/get-events',getevents);
router.get('/add-events',addevents);



module.exports=router