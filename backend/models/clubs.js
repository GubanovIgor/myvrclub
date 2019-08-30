const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const clubSchema = new mongoose.Schema({
  name: String,
  urlName: String,
  address: String,
  tel: [],
  description: String,
  workTime: { weekdays: String, weekend: String },
  games: [String], //список игр [id`s from Games]
  gamesIds: [ObjectId],
  cover: String,
  screenShot: [String],
  videos: [String],
  rating: Number,
  metro: [],
  extra: [], //фичи [парковка, детская зона, алко...]
  socialLinks: { instagram: String, vk: String, fb: String },
  domain: String,
  equipment: [String],
  price: [Number],
  rent: Boolean,
  discounts: [String],
  baloon: [String]
});

clubSchema.statics.getClubs = async function () {
  return this.find();
};

clubSchema.statics.addClub = async function (event) {
  await event.save();
};

module.exports = mongoose.model('Club', clubSchema);