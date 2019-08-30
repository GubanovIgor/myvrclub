const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Routes import
const indexRouter = require('./routes/index');
const clubRouter = require('./routes/club');
const gameRouter = require('./routes/game');

const port = 3100;
let app = express();

mongoose.connect('mongodb://localhost:27017/myvrclub', { useNewUrlParser: true, useCreateIndex: true });
//mongoose.connect(`mongodb+srv://rom:<passw>cluster0-woi64.mongodb.net/myvrclub`, { useNewUrlParser: true, useCreateIndex: true });
//mongoose.connect('mongodb+srv://mongo:12345@cluster0-xe8h0.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true });

app.use(morgan('dev'));

const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
};

app.use(corsMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Routes use
app.use('/', indexRouter);
app.use('/club', clubRouter);
app.use('/game', gameRouter);

app.listen(port, function () {
  console.log(`Backend on port ${port}!`);
});
