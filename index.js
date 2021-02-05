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
const reviewAssignmentsRouter = require('./routes/reviewAssignments');
const supervisorRouter = require('./routes/supervisor');
const announcementRouter = require('./routes/announcement');
const uploadImageRouter = require('./routes/uploadImage');
const dowloadImageRouter = require('./routes/downloadImage');
const blogRouter = require('./routes/blog');
const newsRouter = require('./routes/news');
const eventRouter = require('./routes/event');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));

app.use('/api/course', courseRouter);
app.use('/api', getAssignmentsRouter);
app.use('/api', uploadAssignmentsRouter);
app.use('/api', studentRouter);
app.use('/api', reviewAssignmentsRouter);
app.use('/api', supervisorRouter);
app.use('/api', announcementRouter);
app.use('/api', uploadImageRouter);
app.use('/api', dowloadImageRouter);
app.use('/api', blogRouter);
app.use('/api', newsRouter);
app.use('/api', eventRouter);

app.use('/', (req, res) => {
  res.send('BeResearcher Api is Running');
});

mongoose
  .connect(
    'mongodb+srv://dbadmin:cuetcse17@beresearcherbd.sfhvs.mongodb.net/BeResearcher?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => {})
  .catch((err) => {
    throw err;
  });

app.get('/', (req, res, next) => {
  res.send('chole');
});

app.listen(process.env.PORT || 8001, () => {
  // eslint-disable-next-line no-console
  console.log('runnig');
});
