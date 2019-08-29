const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const gameSchema = new mongoose.Schema({
  steam_appid: Number,
  name: String,
  urlName: String,
  description: String,
  short_description: String,
  clubs: [String],
  clubsIds: [ObjectId],
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
