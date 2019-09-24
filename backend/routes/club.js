const express = require('express');
const router = express.Router();
const Club = require('../models/clubs');
const Game = require('../models/games');
// router.get('/', async (req, res) => {
//   const clubs = await Club.find();
//   res.json(clubs);
// });

router.post('/', async (req, res) => {

  const conditions =[];

  // Для конкретной игры в клубе
  if (req.body.gameId.length) {
     const game = await Game.findById(req.body.gameId);
    //console.log('games in club id>>>>>>>', game.clubsIds);
    conditions.push({ _id: { $in: game.clubsIds } })
  }

  if (req.body.checkedToggle[0].length) {
    //console.log(req.body.checkedToggle[0]);
    conditions.push({ equipment: { $all: req.body.checkedToggle[0] }}) // [ps, oculus]
  }

  if (req.body.checkedToggle[1].length) {
    const length = req.body.checkedToggle[1].length;
    const num = req.body.checkedToggle[1][length-1].split(' ')[1];
    conditions.push({price: { $lt: num } })
  }

  const skipItems = (req.body.pagination - 1) * 9;

  const clubs = await Club.find(
    conditions.length ? { $and: conditions } : {}
  ).skip(skipItems).limit(9);
  //console.log('clubs.length>>>>>', clubs.length);
  res.json(clubs);
});

router.post('/statistics', async (req, res) => {
  const id = req.body.clubId;
  //const clubs = await Club.findByIdAndUpdate(req.body.clubId, {clickCounter: });
  const club = await Club.findOneAndUpdate({ _id: id }, { $inc: { clickCounter: 1 } }, {new: true }); // new:true возвр измененный док
  console.log('club',club);
});

module.exports = router;
