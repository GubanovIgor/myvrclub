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
let data = fs.readFileSync('./files/clubs.csv').toString();
data = data.replace(/"/g, ""); //удаляем кавычки
fs.writeFile("./files/club-temp.csv", data, async function (error) {
    const gamesDB = await Game.find();
    console.log('gamesDB');
    if (error) throw error;
    console.log("запись файла завершена.");
    const json = csvToJson.getJsonFromCsv('./files/club-temp.csv');

    for (let i = 0; i < json.length; i++) {
        let {
            name,
            address,
            tel,
            Site,
            workTime,
            metro,
            Sociallinks,
            games,
            cover,
            screenShot,
            logo,
            price,
            equipment,
        } = json[i];

        let clubGamesNames = [];
        let clubGamesgamesID = [];
        // let j = Math.floor(Math.random() * 20) + 5;
        // for (let i = 0; i <= j; i++) {
        //     let rndIndex = Math.floor(Math.random() * 30) + 1;
        //     clubGamesNames.push(gamesDB[rndIndex].name);
        //     clubGamesgamesID.push(gamesDB[rndIndex].id)
        // }

        if (Sociallinks !== undefined) Sociallinks = Sociallinks.split(" ") //здесь невидимый символ! c MAC OS
        else Sociallinks = [];
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
        //console.log(screenShot);

        let clubs = new Club({
            name,
            urlName: transliterate(name), //https://www.npmjs.com/package/cyrillic-to-translit-js
            address,
            tel,
            domain: Site,
            cover,
            screenShot,
            logo,
            metro,
            workTime,
            socialLinks: {
                vk: Sociallinks[0] && Sociallinks[0],
                instagram: Sociallinks[1] && Sociallinks[1],
                fb: Sociallinks[2] && Sociallinks[2]
            },
            games: clubGamesNames,
            gamesIds: clubGamesgamesID,
            equipment,
            price,
        });
        console.log(clubs);
        await clubs.save();
    }
    db.close();
});








