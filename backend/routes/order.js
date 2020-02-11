const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
const Club = require('../models/clubs')
const Game = require('../models/games')
const Order = require('../models/orders')

router.get('/', async (req, res) => {
  const { clubId, date } = req.query
  const orders = await Order.find({clubId:clubId, date:date})
  res.json(orders)
})

module.exports = router
