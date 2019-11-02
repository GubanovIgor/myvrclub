const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const gameSchema = new mongoose.Schema({
  steam_appid: Number,
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
    text: true
  },
  urlName: String,
  description: String,
  short_description: String,
  clubs: {
    type: [String],
    default: [],
  },
  clubsIds: {
    type: [ObjectId],
    default: [],
  },
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
  duration: String,
});
gameSchema.index({name: 'text'});

gameSchema.statics.getGames = async function () {
  return this.find();
};

gameSchema.statics.addGame = async function (event) {
  await event.save();
};

module.exports = mongoose.model('Game', gameSchema);
