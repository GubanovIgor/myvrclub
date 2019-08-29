const express = require('express');
const router = express.Router();
const Game = require('../models/games');

router.post('/', async (req, res) => {

  const conditions =[];

  console.log(req.body);

  const categories = Object.keys(req.body.checkedToggle);

  console.log(req.body.checkedToggle[categories[0]]);

  // Оборудование
  if (req.body.checkedToggle[categories[0]].length) {
    conditions.push({ genre: { $all: req.body.checkedToggle[categories[0]] }})
  }

  // Год выхода
  if (req.body.checkedToggle[categories[2]].length) {
    console.log(req.body.checkedToggle[categories[2]]);
    let years = [];
    req.body.checkedToggle[categories[2]].forEach(el => {
      const reg  = new RegExp(`\.*${el}`);
      years.push({ year: reg })
    });

    const test = [ { year: /.*2018.*/ }, { year: /.*2017.*/ } ];
    console.log(test);
    console.log(years);

    conditions.push( { $or: years})
  }

  // // Возраст
  // if (req.body.checkedToggle[categories[2]].length) {
  //   conditions.push({})
  // }
  //
  // // Теги
  // if (req.body.checkedToggle[categories[3]].length) {
  //   conditions.push({})
  // }
  // console.log('conditions', conditions);

  const skipItems = (req.body.pagination - 1) * 18;

  const games = await Game.find(
    conditions.length ? { $and: conditions } : {}
  ).skip(skipItems).limit(18);

  res.json(games);
});

module.exports = router;
