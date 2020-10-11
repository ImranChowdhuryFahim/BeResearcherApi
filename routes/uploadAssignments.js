const express = require('express');

const controller = require('../controllers/uploadAssignments');

const router = express.Router();

router.route('/upload').post(controller.Upload);

module.exports = router;
