const nodemailer = require('nodemailer');
const logger = require('./logger');
const { EMAIL_ADDRESS, EMAIL_PASSWORD } = require('../config');

async function sendEmail(to,cc, subject, body) {
  try {
    const transporter = nodemailer.createTransport({
      host: "mail.tmmp-international.com",
      port: 465,
      auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: EMAIL_ADDRESS,
      cc:cc,
      to,
      subject,
      html: body,
    };

    logger.info('Sending email to: ', to);

    transporter.sendMail(mailOptions);
  } catch (error) {
    logger.info('Error sending email: ', error);
    throw error;
  }
}

module.exports = sendEmail;
