/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const StudentSchema = require('../models/studen');
const CourseSchema = require('../models/course');

module.exports = {
  Register: (req, res, next) => {
    const { firstName } = req.body;
    const { lastName } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { institution } = req.body;
    const { occupation } = req.body;
    const enrolledCourses = [{
      _id: mongoose.Types.ObjectId('5f82fcb88c7efc487acf1143'),
      title: 'Research Methodology',
      completed: '0%',
      totalItem: '20',
      completedItem: '0',
      currentContentDetails: {
        id: 1,
        unit: 1,
        title:
              'Webinar Speech: আমি কি পারব গবেষক হতে? - Can I become a researcher? - Mymensingh Eng. College',
        src: 'https://youtu.be/Ra6vA6-GbiI',
        type: 'lecture',
      },
    }];

    const Student = new StudentSchema({
      firstName, lastName, email, password, institution, occupation, enrolledCourses,
    });

    StudentSchema.find({ email })
      .then((users) => {
        const existinguser = users[0];
        if (!existinguser) {
          Student.save()
            .then((result) => {
              const st = {
                // eslint-disable-next-line no-underscore-dangle
                _id: result._id,
                name: `${result.firstName} ${result.lastName}`,
                institute: result.institution,
                email: result.email,
              };
              CourseSchema.updateOne(
                { _id: mongoose.Types.ObjectId('5f82fcb88c7efc487acf1143') },
                { $push: { enrolledStudents: st } },
              ).then((result1) => {
                res.send('registered');
              });
            });
        } else {
          res.send('already Exists');
        }
      })
      .catch((usererr) => {
        res.send(usererr);
      });
  },
  UpdateCourseProgress: (req, res, next) => {
    const { email } = req.body;
    const { completed } = req.body;
    const { completedItem } = req.body;
    const { currentContentDetails } = req.body;
    StudentSchema.updateOne(
      { email },
      { $set: { 'enrolledCourses.$[outer].completed': completed, 'enrolledCourses.$[outer].completedItem': completedItem, 'enrolledCourses.$[outer].currentContentDetails': currentContentDetails } },
      { arrayFilters: [{ 'outer._id': mongoose.Types.ObjectId('5f82fcb88c7efc487acf1143') }] },
    ).then((result) => {
      res.send(result);
    })
      .catch((err) => {
        res.send(err);
      });
  },
  GetDetails: (req, res, next) => {
    const { email } = req.params;
    StudentSchema.findOne({ email })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
