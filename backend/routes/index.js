const express = require('express');
const router = express.Router();
const Club = require('../models/clubs');
const Game = require('../models/games');

router.get('/', (req, res) => {
  res.send('Hello world');
});

module.exports = router;
