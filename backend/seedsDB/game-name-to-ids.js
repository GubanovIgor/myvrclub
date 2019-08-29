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
let idGame = async () => {
  const clubs = await Club.find();
  const games = await Game.find();


  //***************************************************//
  const gamesNames = (games.map((el) => el.name));
  clubs.forEach(async (club, index) => {
    let clubgamesTmp = [];
    let IDTmp = [];
    let j = Math.floor(Math.random() * 20) + 5;
    for (let i = 0; i <= j; i++) {
      let rndIndex = Math.floor(Math.random() * 30) +1
      clubgamesTmp.push(games[rndIndex].name)
      IDTmp.push(games[rndIndex].id)
    }
    //console.log(clubgamesTmp);
    club.games = clubgamesTmp;
    club.gamesIds = IDTmp;
    club.save();
  });

  clubs.forEach(async (club, index) => {
    club.games.forEach(async (gameInClub, index) => {
      let game = await Game.find({ name: gameInClub });
      if (game[0] !== undefined) {
        //console.log('club contain game ', club.name, game[0].name);
        // let clubgameids = new ClubGameId({
        //   clubId: club.id,
        //   clubName: club.name,
        //   gameId: game[0].id,
        //   gameName: game[0].name,
        // });

        gamesIds.push(game[0].id);
        //await clubgameids.save();
        //await Club.updateOne({ _id: club.id }, { $set: { gamesIds: gamesIds } });
      }
    })
  });
  console.log(gamesIds);//??????
};
idGame();