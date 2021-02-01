/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const CourseSchema = require('../models/course');

module.exports = {
  CreateCourse: (req, res, next) => {
    const { courseTitle } = req.body;
    const { courseContent } = req.body;
    const { createdBy } = req.body;
    const { totalItem } = req.body;
    const Course = new CourseSchema({
      courseTitle,
      courseContent,
      createdBy,
      totalItem,
    });
    Course.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  GetCourseData: (req, res, next) => {
    const { courseTitle } = req.params;
    CourseSchema.findOne({ courseTitle })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  EnrollStudent: (req, res, next) => {
    const { courseTitle } = req.body;
    const st = {
      _id: mongoose.Types.ObjectId('1237'),
      name: 'IMran',
      institute: 'Cuet',
      email: 'imran.cuet.cse17@gmail.com',
    };
    CourseSchema.updateOne({ courseTitle }, { $push: { enrolledStudents: st } })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  UpdateCourseContent: (req, res, next) => {
    const { courseTitle } = req.body;
    const { courseContent } = req.body;
    const { totalItem } = req.body;
    CourseSchema.updateOne(
      { courseTitle },
      { $set: { courseContent, totalItem } },
    )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
