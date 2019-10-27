const express = require('express');
const mongoose = require('mongoose');
const ClubGameId = require('../models/club-game-ids.js');
const Game = require('../models/games.js');
const Club = require('../models/clubs.js');
fs = require('fs');

const dbName = `mongodb+srv://rom:oaAm2a22@cluster0-woi64.mongodb.net/myvrclub`;
mongoose.connect(dbName, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

let idGame = async () => {
  const clubs = await Club.find();
  clubs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  console.log('********************************************************************************************')
 let index = 1;
  for (let club of clubs) {

    fs.appendFile("clubs.txt", ` ${index++}. ${club.name}, ${club.tel}, ${club.domain} \n`, function(err) {

      if(err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });
  }
  db.close();
};
idGame();