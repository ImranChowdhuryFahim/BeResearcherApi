const baseDir = './public/images/';
module.exports = {
  GetImage: (req, res) => {
    const { imagename } = req.params;
    res.download(`${baseDir}${imagename}`);
  },
};
