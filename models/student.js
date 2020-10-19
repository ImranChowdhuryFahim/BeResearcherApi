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
  enrolledCourses: [{
    _id: mongoose.Types.ObjectId,
    title: String,
    completedItem: String,
    currentContentDetails: Object,
  }],
});

module.exports = mongoose.model('student', StudentSchema);
