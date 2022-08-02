const express=require('express');
const connectdb = require('./config/connect');
const maison=require('./routes/Maisondhote')
const app=express();
app.use(express.json());
app.use('/maison',maison)
connectdb()
app.listen(5000,(err)=> err?console.error(err):console.log("server running on port 5000"))