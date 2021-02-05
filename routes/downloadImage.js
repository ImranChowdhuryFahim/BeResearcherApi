const express = require('express');

const controller = require('../controllers/downloadImage');

const router = express.Router();

router.route('/downloadimage/:imagename').get(controller.GetImage);

module.exports = router;
