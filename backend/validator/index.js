exports.userSignupValidator = (req, res, next) => {
  req.check('name', 'Name is required').notEmpty();
  req.check('email', 'Email is not a valid email')
    .matches(/.+\@.+\..+/)
    .withMessage('Email address must contain @')
    .isLength({
      min: 4,
      max: 32
    });
  req.check('password', 'Password is required').notEmpty();
  req.check('password', 'Password length')
    .isLength({
      min: 6,
    })
    .withMessage('Password length must be at least 6 characters')
    .matches(/\d/)
    .withMessage('password must contain number')
  const errors = req.validationErrors()
  if(errors){
    const firstError = errors.map(error => error.msg)[0]
    return res.status(400).json({
      error: firstError
    })
  }
  next()
};