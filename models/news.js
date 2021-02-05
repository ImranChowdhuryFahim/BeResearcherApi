const mongoose = require('mongoose');

const { Schema } = mongoose;

const NewsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  catagory: {
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

module.exports = mongoose.model('news', NewsSchema);
