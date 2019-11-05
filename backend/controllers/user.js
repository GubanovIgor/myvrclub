const User = require('../models/users');

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: 'User not found'
      });
    }
    req.profile = user;
    console.log('user', user.name);
    next();
  });
};

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
}

exports.update = (req, res) => {
  User.findOneAndUpdate({_id: req.profile._id},
    {$set: req.body},
    {$new: true},
    (error, user) => {
      if (error) {
        return res.status(400).json({
          error: "You are not authorized to perform this"
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      return res.json(user);
    });
};