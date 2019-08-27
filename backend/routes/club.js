const express = require('express');
const router = express.Router();
const Club = require('../models/clubs');

// router.get('/', async (req, res) => {
//   const clubs = await Club.find();
//   res.json(clubs);
// });

router.post('/', async (req, res) => {
  const clubs = await Club.find();
  console.log(req.body);
  res.json(clubs);
});

module.exports = router;
