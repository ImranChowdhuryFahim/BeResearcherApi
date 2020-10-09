const CourseSchema = require('../models/course');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  CreateCourse: (req, res, next) => {
    const { courseTitle } = req.body;
    const { courseContent } = req.body;
    const { createdBy } = req.body;
    const Course = new CourseSchema({
      courseTitle, courseContent, createdBy,
    });
    Course.save()
      .then((result) => {
        res.send(result);
      }).catch((err) => {
        res.send(err);
      });
  },
  GetCourseData: (req, res, next) => {
    const { courseTitle } = req.params;
    CourseSchema.find({ courseTitle })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
