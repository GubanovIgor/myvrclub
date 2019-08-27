const express = require('express');
const router = express.Router();
const Club = require('../models/clubs');

// router.get('/', async (req, res) => {
//   const clubs = await Club.find();
//   res.json(clubs);
// });

router.post('/', async (req, res) => {
  console.log(req.body.checkedToggle)
  if (!req.body.checkedToggle.length) {
    const clubs = await Club.find();
    res.json(clubs);
  } else {
    const arr = [];
    const club = await Club.findOne();
    arr.push(club)
    res.json(arr);
  }
});

module.exports = router;
