const express = require('express');

const controller = require('../controllers/event');

const router = express.Router();

router.route('/event/get-all-events').get(controller.getAllEvents);
router.route('/event/create-event').post(controller.createEvent);

module.exports = router;
