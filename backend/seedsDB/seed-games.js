'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Game = require('../models/games.js');

const dbName = 'mongodb://localhost/myvrclub';
mongoose.connect(dbName, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

const fs = require('fs');
const csvToJson = require('convert-csv-to-json');

let data = fs.readFileSync('./files/games.csv').toString();
data = data.replace(/"/g, "");
fs.writeFile("./files/games-temp.csv", data, async function (error) {
  if (error) throw error;
  console.log("запись файла завершена.");
  const json = csvToJson.getJsonFromCsv('./files/games-temp.csv');

  for (let i = 0; i < json.length; i++) {

    let { name,
      description,
      short_description,
      clubs,
      pictures,
      videos,
      genre,
      playersNum,
      platform,
      language,
      year,
      developer,
      ageLimit,
      rating,
      tags } = json[i];

    if (clubs !== undefined) clubs = clubs.split(",");
    if (pictures !== undefined) pictures = pictures.split(",");
    if (videos !== undefined) videos = videos.split(",");
    if (genre !== undefined) genre = genre.split(",");
    if (platform !== undefined) platform = platform.split(",");
    if (tags !== undefined) tags = tags.split(",");

    let games = new Game({
      name,
      description,
      short_description,
      clubs,
      screenShot: pictures,
      cover: '',
      videos,
      genre,
      playersNum,
      platform,
      language,
      year,
      developer,
      ageLimit,
      rating,
      tags
    });
    console.log(games);
    await games.save();
  }

  db.close();
});








