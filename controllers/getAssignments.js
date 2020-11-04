const fs = require('fs');

const baseDir = './public/uploads/';
module.exports = {
  GetAssingment: (req, res) => {
    const { folderid } = req.params;
    const { assignmentname } = req.params;
    res.download(`${baseDir}${folderid}${'/'}${assignmentname}`);
  },
  GetAssingmentDir: (req, res) => {
    const { folderid } = req.params;
    fs.readdir(`./public/uploads/${folderid}/`, (err, files) => {
      if (files === undefined) {
        const a = [];
        res.send(a);
      } else {
        res.send(files);
      }
    });
  },
};
