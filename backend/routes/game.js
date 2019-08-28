const express = require('express');
const router = express.Router();
const Game = require('../models/games');

router.post('/', async (req, res) => {

  const conditions =[];

  console.log(req.body)

  const categories = Object.keys(req.body.checkedToggle);

  console.log(req.body.checkedToggle[categories[0]].length)

  // Оборудование
  if (req.body.checkedToggle[categories[0]].length) {
    conditions.push({ equipment: { $all: req.body.checkedToggle[categories[0]] }})
  }

  // // Год выхода
  // if (req.body.checkedToggle[categories[1]].length) {
  //   conditions.push({})
  // }
  //
  // // Возраст
  // if (req.body.checkedToggle[categories[2]].length) {
  //   conditions.push({})
  // }
  //
  // // Теги
  // if (req.body.checkedToggle[categories[3]].length) {
  //   conditions.push({})
  // }

  const games = await Game.find(
    conditions.length ? { $and: conditions } : {}
  );

  res.json(games);
});

module.exports = router;
