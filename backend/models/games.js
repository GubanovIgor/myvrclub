const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  steam_appid: Number,
  name: String,
  description: String,
  short_description: String,
  clubs: [String], //список клубов [id`s from Clubs]
  cover: String,
  screenShot: [String],
  videos: [Object],
  genre: [], //жанр
  playersNum: String,
  platform: [],
  os: [],
  language: String,
  year: String,
  developer: [String],
  publisher: [String],
  ageLimit: Number,
  rating: Number,
  tags: [],
  website: String,
});

gameSchema.statics.getGames = async function () {
  return this.find();
};

gameSchema.statics.addGame = async function (event) {
  await event.save();
};

module.exports = mongoose.model('Game', gameSchema);
