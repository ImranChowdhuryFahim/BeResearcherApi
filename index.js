/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const courseRouter = require('./routes/course');
const getAssignmentsRouter = require('./routes/getAssignments');
const uploadAssignmentsRouter = require('./routes/uploadAssignments');
const studentRouter = require('./routes/student');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));

app.use('/api/course', courseRouter);
app.use('/api', getAssignmentsRouter);
app.use('/api', uploadAssignmentsRouter);
app.use('/api', studentRouter);

app.use('/', (req, res) => {
  res.send('BeResearcher Api is Running');
});

mongoose
  .connect(process.env.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      app.listen(8000, () => {
        // eslint-disable-next-line no-console
        console.log('runnig');
      });
    },
  ).catch((err) => {
    throw err;
  });
