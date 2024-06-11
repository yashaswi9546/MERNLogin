// const express = require('express');
// const router = express.Router();
// const { generateOTP, verifyOTP } = require('./otpUtils');
// const nodemailer = require('nodemailer'); // Import nodemailer


// // Configure nodemailer transporter
// const transporter = nodemailer.createTransport({
//     service: 'Gmail', // Specify your email service provider here
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

// // Endpoint to request OTP
// router.post('/request-otp', async (req, res) => {
//     const { email } = req.body;
//     const otp = generateOTP();
//     console.log(`OTP sent to ${email}: ${otp}`);

//     // Send OTP email
//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: 'Your OTP for Login',
//         text: `Your OTP is: ${otp}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log('Error sending email:', error);
//             res.status(500).json({ message: 'Error sending OTP email.' });
//         } else {
//             console.log('Email sent:', info.response);
//             res.status(200).json({ message: 'OTP sent successfully.' });
//         }
//     });
// });

// // Endpoint to verify OTP
// router.post('/verify-otp', (req, res) => {
//     const { email, otp } = req.body;
//     const storedOtp = '123456'; // Replace with logic to get stored OTP
//     const isVerified = verifyOTP(otp, storedOtp);
//     if (isVerified) {
//         res.status(200).json({ message: 'OTP verified successfully.' });
//     } else {
//         res.status(400).json({ message: 'Invalid OTP.' });
//     }
// });
// module.exports = router;
// otpRoutes.js
const express = require('express');
const router = express.Router();
const { generateOTP, storeOTP, verifyOTP } = require('../otpService');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

router.post('/request-otp', async (req, res) => {
    const { email } = req.body;
    const otp = generateOTP();
    console.log(`OTP sent to ${email}: ${otp}`);

    storeOTP(email, otp); // Store the generated OTP

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP for Login',
        text: `Your OTP is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            res.status(500).json({ message: 'Error sending OTP email.' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'OTP sent successfully.' });
        }
    });
});

router.post('/verify-otp', (req, res) => {
    const { email, otp } = req.body;
    console.log("Received OTP for verification:", otp); // Log received OTP
    const isVerified = verifyOTP(email, otp);
    if (isVerified) {
        console.log("OTP verified successfully for email:", email); // Log successful verification
        res.status(200).json({ message: 'OTP verified successfully.', token: 'fake-jwt-token' });
    } else {
        console.log("Invalid OTP for email:", email); // Log invalid OTP
        res.status(400).json({ message: 'Invalid OTP.' });
    }
});

module.exports = router;
