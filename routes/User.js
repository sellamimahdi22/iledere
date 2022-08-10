
const express=require('express');
const { register, login, auth } = require('../routecontrollers/User.control');

const router=express.Router();

router.post('/register',register)
router.post('/login',login)
router.get('/auth',auth)
module.exports= router;