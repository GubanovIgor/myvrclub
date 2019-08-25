const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

// Sign Up
router.post('/signup', (req, res) => {
  console.log(req.body);
  const { email, name, password } = req.body;
  User.findOne({ email: email }).then(user => {
    if (user) {
      res.render('register', {
        email,
        name,
        password,
      });
    } else {
      const newUser = new User({
        email,
        name,
        password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.redirect('/users/login');
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// Sign In
router.post('/signin', (req, res) => {
  passport.authenticate('local', {
    successRedirect: '/',
    successRedirect: '/error',
  })(req, res);
});

module.exports = router;
