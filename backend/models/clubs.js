const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxLength: 32,
    required: true,
    unique: true,
  },
  urlName: String,
  address: String,
  tel: { type: [String], default: [] },
  description: {
    type: String,
    trim: true,
    maxLength: 2000
  },
  short_description: {
    type: String,
    trim: true,
    maxLength: 1000
  },
  workTime: { type: [String], default: [] },
  games: {
    type: [String],
    default: [],
  }, //список игр [id`s from Games]
  gamesIds: { type: [ObjectId], default: [] },
  cover: String,
  screenShot: { type: [String], default: [] },
  logo: String,
  videos: { type: [String], default: [] },
  rating: Number,
  scores: {type: [{id: ObjectId, score: Number}], default: []},
  metro: { type: [String], default: [] },
  extra: { type: String, default: '' }, //подправить в базе на String
  socialLinks: {type: { instagram: String, vk: String, fb: String }, default:{ instagram: '', vk: '', fb: '' }},
  domain: String,
  equipment: { type: [String], default: [] },
  price: { type: [Number], default: [] },
  rent: Boolean,
  discounts: { type: [String], default: [] },
  baloon: { type: [String], default: [] },
  clickCounter: { type: Number, default: 0 },
  comments: {
    type: [{ id: ObjectId, comment: String, date: String, like: Number, dislike: Number }],
    default: []
  }
});

clubSchema.statics.getClubs = async function () {
  return this.find();
};

clubSchema.statics.addClub = async function (event) {
  await event.save();
};

module.exports = mongoose.model('Club', clubSchema);