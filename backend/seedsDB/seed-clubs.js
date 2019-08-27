'use strict';

const express = require('express');
const mongoose = require('mongoose');
const transliterate = require('transliterate-cyrillic-text-to-latin-url');
const Club = require('../models/clubs.js');
const dbName = 'mongodb://localhost/myvrclub';
mongoose.connect(dbName, { useNewUrlParser: true, useCreateIndex: true });
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
    let { Name, Address, Telephone, Site, WorkTime, Metro, Sociallinks, games, Pictures } = json[i];
    if (Sociallinks !== undefined) Sociallinks = Sociallinks.split(" ") //здесь невидимый символ! c MAC OS
    else Sociallinks = [];
    if (Metro !== undefined) Metro = Metro.split(',') //здесь запятая с MAC
    else Metro = [];
    if (games !== undefined) games = games.split(',')
    else games = [];

    let clubs = new Club({
      name: Name,
      urlName: transliterate(Name), //https://www.npmjs.com/package/cyrillic-to-translit-js
      address: Address,
      tel: [Telephone],
      cover: '',
      screenShot: [],
      metro: Metro,
      domain: Site,
      workTime: { weekdays: WorkTime, weekend: WorkTime },
      socialLinks: { vk: Sociallinks[0] && Sociallinks[0], instagram: Sociallinks[1] && Sociallinks[1], fb: Sociallinks[2] && Sociallinks[2] },
      games: games,
      pictures: { cover: 'test' }
    });
    console.log(clubs);
    await clubs.save();
  }
  db.close();
});








