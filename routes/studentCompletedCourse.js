/* eslint-disable no-tabs */
const express = require('express');

const controller = require('../controllers/studentCompletedCourse');
const router = express.Router();

router
	.route('/get-students-completed-course')
	.get(controller.getStudentCompletedCourse);
router
	.route('/create-student-completed-course-list')
	.post(controller.createStudentCompletedCourseList);
router
	.route('/push-student-completed-course')
	.put(controller.pushStudentCompletedCourse);

module.exports = router;
