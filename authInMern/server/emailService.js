

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const otpService = require('./otpService');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/otp/send-email', async (req, res) => {
  const { email } = req.body;
  const otp = otpService.generateOTP();
  otpService.storeOTP(email, otp);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'OTP for Login',
    text: `Your OTP for login is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'OTP sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send OTP email.' });
  }
});



app.listen(port, () => console.log(`Listening on port ${port}...`));
