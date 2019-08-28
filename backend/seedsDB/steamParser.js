// var needle = require('needle');
// var cheerio = require('cheerio');
const transliterate = require('transliterate-cyrillic-text-to-latin-url');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const Game = require('../models/games.js');
const dbName = 'mongodb://localhost/myvrclub';
const fs = require('fs');

mongoose.connect(dbName, { useNewUrlParser: true, useCreateIndex: true });

// let getGames = async () => {
//   let data = [];
//   for (let i = 1; i <= 148; i++) {
//     const url = `https://store.steampowered.com/search/?vrsupport=401&page=${i}`;
//     needle.get(url, function (err, res) {
//       let $ = cheerio.load(res.body);
//       const games = $('.search_result_row');
//
//       games.each((index) => {
//         const id = $(games[index]).data('ds-appid');
//         if (id) {
//           data.push(id);
//         }
//
//         console.log(data);
//         fs.writeFileSync('VrGameList.txt', data, 'utf8');
//       });
//     });
//   };
//
//   return data;
// };

let addGames = async () => {
  let gameIds = fs.readFileSync('VrGameList.txt', 'utf8').split(',');
  let data = null;
  for (let i = 3500; i < gameIds.length; i++) {
    while (true) {
      if (data && data[gameIds[i]]) {
        break;
      } else {
        let url = `https://store.steampowered.com/api/appdetails?appids=${gameIds[i]}`;
        let response = await fetch(url);
        data = await response.json();
        console.log(gameIds.length);
      };
    };

    let screenShot;
    let genre;
    if (data[gameIds[i]].data.screenshots) {
      screenShot = data[gameIds[i]].data.screenshots.map(item => item = item.path_full);
    } else {
      screenShot = '';
    };

    if (data[gameIds[i]].data.genres) {
      genre = data[gameIds[i]].data.genres.map(item => item = item.description);
    } else {
      genre = '';
    };

    let newGame = new Game({
      steam_appid: data[gameIds[i]].data.steam_appid,
      name: data[gameIds[i]].data.name,
      urlName: transliterate(data[gameIds[i]].data.name),
      detailed_description: data[gameIds[i]].data.detailed_description,
      short_description: data[gameIds[i]].data.short_description,
      ageLimit: data[gameIds[i]].data.required_age,
      language: data[gameIds[i]].data.supported_languages,
      cover: data[gameIds[i]].data.header_image,
      screenShot: screenShot,
      videos: data[gameIds[i]].data.movies,
      genre: genre,
      os: data[gameIds[i]].data.platforms,
      year: data[gameIds[i]].data.release_date.date,
      developer: data[gameIds[i]].data.developers,
      publisher: data[gameIds[i]].data.publishers,
      website: data[gameIds[i]].data.website,
    });
    await newGame.save();
    console.log(`Итерация ${i}`);

    // console.log(`Игра ${data[gameIds[i]].data.name} добавлена в БД!`);
  };

  mongoose.connection.close();

};

const mainFunction = async () => {
  await addGames();
};

mainFunction();
