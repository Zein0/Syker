const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();


const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'teamsevenb07@gmail.com',  //sender email
      pass: ')7UTH*L{ytnjH{wz'
    },
    from: 'teamsevenb07@gmail.com',
  });

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
  
    var mail = {
      from: name,
      to: 'christapor.har@gmail.com',// receiver email,
      subject: subject,
      email:email,
      text: "Message From: " + email + "\n" + message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })
  module.exports = router;