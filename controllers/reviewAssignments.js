/* eslint-disable no-console */
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  //   service: 'gmail',
  auth: {
    user: 'beresearcherbd@gmail.com', // generated ethereal user
    pass: 'CuetCse!&', // generated ethereal password
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
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
