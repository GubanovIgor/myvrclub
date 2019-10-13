const express = require('express');
const router = express.Router();
const transliterate = require('transliterate-cyrillic-text-to-latin-url');
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

router.put('/', async (req, res) => {
   const game = req.body.game;
  let gamenames = await Game.find({ name: 'Eternity Warriors™ VR' });
  gamenames.forEach(game => {
    console.log(game.name);
  })
    game.urlName = transliterate(game.name);
  game.clubsIds = [];

  for (let i = 0; i < game.clubs.length; i++) {
    let club = await Club.findOne({ name: game.clubs[i] });
    if (club === null || club === undefined) return res.json({message: 'Ошибка в названии клуба', status: 'error'});
    game.clubs[i] = club.name;
    game.clubsIds[i] = club._id;
  }
  try {
    await Game.updateOne({ _id: game._id }, { ...game });
  } catch (err) {
    console.log('DB error - ', err);
    res.json({message: 'Ошибка записи.', status: 'error'});
  }
  //console.log('game name', game.name);
  res.json({message: `Игра ${game.name} сохранена.`, status: 'ok'});
});

module.exports = router;
