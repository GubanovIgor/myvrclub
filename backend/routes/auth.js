const express = require('express');
const router = express.Router()

const {signup, signin, signout, requireSignin} = require('../old_auth/controllers/auth');
//const {userSignupValidator} = require('../validator/index.js');

//router.post('/signup', userSignupValidator, signup);
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;
