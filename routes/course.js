const express = require('express');

const controller = require('../controllers/course');

const router = express.Router();

router.route('/create').post(controller.CreateCourse);
router.route('/getcoursedata/:courseTitle').get(controller.GetCourseData);

module.exports = router;
