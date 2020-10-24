/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const SupervisorSchema = require('../models/supervisor');

module.exports = {
  Register: (req, res, next) => {
    const { firstName } = req.body;
    const { lastName } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { institution } = req.body;
    const { position } = req.body;

    const Supervisor = new SupervisorSchema({
      firstName, lastName, email, password, institution, position,
    });

    SupervisorSchema.find({ email })
      .then((users) => {
        const existinguser = users[0];
        if (!existinguser) {
          Supervisor.save()
            .then((result) => {
              res.send('registerd');
            });
        } else {
          res.send('registered');
        }
      })
      .catch((usererr) => {
        res.send(usererr);
      });
  },
};
