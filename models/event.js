const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  authorName: {
    type: String,
    required: true,

  },

});

module.exports = mongoose.model('event', EventSchema);
