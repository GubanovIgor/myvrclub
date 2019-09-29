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
    const max = 5;
    const min = 3.5;
    for (let game of games) {
        let rndRaiting = ((Math.random() * (max - min) ) + min).toFixed(1);
        await Game.updateOne({ name: game.name }, { $set:{ rating: rndRaiting }});
        console.log('Game: %s, raiting: %s', game.name, game.rating);
    }
    console.log('********************************************************************************************')
    for (let club of clubs) {
        let rndRaiting = ((Math.random() * (max - min) ) + min).toFixed(1);
        await Club.updateOne({ name: club.name }, { $set:{ rating: rndRaiting }});
        console.log('Club: %s, raiting: %s', club.name, club.rating);
    }
    db.close();
};
idGame();