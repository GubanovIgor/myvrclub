const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    date: {
      type: String,
      trim: true,
      required: true,
    },
    time: {
      type: [String], default: [],
    },
    name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    sum: {
      type: Number,
    },
    clubId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    headsets: {

    }
  },
  { strict: false }
);

module.exports = mongoose.model("Order", orderSchema);
