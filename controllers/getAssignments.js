const fs = require('fs');

const baseDir = './public/';
module.exports = {
  GetAssingment: (req, res) => {
    res.download(`${baseDir}logo2.png`);
  },
  GetAssingmentDir: (req, res) => {
    fs.readdir('./public', (err, files) => {
      res.send(files);
    });
  },
};
