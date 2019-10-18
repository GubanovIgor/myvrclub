// var needle = require('needle');
// var cheerio = require('cheerio');
const transliterate = require('transliterate-cyrillic-text-to-latin-url');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const Game = require('../models/games.js');

const dbName = 'mongodb://localhost/myvrclub';
mongoose.connect(dbName, {useNewUrlParser: true, useCreateIndex: true});

const fs = require('fs');

function sleepFor(sleepDuration) {
    let now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */
    }
}

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
    const gamesVrList  = 'files/VrGameListInClubs.txt';
    //const gamesVrList = 'files/SteamErrorGames.txt';
    let gameIds = fs.readFileSync(gamesVrList, 'utf8').split(',');
    let data = null;
    console.log('Игр :', gameIds.length);
    for (let i = 0; i < gameIds.length; i++) {
        let fetch_i = 1;
        while (fetch_i < 500) {
            if (data && data[gameIds[i]]) {
                break;
            } else {
                try {
                    sleepFor(2000);
                    let url = `https://store.steampowered.com/api/appdetails?appids=${gameIds[i]}`;
                    let response = await fetch(url);
                    if (!response.ok) throw new Error(response.statusText);
                    data = await response.json();
                    console.log('SteamID - %s, запрос - %d', gameIds[i], fetch_i++);
                } catch (err) {
                    console.log(err);
                    fs.appendFileSync('files/SteamErrorGameslog.txt', gameIds[i] + ',');
                }
            }
        }

        let screenShot;
        let genre;
        let errLogs = [];
        try {
            if (typeof data[gameIds[i]].data.screenshots !== 'undefined') {
                screenShot = data[gameIds[i]].data.screenshots.map(item => item.path_full);
            }
        } catch (e) {
            console.log('catched error1 - ', e);
            errLogs.push(e);
            screenShot = [];
        }

        try {
            if (typeof data[gameIds[i]].data.genres !== 'undefined') {
                genre = data[gameIds[i]].data.genres.map(item => item.description);
            }
        } catch (e) {
            console.log('catched error2 - ', e);
            errLogs.push(e);
            genre = [];
        }
        try {
            let newGame = new Game({
                steam_appid: data[gameIds[i]].data.steam_appid,
                name: data[gameIds[i]].data.name,
                urlName: transliterate(data[gameIds[i]].data.name),
                description: data[gameIds[i]].data.detailed_description,
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
            let isGame = await Game.findOne({name: newGame.name});
            if (!!isGame) {
                await Game.updateOne({ name: isGame.name }, { ...newGame });
                console.log('Игра %s перезаписана!', isGame.name)
            }
            else {
                await newGame.save();
                console.log(`Игра номер ${i} добавленна`);
            }
        } catch (e) {
            console.log('catched error in NewGame - ', e);
            errLogs.push(e);
        }
    }

    //fs.writeFileSync('files/errlog.txt', errLogs);
    mongoose.connection.close();
};

const mainFunction = async () => {
    await addGames();
};

mainFunction();
