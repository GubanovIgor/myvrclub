const express = require('express');
const router = express.Router();
const Club = require('../models/clubs');

// router.get('/', async (req, res) => {
//   const clubs = await Club.find();
//   res.json(clubs);
// });

router.post('/', async (req, res) => {

  let num = 0;

  if (req.body.checkedToggle[1].length) {
    const length = req.body.checkedToggle[1].length;
    num = req.body.checkedToggle[1][length-1].split(' ');
    num = parseInt(num[1])
    // console.log(num);
  }

  if (!req.body.checkedToggle[0].length && !req.body.checkedToggle[1].length) {
    const clubs = await Club.find();
    res.json(clubs);
  } else {
    console.log(num)
    const clubs = await Club.find(
      { $or: [{ equipment: { $all: req.body.checkedToggle[0] }}, {price: { $lt: num } }] }
      )
    // const clubs = await Club.find();
    res.json(clubs);
  }
});

module.exports = router;
