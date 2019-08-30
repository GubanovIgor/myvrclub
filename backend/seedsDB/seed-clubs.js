'use strict';

const express = require('express');
const mongoose = require('mongoose');
const transliterate = require('transliterate-cyrillic-text-to-latin-url');
const Club = require('../models/clubs.js');
const dbName = 'mongodb://localhost/myvrclub';
// mongoose.connect(dbName, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connect('mongodb+srv://mongo:12345@cluster0-xe8h0.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;
const fs = require('fs');
const csvToJson = require('convert-csv-to-json');

let data = fs.readFileSync('./files/clubs.csv').toString();
data = data.replace(/"/g, "");
fs.writeFile("./files/club-temp.csv", data, async function (error) {
  if (error) throw error;
  console.log("запись файла завершена.");
  const json = csvToJson.getJsonFromCsv('./files/club-temp.csv');

  for (let i = 0; i < json.length; i++) {
    let { name, address, Telephone, Site, WorkTime, metro, Sociallinks, games, cover, price, equipment, screenShot } = json[i];
    if (Sociallinks !== undefined) Sociallinks = Sociallinks.split(" ") //здесь невидимый символ! c MAC OS
    else Sociallinks = [];
    if (metro !== undefined) metro = metro.split(',') //здесь запятая с MAC
    else metro = [];
    if (games !== undefined) games = games.split(',')
    else games = [];
    if (equipment !== undefined) equipment = equipment.split(',')
    else equipment = [];
    if (price !== undefined) price = price.split(',').map(Number);
    else price = [];
    if (screenShot !== undefined) screenShot = screenShot.split(',');
    else screenShot = [];
    //console.log(screenShot);

    let clubs = new Club({
      name,
      urlName: transliterate(name), //https://www.npmjs.com/package/cyrillic-to-translit-js
      address,
      tel: [Telephone],
      domain: Site,
      cover,
      screenShot,
      metro,
      workTime: { weekdays: WorkTime, weekend: WorkTime },
      socialLinks: { vk: Sociallinks[0] && Sociallinks[0], instagram: Sociallinks[1] && Sociallinks[1], fb: Sociallinks[2] && Sociallinks[2] },
      games,
      gamesIds: [],
      equipment,
      price,
    });
    console.log(clubs);
    await clubs.save();
  }
  db.close();
});








