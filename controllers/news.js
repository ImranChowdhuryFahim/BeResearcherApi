/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
const NewsSchema = require('../models/news');

module.exports = {
  createNews: (req, res, next) => {
    const { title } = req.body;
    const { catagory } = req.body;
    const { body } = req.body;
    const { createdAt } = req.body;
    const { authorName } = req.body;

    const News = new NewsSchema({
      title,
      catagory,
      body,
      createdAt,
      authorName,
    });

    News.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  getAllNews: (req, res, next) => {
    NewsSchema.find({}).then((result) => {
      res.send(result);
    })
      .catch((err) => {
        res.send(err);
      });
  },

};
