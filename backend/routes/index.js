const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.get('/error', (req, res) => {
  res.send('error');
});

module.exports = router;
