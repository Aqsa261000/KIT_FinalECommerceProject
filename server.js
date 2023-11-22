var express = require('express');
var connectDB = require('./db/db');

require('dotenv').config();

var app = express();
connectDB();
var port = process.env.PORT || 5000;


app.use(express.json({extended:false}))

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));



app.listen(port,()=>{
    console.log("Server Started on Port: ",port);
})