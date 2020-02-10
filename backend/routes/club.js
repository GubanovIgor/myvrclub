const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
const Club = require('../models/clubs')
const Game = require('../models/games')
const Order = require('../models/orders')
const transliterate = require('transliterate-cyrillic-text-to-latin-url')

router.get('/', async (req, res) => {
  const nameRegex = new RegExp(req.query.name, 'i')
  const games = await Club.find({name: {$regex: nameRegex}})
  res.json( games )
})

router.get('/url', async (req, res) => {
  // console.log(req.query.name)
  res.json(await Club.findOne({urlName: req.query.name}))
})

// Получить один клуб для карты
router.post('/1', async (req, res) => {
  console.log(req.body.clubId, "ОДИН КЛУБ")
  res.json([await Club.findOne({_id: req.body.clubId})])
  // if (req.query.name === '' || req.query.name === undefined) res.json( await Club.find())
  // else res.json([await Club.findOne({name: req.query.name})])
})

// Получаем количество клубов
router.get('/amount', async (req, res) => {
  res.json(await Club.count())
})

// Получаем игры по фильтрам
router.post('/', async (req, res) => {
  const conditions = []

    console.log('searchName', req.body.searchName)
  //Для поиска по имени клуба
  if (req.body.searchName) {
    const nameRegex = new RegExp(req.body.searchName, 'i')
    conditions.push({name: {$regex: nameRegex}})
  }

  // Для конкретной игры в клубе
  if (req.body.gameId.length) {
     const game = await Game.findById(req.body.gameId)
    // console.log('clubs in game id>>>>>>>', game.clubsIds);
    conditions.push({ _id: { $in: game.clubsIds } })
  };

  // По оборудоавнию
  if (req.body.checkedToggle[0].length) {
    // console.log(req.body.checkedToggle[0]);
    conditions.push({ equipment: { $all: req.body.checkedToggle[0] }}) // [ps, oculus]
  }

  // По цене
  if (req.body.checkedToggle[1].length) {
    const length = req.body.checkedToggle[1].length
    const num = req.body.checkedToggle[1][length - 1].split(' ')[1]
    conditions.push({price: {$lt: num}})
  }

  // const skipItems = (req.body.pagination - 1) * 9
  // console.log(req.body.pagination)
  const clubs = await Club.find(
    conditions.length ? {$and: conditions} : {}
  ).sort("-rating").limit(req.body.pagination * 9)
  // console.log('clubs.length>>>>>', clubs.length)
  res.json(clubs)
})

router.put('/', async (req, res) => {
  const club = req.body.club
  club.urlName = transliterate(club.name)
  club.clubsIds = [];

  for (let i = 0; i < club.games.length; i++) {
    console.log('game: ', club.games[i])
    let game = await Game.findOne({name: club.games[i]})
    if (game === null || game === undefined) return res.json({
      message: `Ошибка в названии игры ${club.games[i]}`,
      status: 'error'
    })
    club.games[i] = game.name
    club.gamesIds[i] = game._id
  }
  // console.log('запрос сохранения')
  try {
    await Club.updateOne({_id: club._id}, {...club})
  } catch (err) {
    // console.log('DB error - ', err)
    res.json({message: 'Ошибка записи.', status: 'error'})
  }
  // console.log('club name %s сохранен', club.name)
  res.json({message: `Клуб ${club.name} сохранен.`, status: 'ok'})
})

router.post('/statistics', async (req, res) => {
  const id = req.body.clubId
  const club = await Club.findOneAndUpdate({_id: id}, {$inc: {clickCounter: 1}}, {new: true}); // new:true возвр измененный док
  console.log('club %s was clicked', club.name)
  res.end()
})

router.post('/reservation', (req, res) => {
  console.log(req.body)
  const { date, name, time, email, phone, clubId, sum, headsets } = req.body
  const order = new Order ({
    _id: new mongoose.Types.ObjectId(),
    date,
    name,
    time,
    email,
    phone,
    clubId,
    sum,
    headsets
  })
  order.save()

  res.end()
})

router.get('/reservation', async (req, res) => {
  const { clubId, date } = req.query

  // Получаем все заказы клуба на выбранный пользователем день
  const orders = await Order.find({clubId:clubId, date:date})

  // Делаем объект со всеми очками клуба
  const club = await Club.findById(req.query.clubId)
  const headsets = {}
  Object.keys(club.headsets).forEach(el => {
    headsets[el] = []
    for (let i = 0; i < club.headsets[el]; i++){
      headsets[el].push({})
    }
  })

  // Ищем есть ли совпадения в 2 массивах
  const areArrayIsDifferent = (arr1, arr2) => {
    let check = true
    arr1.forEach(el => {
      if (arr2.includes(el)) {
        check = false
      }
    })
    return check
  }

  // Добавляет сеанс в поле модели
  const setSessionToModel = (model, time, date) => {
      const index = headsets[model].find((headset) => {
        if (!headset.hasOwnProperty(date)) {
          return headset
        }
        if (areArrayIsDifferent(time, headset[date])) {
          return headset
        }
      })

      if (index) {
        if (!index[date]) {
          index[date] = []
        }
        time.forEach(time => index[date].push(time))
      }
  }

  // Заполняем объект с очками сеансами которые заняты
  orders.forEach(order => {
    Object.keys(order.headsets).forEach(model => {
      const countHeadsetsOfModel = order.headsets[model].length
      for (let i = 0; i < countHeadsetsOfModel; i++) {
        setSessionToModel(model, order.time, order.date)
      }
    })
  })
  res.json(headsets)
})

// router.post('/adddescription', async (req, res) => {
//   await Club.update({}, { $set: {"description": '', "short_description":''} }, {upsert:false, multi:true})
//   console.log('clubbbbbbb');
//   res.send('ok')
// });


// router.post('/change_equp', async (req, res) => {
//   const clubs = await Club.find();
//   clubs.forEach( async (club) => {
//     let equipment = club.equipment.map((el)=> {
//       if(el === '4 HTC Vive') return 'HTC Vive';
//       if(el === 'PS4') return 'PS VR';
//       if(el === 'FullBody VR') return 'Full Body VR';
//       if(el === '8') return 'HTC Vive';
//       if(el === '4') return 'HTC Vive';
//       if(el === '24') return 'HTC Vive';
//       return el;
//     });
//     await Club.updateOne({ _id: club._id }, { equipment });
//     console.log('club ', club.name);
//     console.log('equipment changed to', equipment);
//   });
//   res.end();
// });

module.exports = router;
