const express=require('express');
const connectdb = require('./config/connect');
const indexroute=require('./routes/Index')
const app=express();
app.use(express.json());
app.use('/',indexroute)
// app.use('/user',user)

connectdb()
app.listen(5000,(err)=> err?console.error(err):console.log("server running on port 5000"))