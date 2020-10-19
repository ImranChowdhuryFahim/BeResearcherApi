const express = require('express');

const controller = require('../controllers/getAssignments');

const router = express.Router();

router.route('/assignment/:folderid/:assignmentname').get(controller.GetAssingment);
router.route('/assignment/:folderid').get(controller.GetAssingmentDir);

module.exports = router;
