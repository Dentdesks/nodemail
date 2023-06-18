const nodemailer = require('nodemailer');
require("dotenv").config();

const sendEmail = async (data) => {

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Enable SSL/TLS
    auth: {
      user: 'dentdesks@gmail.com',
      pass: process.env.PASSWORD,
    },
  });
  
  
    transporter.sendMail({
      to: `${data.email}`,
      from: 'dentdesks@gmail.com',
      subject: `${data.subject}`,
      html: `${data.body}`,
    })
    .then(()=>console.log('Mail sent successfully'))
    .catch((err)=>console.log("err",err))
  
  }
  
  module.exports = { sendEmail }

