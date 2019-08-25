const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

// Sign Up
router.post('/signup', async (req, res) => {
  const { email, name, password } = req.body;
  const check = await User.findOne({ email: email });
  if (!check) {
    const newUser = new User({
      email: email,
      name: name,
      password: password,
    });
    newUser.password = newUser.generateHash(password);
    newUser.save();
    res.json(true);
  } else {
    res.json(false);
  }
});

// Sign In
router.post('/signin', async (req, res) => {
  const user = await User.findOne({ email: email });
  if (user.comparePassword(password)) {
    req.json(true);
  } else {
    res.json(false);
  }
});

// router.post('/signup', (req, res) => {
//   console.log(req.body);
//   const { email, name, password } = req.body;
//   User.findOne({ email: email }).then(user => {
//     if (user) {
//       res.render('register', {
//         email,
//         name,
//         password,
//       });
//     } else {
//       const newUser = new User({
//         email,
//         name,
//         password,
//       });
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser
//             .save()
//             .catch(err => console.log(err));
//         });
//       });
//     }
//   });
// });

// // Sign In
// router.post('/signin', (req, res) => {
//   passport.authenticate('local');
// });

module.exports = router;
