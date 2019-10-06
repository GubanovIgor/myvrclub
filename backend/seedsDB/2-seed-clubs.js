'use strict';

const express = require('express');
const mongoose = require('mongoose');
const transliterate = require('transliterate-cyrillic-text-to-latin-url');
const Club = require('../models/clubs.js');
const Game = require('../models/games.js');
require('dotenv').config();

const dbName = 'mongodb://localhost/myvrclub';
//const dbName = `mongodb+srv://rom:${process.env.PASSW_DB}@cluster0-woi64.mongodb.net/myvrclub`;
//const dbName = 'mongodb+srv://mongo:12345@cluster0-xe8h0.mongodb.net/myvrclub?retryWrites=true&w=majority';
mongoose.connect(dbName, {useNewUrlParser: true, useCreateIndex: true});
const db = mongoose.connection;

const fs = require('fs');
const csvToJson = require('convert-csv-to-json');
const seedClubs = async () => {
    const gamesDB = await Game.find();
    const json = csvToJson.getJsonFromCsv('./files/clubs.csv');


    let clubGamesNames = [];
    let clubGamesgamesID = [];
    for (let i = 0; i < gamesDB.length; i++) {
        clubGamesNames[i] = (gamesDB[i].name);
        clubGamesgamesID[i] = (gamesDB[i].id);
    }

    for (let i = 0; i < json.length; i++) {
        let {
            name,
            address,
            tel,
            domain,
            workTime,
            metro,
            socialLinks,
            games,
            cover,
            screenShot,
            logo,
            videos,
            price,
            equipment,
            baloon
        } = json[i];

        console.log('%s >>>>>>> ', name);
        if (socialLinks !== undefined) socialLinks = socialLinks.split(" "); //здесь невидимый символ! c MAC OS
        else socialLinks = [];
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
        if (workTime !== undefined) workTime = workTime.split(',');
        else workTime = [];

        let clubs = new Club({
            name,
            urlName: transliterate(name), //https://www.npmjs.com/package/cyrillic-to-translit-js
            address,
            tel,
            domain,
            cover,
            screenShot,
            videos,
            logo,
            metro,
            workTime,
            socialLinks: {
                vk: socialLinks[0] && socialLinks[0],
                instagram: socialLinks[1] && socialLinks[1],
                fb: socialLinks[2] && socialLinks[2]
            },
            games: clubGamesNames,
            gamesIds: clubGamesgamesID,
            equipment,
            price,
            baloon,
        });

        await clubs.save();
    console.log('club: %s saved', clubs.name)
    }
    db.close();
};

seedClubs();
