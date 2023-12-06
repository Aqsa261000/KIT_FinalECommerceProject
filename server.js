var express = require("express");
var cors = require("cors");
var connectDB = require("./db/db");

require("dotenv").config();

var app = express();
app.use(cors());
connectDB();
var port = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
// app.use('api/vendor/products', require('./routes/products'))

app.listen(port, () => {
  console.log("Server Started on Port: ", port);
});
