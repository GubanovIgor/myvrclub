const express = require('express');
const router = express.Router();
const Game = require('../models/games');

router.get('/', async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

module.exports = router;
