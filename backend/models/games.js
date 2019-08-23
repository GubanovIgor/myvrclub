const mongoose = require('mongoose');


const gameSchema = new mongoose.Schema({
  name: String,
  description: String,
  clubs: [String], //список клубов [id`s from Clubs]
  pictures: [String],
  videos: [String],
  genre: [], //жанр
  playersNum: String,
  platform: [],
  language: {dubbing: String, interfc: String},
  year: Number,
  developer: String,
  ageLimit: Number,
  rating: Number,
  tags: [],
});

gameSchema.statics.getGames = async function () {
  return this.find();
};

gameSchema.statics.addGame = async function (event) {
  await event.save();
};

module.exports = mongoose.model('Club', gameSchema);