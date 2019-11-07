const User = require('../models/users');
const {errorHandler} = require('../helpers/dbErrorHandler')
const jwt = require('jsonwebtoken'); // generate token
const expressJwt = require('express-jwt'); // autorization check

exports.signup = (req, res) => {
  // console.log(req.body)
  const user = new User(req.body);
  user.save((error, user) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error)
      })
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({
      user
    })
  })
}

exports.signin = (req, res) => {
  // based on email address
  const {email, password} = req.body;
  User.findOne({email}, (error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: 'User not found'
      })
    }
    if (!user.authenticate(password)){
      return res.status(401).json({
        error: "password does not match"
      })
    }
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    res.cookie('t', token, {expire: new Date() + 9999});
    const {_id, name, email, role} = user;
    res.json({token, user: {_id, name, email, role}})
  })
}

exports.signout = (req, res) => {
  res.clearCookie('t')
  res.json({message: 'Signing out successfully'})
}

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth"
})

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id
  if (!user) {
    return res.status(403).json({
      error: 'Access denied'
    });
  }
  next();
}

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: 'Admin resourse! Access denied'
    });
  }
  next();
}