const express=require('express');
const { getevents, addevents, getoneEvent } = require('../routecontrollers/Event.control');

const router =express.Router();


router.get('/get-events',getevents);
router.get('/add-events',addevents);
router.get('/getone-events',getoneEvent);



module.exports=router