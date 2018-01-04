const mailin = require('mailin');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Account = mongoose.model('Account'); 
require('dotenv').config();

const smtp = `smtps://${process.env.SMTP_EMAIL}:${process.env.SMTP_PASSWORD}@smtp.gmail.com`;
const transporter = nodemailer.createTransport(smtp);

const models = require('./models');
models.connect(process.env.DB_URI, { useMongoClient: true });

mailin.start({
  port: 25,
  disableWebhook: true
});

mailin.on('message', (connection, data, content) => {
  const subject = data.headers.subject;
  const html = data.html;
  const recipient = data.headers.to;
  const from = data.headers.from.replace("<","&lt;").replace(">", "&gt;"); 

  console.log("sent");

  Accounts.findOne({ email: recipient }, (err, account) => {
    if (err) {
      console.log(err);
    }

    User.findOne({ _id: account.user }, (err, user) => {
      const mailOptions = {
        to,
        subject,
        from: '"Crypt Forwarding Bot" <eloreprojects@gmail.com>',  
        html: `<p> this email is originally from: ${from} and was sent to ${recipient} </p> <hr> <br>` + html + " <hr> <br> <h5> This email was forwarded by the Crypt Bot. </h5>"
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
    
        console.log(info);
      });
    });
  });
});