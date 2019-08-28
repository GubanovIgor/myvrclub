const express = require('express');
const router = express.Router();
const Club = require('../models/clubs');

// router.get('/', async (req, res) => {
//   const clubs = await Club.find();
//   res.json(clubs);
// });

router.post('/', async (req, res) => {

  const conditions =[];

  if (req.body.checkedToggle[0].length) {
    conditions.push({ equipment: { $all: req.body.checkedToggle[0] }})
  }

  if (req.body.checkedToggle[1].length) {
    const length = req.body.checkedToggle[1].length;
    const num = req.body.checkedToggle[1][length-1].split(' ')[1];
    console.log(num);
    conditions.push({price: { $lt: num } })
  }

  const clubs = await Club.find(
    conditions.length ? { $and: conditions } : {}
  );

  res.json(clubs);
});

module.exports = router;
