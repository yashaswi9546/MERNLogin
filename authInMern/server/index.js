// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const userRoutes = require('./routes/users');
// const authRoutes = require('./routes/auth');
// const otpRoutes = require('./routes/otpRoutes'); // Import the OTP routes
// const nodemailer = require('nodemailer');

// const app = express();
// const port = process.env.PORT || 8080;

// // Database connection
// connectDB();

// // Middlewares
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/otp', otpRoutes); // Use the OTP routes

// // Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

// // Endpoint to send OTP via email
// app.post('/api/otp/send-email', async (req, res) => {
//     const { email, otp } = req.body;

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: 'OTP for Login',
//         text: `Your OTP for login is: ${otp}`,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: 'OTP sent successfully.' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ message: 'Failed to send OTP email.' });
//     }
// });

// app.listen(port, () => console.log(`Listening on port ${port}...`));
// Import necessary modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const otpRoutes = require('./routes/otpRoutes'); // Import the OTP routes
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 8080; // Use a default port (8080) if PORT is not specified in .env

// Database connection
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/otp', otpRoutes); // Use the OTP routes

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Endpoint to send OTP via email (consider moving this to otpRoutes)
app.post('/api/otp/send-email', async (req, res) => {
    const { email, otp } = req.body;

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

// Start the server
app.listen(port, () => console.log(`Listening on port ${port}...`));
