var express = require('express');
var connectDB = require('./db/db');

require('dotenv').config();

var app = express();
connectDB();
var port = process.env.PORT || 5000;


app.use(express.json({extended:false}))

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/auth-user', require('./routes/auth-user'));
app.use('/api/vendor', require('./routes/vendor'));



app.listen(port,()=>{
    console.log("Server Started on Port: ",port);
})