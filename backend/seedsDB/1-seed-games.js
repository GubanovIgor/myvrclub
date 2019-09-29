'use strict';

const express = require('express');
const mongoose = require('mongoose');
const transliterate = require('transliterate-cyrillic-text-to-latin-url');

const Game = require('../models/games.js');
const Club = require('../models/clubs.js');

const dbName = 'mongodb://localhost/myvrclub';
mongoose.connect(dbName, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

const fs = require('fs');
const csvToJson = require('convert-csv-to-json');

// let data = fs.readFileSync('./files/games.csv').toString();
// data = data.replace(/"/g, "");

const json = csvToJson.getJsonFromCsv('./files/games.csv');
const seedGames = async () => {
  //const clubsDB = await Club.find();
  // let gameClubsNames = [];
  // let gameClubIDs = [];
  // for (let i = 0; i < clubsDB.length; i++) {
  //     gameClubsNames[i] = (clubsDB[i].name);
  //     gameClubIDs[i] = (clubsDB[i].id);
  // }

  for (let i = 0; i < json.length; i++) {
    let {
      name,
      description,
      short_description,
      clubs,
      clubsIds = [],
      cover,
      screenShot,
      videos,
      genre,
      playersNum,
      platform,
      language,
      year,
      developer,
      ageLimit,
      rating,
      tags,
      duration
    } = json[i];

    if (clubs === '' || clubs === undefined) {
      // clubs = gameClubsNames;
      // clubsIds = gameClubIDs;
      clubs = [];
      clubsIds = [];
    }
    else clubs = clubs.split(",");

    if (screenShot !== undefined) screenShot = screenShot.split(",");
    if (videos !== undefined) videos = videos.split(",");
    if (genre !== undefined) genre = genre.split(",");
    if (platform !== undefined) platform = platform.split(",");
    if (tags !== undefined) tags = tags.split(",");

    let games = new Game({
      name,
      urlName: transliterate(name),
      description,
      short_description,
      clubs,
      clubsIds,
      screenShot,
      cover,
      videos,
      genre,
      playersNum,
      platform,
      language,
      year,
      developer,
      ageLimit,
      rating,
      tags,
      duration
    });
      let isGame = await Game.findOne({name: name});
      if (!!isGame) {
          await Game.updateOne({ name: isGame.name }, { ...games });
          console.log('Игра %s перезаписана!', isGame.name)
      }
      else {
          await games.save();
          console.log('Игра %s добавленна', games.name);
      }
  }
  console.log('games was saved');
  db.close();
}
seedGames();








