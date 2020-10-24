const express = require('express');

const controller = require('../controllers/supervisor');

const router = express.Router();

router.route('/supervisor/registration').post(controller.Register);

module.exports = router;
