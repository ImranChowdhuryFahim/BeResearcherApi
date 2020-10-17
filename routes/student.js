const express = require('express');

const controller = require('../controllers/student');

const router = express.Router();

router.route('/student/registration').post(controller.Register);
router.route('/student/courseprogress').put(controller.UpdateCourseProgress);
router.route('/student/getdetails/:email').get(controller.GetDetails);
router.route('/student/login').post(controller.Login);

module.exports = router;
