const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const clubGameIdSchema = new mongoose.Schema({
  clubId: ObjectId,
  clubName: String,
  gameId: ObjectId,
  gameName: String
});

module.exports = mongoose.model('ClubGameId', clubGameIdSchema);