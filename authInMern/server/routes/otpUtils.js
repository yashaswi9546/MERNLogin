// routes/otpUtils.js

// Function to generate a random OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// Function to verify OTP
const verifyOTP = (otpProvided, otpStored) => {
    return otpProvided === otpStored;
};

module.exports = { generateOTP, verifyOTP };
