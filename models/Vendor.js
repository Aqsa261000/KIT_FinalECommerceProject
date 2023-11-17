const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
  },
  role: {
    type: Number,
    default: 2
  },
  gender: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  cnic: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('vendor', userSchema);