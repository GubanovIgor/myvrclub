const express = require('express');
const router = express.Router();
const transliterate = require('transliterate-cyrillic-text-to-latin-url');
const Game = require('../models/games');
const Club = require('../models/clubs');

router.get('/', async (req, res) => {
  const nameRegex = new RegExp(req.query.name, 'i');
  const games = await Game.find({name: {$regex: nameRegex}});
  res.json( games );
});

router.get('/url', async (req, res) => {
  res.json(await Game.findOne({urlName: req.query.name}));
});


router.post('/', async (req, res) => {

  const conditions = [];
  const categories = Object.keys(req.body.checkedToggle);
  let clubGames = [];

    console.log('searchName', req.body.searchName);
  //Для поиска по имени игры
  if (req.body.searchName) {
    const nameRegex = new RegExp(req.body.searchName, 'i');
    //conditions.push({ _id: { $in: club.gamesIds } })
    conditions.push({name: {$regex: nameRegex}})
  }

  // Для конкретного клуба
  if (req.body.clubId.length) {
    const club = await Club.findById(req.body.clubId);
    // console.log('games in club', club.gamesIds);
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
  ).sort('-rating').limit(18 * req.body.pagination); // "-raiting" - сртировка по убыванию, "raiting" - по возрастанию
  res.json(games);
});

router.put('/', async (req, res) => {
  const game = req.body.game;
  game.urlName = transliterate(game.name);
  game.clubsIds = [];

  for (let i = 0; i < game.clubs.length; i++) {
    let club = await Club.findOne({ name: game.clubs[i] });
    if (club === null || club === undefined) return res.json({
      message: `Ошибка в названии клуба ${game.clubs[i]}`,
      status: 'error'
    });
    game.clubs[i] = club.name;
    game.clubsIds[i] = club._id;
  }
  try {
    await Game.updateOne({ _id: game._id }, { ...game });
  } catch (err) {
    // console.log('DB error - ', err);
    res.json({ message: 'Ошибка записи.', status: 'error' });
  }
  //console.log('game name', game.name);
  res.json({ message: `Игра ${game.name} сохранена.`, status: 'ok' });
});

// router.post('/change_discr', async (req, res) => {
//   const games = await Game.find();
//   games.forEach(async (game) => {
//     let lan = game.language;
//     lan = lan.replace(/<strong>\*<\/strong>/g, '').replace('<br>', ' ');
//     await Game.updateOne({ _id: game._id }, { language: lan });
//     console.log('game %s updated', game.name);
//   });
//   res.end();
// });

module.exports = router;
