const mongoose = require('mongoose');

const { Schema } = mongoose;

const CourseSchema = new Schema({
  courseTitle: {
    type: String,
    required: true,
  },
  courseContent: {
    type: Object,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  enrolledStudents: [{
    _id: mongoose.Types.ObjectId,
    name: String,
    institute: String,
    email: String,
  }],
  totalItem: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('course', CourseSchema);
