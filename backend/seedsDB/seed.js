'use strict';

const express = require('express');
const mongoose = require('mongoose');
//const Game = require('../models/games.js');
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
    const { Name, Address, Telephone, Site, WorkTime, Metro, Sociallinks } = json[i];
    let arraySLinks = Sociallinks.split(" "); //здесь невидимый символ! c MAC OS
    let arrayMetro = Metro.split(','); //здесь запятая с MAC

    let clubs = new Club({
      name: Name,
      address: Address,
      tel: [Telephone],
      metro: [arrayMetro[0], arrayMetro[1], arrayMetro[2]],
      domain: Site,
      workTime: { weekdays: WorkTime, weekend: WorkTime },
      socialLinks: { vk: arraySLinks[0], instagram: arraySLinks[1], fb: arraySLinks[2] },
    });
    console.log(clubs);
    await clubs.save();
  }
  db.close();
});








