const express = require('express');
const router = express.Router();
const Game = require('../models/games');
const Club = require('../models/clubs');

router.post('/', async (req, res) => {

  const conditions = [];

  const categories = Object.keys(req.body.checkedToggle);

  // console.log(req.body);

  let clubGames = [];

  // Для конкретного клуба
  if (req.body.clubId.length) {
    const club = await Club.findById(req.body.clubId);
      console.log('games in club', club.gamesIds);
    conditions.push({ _id: { $in: club.gamesIds } })
  }

  // Оборудование
  if (req.body.checkedToggle[categories[0]].length) {
    // console.log(req.body.checkedToggle[categories[0]]);
    conditions.push({ genre: { $all: req.body.checkedToggle[categories[0]] } })
  }

  // Год выхода
  if (req.body.checkedToggle[categories[2]].length) {
    let years = [];
    req.body.checkedToggle[categories[2]].forEach(el => {
      const reg = new RegExp(`\.*${el}`);
      years.push({ year: reg })
    });

    conditions.push({ $or: years })
    // console.log(years);
  }

  // Возраст
  if (req.body.checkedToggle[categories[3]].length) {
    let ages = [];
    req.body.checkedToggle[categories[3]].forEach(el => {
      const age = el.split('');
      ages.push(parseInt(age[0]));
    });
    conditions.push({ ageLimit: { $all: ages } })
  }

  // const skipItems = (req.body.pagination - 1) * 18;

  // console.log('conditions >>>>', conditions);

  const games = await Game.find(
    conditions.length ? { $and: conditions } : {}
  ).limit(18 * req.body.pagination);
  res.json(games);
});

router.post('/update/:gameId', async (req, res) => {
  const game = await Game.findById(req.params.gameId);
  console.log('body>>>>>>>>>>>>>>>>>>>>>>>>>>>', req.body);
  const newGame = {game, ...req.body};
  console.log('game>>>>>>>>>>>>>>>>>>>>>>>>>>>', game);
  await newGame.save();
  res.json(newGame.name);
});

module.exports = router;
