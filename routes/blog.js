const express = require('express');

const controller = require('../controllers/blog');

const router = express.Router();

router.route('/blog/get-all-blog-posts').get(controller.getAllBlogPosts);
router.route('/blog/create-blog-post').post(controller.createBlogPost);

module.exports = router;
