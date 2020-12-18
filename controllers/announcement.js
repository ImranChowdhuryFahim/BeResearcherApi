const mongoose = require('mongoose');
const AnnouncementSchema = require('../models/announcement');
const StudentModel = require('../models/student');

module.exports = {
  postAnnouncement: async (req, resp, next) => {
    const { title, message, author, target } = req.body;
    console.log(req.body);
    const announcement = new AnnouncementSchema({
      title,
      message,
      author,
      target,
    });
    announcement
      .save()
      .then((result) => {
        StudentModel.updateMany(
          {
            _id: {
              $in: target,
            },
          },
          { $push: { recievedAnnouncementIds: result } },

          (err, doc) => {}
        );

        resp.send({ message: 'Assingment successfully sent' });
      })
      .catch((err) => {
        resp.send(err);
      });
  },

  getAnnouncement: async (req, resp, next) => {
    // resp.send('nana ami na');

    // AnnouncementSchema.findOne({ _id: req.params.id })
    //   .then((assignment) => {
    //     resp.send(assignment);
    //   })
    //   .catch((err) => {
    //     resp.send(err);
    //   });

    const announcement = await AnnouncementSchema.findById(
      req.params.id
    ).exec();

    console.log(announcement);
    resp.send(announcement);
  },
};
