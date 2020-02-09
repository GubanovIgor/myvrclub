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

const addCountOfHeadsets = async () => {
    const headsets = {
      'htc_vive_pro': 4,
      'ps_vr': 3,
      'oculus_rift': 7,
    }
    await Club.updateMany({}, { $set: { headsets } })

    db.close();
};

addCountOfHeadsets();
