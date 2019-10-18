const express = require('express');
const mongoose = require('mongoose');
const ClubGameId = require('../models/club-game-ids.js');
const Game = require('../models/games.js');
const Club = require('../models/clubs.js');

const dbName = 'mongodb://localhost/myvrclub';
mongoose.connect(dbName, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

let idGame = async () => {
  const clubs = await Club.find();
  const games = await Game.find();

  for (let game of games) {
  let gameClubsNames = [];
  let gameClubIDs = [];
    if (game.clubs.length > 0) {
      console.log('___________game with custom club ----------->')
      for (let j = 0; j < game.clubs.length; j++) {
        let thisclub = await Club.findOne({ name: game.clubs[j] });
        gameClubIDs[j] = thisclub.id;
        gameClubsNames[j] = thisclub.name;
      }
    } else {
      for (let i = 0; i < clubs.length; i++) {
        gameClubsNames[i] = (clubs[i].name);
        gameClubIDs[i] = (clubs[i].id);
      }
    }
    game.clubs = gameClubsNames;
    game.clubsIds = gameClubIDs;
    await game.save();
    console.log(game.name);
  }
  console.log('clubs and clubsids saved to games')
  db.close();
};
idGame();