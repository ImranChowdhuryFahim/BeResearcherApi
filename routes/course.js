const express = require('express');

const controller = require('../controllers/course');

const router = express.Router();

router.route('/create').post(controller.CreateCourse);
router.route('/getcoursedata/:courseTitle').get(controller.GetCourseData);
router.route('/getcoursedata/:courseTitle').post(controller.EnrollStudent);
router.route('/gettotalitem/:courseTitle').get(controller.GetTotalItem);
router.route('/updatecontent').put(controller.UpdateCourseContent);

module.exports = router;
