const express = require('express');
const mongoose = require('mongoose');
const ClubGameId = require('../models/club-game-ids.js');
const Game = require('../models/games.js');
const Club = require('../models/clubs.js');
const dbName = 'mongodb://localhost/myvrclub';
mongoose.connect(dbName, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;
const fs = require('fs');
const csvToJson = require('convert-csv-to-json');
let gamesIds = [];
let baloon = async () => {
  const clubs = await Club.find();
  let data = fs.readFileSync('./files/adreses.txt').toString().split('\n');
  for (let i = 0; i<data.length; i++) {
  }
  // const gamesNames = (games.map((el) => el.name));
  // clubs.forEach(async (club, index) => {
  //   let clubgamesTmp = [];
  //   let IDTmp = [];
  //   let j = Math.floor(Math.random() * 20) + 5;
  //   for (let i = 0; i <= j; i++) {
  //     let rndIndex = Math.floor(Math.random() * 30) +1;
  //     clubgamesTmp.push(games[rndIndex].name);
  //     IDTmp.push(games[rndIndex].id)
  //   }
  //   //console.log(clubgamesTmp);
  //   club.games = clubgamesTmp;
  //   club.gamesIds = IDTmp;
  //   await club.save();
  // });
  //db.close();
};
baloon();