const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const clubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    urlName: String,
    address: String,
    tel: {type:[String], default: []},
    description: String,
    workTime: {type:[String], default: []},
    games: {
        type: [String],
        default: [],
    }, //список игр [id`s from Games]
    gamesIds: {type:[ObjectId], default: []},
    cover: String,
    screenShot: {type:[String], default: []},
    logo: String,
    videos: {type:[String], default: []},
    rating: Number,
    metro: {type:[String], default: []},
    extra: {type:[String], default: []},
    socialLinks: {instagram: String, vk: String, fb: String},
    domain: String,
    equipment: {type:[String], default: []},
    price: {type:[Number], default: []},
    rent: Boolean,
    discounts: {type:[String], default: []},
    baloon: {type:[String], default: []},
    clickCounter: {type: Number, default: 0},
});

clubSchema.statics.getClubs = async function () {
    return this.find();
};

clubSchema.statics.addClub = async function (event) {
    await event.save();
};

module.exports = mongoose.model('Club', clubSchema);