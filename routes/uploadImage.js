const express = require('express');

const controller = require('../controllers/uploadImage');

const router = express.Router();

router.route('/uploadimage').post(controller.UploadImage);

module.exports = router;
