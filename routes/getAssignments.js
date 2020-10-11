const express = require('express');

const controller = require('../controllers/getAssignments');

const router = express.Router();

router.route('/assignment').get(controller.GetAssingment);
router.route('/assignment/dir').get(controller.GetAssingmentDir);

module.exports = router;
