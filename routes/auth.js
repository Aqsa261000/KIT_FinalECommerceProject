const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');

const User = require('../models/Vendor');

const router = express.Router();

// @route GET api/auth
// @describe get loggedin user data
// @access Private
router.get('/', auth, async (req, res) => {
  const id = req.user.id;
  try {
    const user = await User.findById(id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: 'Server error' });
  }
});

// @route POST api/auth
// @describe user login
// @access Public
router.post(
  '/',
  [
    check('email', 'Please enter a valid email address').isEmail(),
    check('password', 'Please enter correct password').exists(),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(400).json({ errors: result.array() });
    }

    const { email, password } = req.body;
    // console.log("REquest body", email+" "+password);

    try {
      const user = await User.findOne({ email });
      const {role} = user;
      console.log(role);
      if(role == "1"){
        console.log("Admin Login");
      }
      else if(role == "0"){
        console.log("Normal User Login");
      }
      else if(role == "2"){
        console.log("Vendor Login");
      }
      console.log("USER: ",user);
      if (!user) {
        return res.status(400).json({ msg: 'User not exist.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Password Incorrect' });
      }


      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWTSECRET,
        {
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) throw err.message;
          return res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: 'Server error' });
    }
    
  }
);

module.exports = router;