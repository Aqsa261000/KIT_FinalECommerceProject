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
    default: 0
  },
  gender: {
    type: String,
    // require: true
    default: null
  },
  city: {
    type: String,
    default: null
  },
  cnic: {
    type: String,
    // require: true
    default:null
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

module.exports = mongoose.model('user', userSchema);