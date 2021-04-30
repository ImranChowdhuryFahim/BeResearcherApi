const mongoose = require('mongoose');

const { Schema } = mongoose;

const Student = new Schema({
  id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
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
  institution: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const StudentCompletedCourse = new Schema({
  courseId: mongoose.Types.ObjectId,
  students: {
    type: [Student],
    required: true,
  },
});

module.exports = mongoose.model(
  'studentCompleteCourse',
  StudentCompletedCourse
);
