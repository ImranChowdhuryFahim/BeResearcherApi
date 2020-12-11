const mongoose = require('mongoose');

const { Schema } = mongoose;

const StudentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  enrolledCourses: [
    {
      _id: mongoose.Types.ObjectId,
      title: String,
      completedItem: String,
      currentContentDetails: Object,
    },
  ],
  recievedAnnouncementIds: [
    {
      _id: mongoose.Types.ObjectId,
      title: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model('student', StudentSchema);
