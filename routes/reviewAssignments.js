const express = require('express');

const controller = require('../controllers/reviewAssignments');

const router = express.Router();

router.route('/sendreview').post(controller.SendReview);

module.exports = router;
