/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const StudentSchema = require('../models/student');
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
      _id: mongoose.Types.ObjectId('5f8ac2936e9334246ba98438'),
      title: 'Research Methodology',
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
                { _id: mongoose.Types.ObjectId('5f8ac2936e9334246ba98438') },
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
    const { id } = req.body;
    const { email } = req.body;
    const { completedItem } = req.body;
    const { currentContentDetails } = req.body;
    StudentSchema.updateOne(
      { email },
      { $set: { 'enrolledCourses.$[outer].completedItem': completedItem, 'enrolledCourses.$[outer].currentContentDetails': currentContentDetails } },
      { arrayFilters: [{ 'outer._id': mongoose.Types.ObjectId(id) }] }, // ekane id dilam
    ).then((result) => {
      res.send(result);
    })
      .catch((err) => {
        res.send(err);
      });
  },
  GetDetails: (req, res, next) => {
    // eslint-disable-next-line no-underscore-dangle
    // eslint-disable-next-line valid-typeof
    if (req.headers.auth !== undefined) {
      jwt.verify(req.headers.auth, 'beresearcherbd874', (err, authData) => {
        const { email } = authData.user;
        StudentSchema.findOne({ email })
          .then((result) => {
            res.send(result);
          })
          .catch((err1) => {
            res.send(err1);
          });
      });
    } else {
      res.send();
    }
  },
  Login: (req, res, next) => {
    const { email } = req.body;
    const { password } = req.body;
    StudentSchema.findOne({ email, password }).select('enrolledCourses firstName lastName email')
      .then((result) => {
        if (result.length !== 0) {
          const user = {
            name: `${result.firstName} ${result.lastName}`,
            email: result.email,
            // eslint-disable-next-line no-underscore-dangle
            id: result._id,
          };

          jwt.sign({ user }, 'beresearcherbd874', (err, token) => {
            res.json({ token });
          });
        } else {
          res.send(result);
        }
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
