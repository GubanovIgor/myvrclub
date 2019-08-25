const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');

// Passport Config
require('./config/passport.js')(passport);

// Routes import
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

const port = 3100;
let app = express();

mongoose.connect('mongodb://localhost:27017/myvrclub', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

app.use(morgan('dev'));

const corsMiddleware = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	res.header('Access-Control-Allow-Methods', '*');
	next();
};

app.use(corsMiddleware);

// Json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Express body parser
app.use(express.urlencoded({ extended: true }));

//Routes use
app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(port, function () {
  console.log(`Backend on port ${port}!`);
});
