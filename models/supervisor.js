const mongoose = require('mongoose');

const { Schema } = mongoose;

const SupervisorSchema = new Schema({
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
  position: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('supervisor', SupervisorSchema);
