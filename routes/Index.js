
const express=require('express');
const maison=require('./Maisondhote')
const hotels=require('./Hotel')
const cars=require('./Cars')
const Event=require('./Events')
const Rando=require('./Rando')
const user=require('./User')
const router =express.Router();

router.use('/maison',maison)
router.use('/user',user)
router.use('/hotel',hotels)
router.use('/cars',cars)
router.use('/Events',Event)
router.use('/Rando',Rando)
module.exports=router