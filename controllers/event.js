/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
const EventSchema = require('../models/event');

module.exports = {
  createEvent: (req, res, next) => {
    const { name } = req.body;
    const { startDate } = req.body;
    const { startTime } = req.body;
    const { endTime } = req.body;
    const { body } = req.body;
    const { createdAt } = req.body;
    const { authorName } = req.body;

    const event = new EventSchema({
      name,
      startDate,
      startTime,
      endTime,
      body,
      createdAt,
      authorName,
    });

    event.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  getAllEvents: (req, res, next) => {
    EventSchema.find({}).then((result) => {
      res.send(result);
    })
      .catch((err) => {
        res.send(err);
      });
  },

};
