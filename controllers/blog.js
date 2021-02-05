/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
const BlogSchema = require('../models/blog');

module.exports = {
  createBlogPost: (req, res, next) => {
    const { title } = req.body;
    const { catagory } = req.body;
    const { body } = req.body;
    const { createdAt } = req.body;
    const { authorName } = req.body;

    const blog = new BlogSchema({
      title,
      catagory,
      body,
      createdAt,
      authorName,
    });

    blog.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  getAllBlogPosts: (req, res, next) => {
    BlogSchema.find({}).then((result) => {
      res.send(result);
    })
      .catch((err) => {
        res.send(err);
      });
  },

};
