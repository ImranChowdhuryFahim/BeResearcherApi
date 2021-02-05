const express = require('express');

const controller = require('../controllers/news');

const router = express.Router();

router.route('/news/get-all-news').get(controller.getAllNews);
router.route('/news/create-news').post(controller.createNews);

module.exports = router;
