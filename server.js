const express = require('express');
const connectDB = require('./db/db');

require('dotenv').config();

var app = express();
connectDB();
var port = process.env.PORT || 5000;


app.use(express.json({extended:false}))

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/reset',require('./routes/reset'));
app.use('/api/forget',require('./routes/forget'))
// app.use('api/vendor/products', require('./routes/products'))


app.listen(port,()=>{
    console.log("Server Started on Port: ",port);
})