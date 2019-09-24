const express = require('express');
const mongoose = require('mongoose');
const ClubGameId = require('../models/club-game-ids.js');
const Game = require('../models/games.js');
const Club = require('../models/clubs.js');

const dbName = 'mongodb://localhost/myvrclub';
mongoose.connect(dbName, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

let clubsIds = [];
let idGame = async () => {
  const clubs = await Club.find();
  const games = await Game.find();
  const clubsNames = (clubs.map((el) => el.name));
  games.forEach(async (game, index) => {
    let gameclubsTmp = [];
    let IDTmp = [];
    let j = Math.floor(Math.random() * 10) + 5;
    for (let i = 0; i <= j; i++) {
      let rndIndex = Math.floor(Math.random() * 20) +1;
       gameclubsTmp.push(clubs[rndIndex].name);
       IDTmp.push(clubs[rndIndex].id)
    }
    //console.log(clubgamesTmp);
    game.clubs = gameclubsTmp;
    game.clubsIds = IDTmp;
    //console.log(game);
    await game.save();
  });
  //db.close();
};
idGame();