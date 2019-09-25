const express = require('express');
const mongoose = require('mongoose');
const ClubGameId = require('../models/club-game-ids.js');
const Game = require('../models/games.js');
const Club = require('../models/clubs.js');

const dbName = 'mongodb://localhost/myvrclub';
mongoose.connect(dbName, {useNewUrlParser: true, useCreateIndex: true});
const db = mongoose.connection;

let idGame = async () => {
    const clubs = await Club.find();
    const games = await Game.find();
    for (let game of games) {
        if (game.clubs.length > 0) continue;
        let gameclubsTmp = [];
        let IDTmp = [];
        for (let i = 0; i < clubs.length; i++) {
            gameclubsTmp.push(clubs[i].name);
            IDTmp.push(clubs[i].id)
        }
        game.clubs = gameclubsTmp;
        game.clubsIds = IDTmp;

        await game.save();
    }
    db.close();
};
idGame();