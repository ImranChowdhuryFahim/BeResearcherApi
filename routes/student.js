const express = require('express');

const controller = require('../controllers/student');

const router = express.Router();

router.route('/student/registration').post(controller.Register);
router.route('/student/courseprogress').put(controller.UpdateCourseProgress);
router.route('/student/getdetails').get(controller.GetDetails);
router.route('/student/getall').get(controller.getAll);
router.route('/student/login').post(controller.Login);
router.route('/student/get_all_enrolled_students/:courseTitle').get(controller.GetAllEnrolledStudents);

module.exports = router;
