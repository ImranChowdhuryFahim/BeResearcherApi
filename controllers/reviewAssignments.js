/* eslint-disable no-console */
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  protocol: 'tls',
  service: 'gmail',
  auth: {
    user: 'beresearcherbd@gmail.com', // generated ethereal user
    pass: 'cuetcse17', // generated ethereal password
  },
});

module.exports = {
  // eslint-disable-next-line no-unused-vars
  SendReview: (req, res, next) => {
    const { body } = req.body;
    const { subject } = req.body;
    const { emailAddress } = req.body;

    // eslint-disable-next-line camelcase
    const mailoptions_confirmation = {
      from: '"Be ResearcherBd" <beresearcherbd@gmail.com>', // sender address
      to: emailAddress, // list of receivers
      subject, // Subject line
      html: body,
    };

    // eslint-disable-next-line no-unused-vars
    transporter.sendMail(mailoptions_confirmation, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send('sent');
      }
    });
  },
};
