const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const { id } = req.query;
    const path = `./public/uploads/${id}`;
    fs.mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage }).single('file');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

app.get('/list', (req, res) => {
  fs.readdir('./public', (err, files) => {
    res.send(files);
  });
});

app.get('/download', (req, res) => {
  res.download('./public/' + 'logo2.png');
});

app.use('/', (req, res) => {
  res.send('hello');
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