/* eslint-disable no-unused-vars */
const multer = require('multer');
const fs = require('fs');

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
module.exports = {
  Upload: (req, res, next) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send(req.file);
    });
  },
};
