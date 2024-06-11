// const crypto = require('crypto');

// function generateOTP() {
//     return Math.floor(100000 + Math.random() * 900000).toString();
// }

// const otpStorage = {};

// function storeOTP(email, otp) {
//     otpStorage[email] = {
//         otp,
//         expiresAt: Date.now() + 300000, // OTP expires in 5 minutes
//     };
// }

// function verifyOTP(email, otp) {
//     const storedOTP = otpStorage[email];
//     if (!storedOTP) return false;
//     if (storedOTP.expiresAt < Date.now()) {
//         delete otpStorage[email];
//         return false;
//     }
//     if (storedOTP.otp !== otp) return false;
//     delete otpStorage[email];
//     return true;
// }

// module.exports = {
//     generateOTP,
//     storeOTP,
//     verifyOTP,
// };
// otpService.js
const crypto = require('crypto');

const otpStorage = {}; // In-memory storage for OTPs

function generateOTP() {
    const otp = crypto.randomInt(100000, 999999).toString();
    return otp;
}

function storeOTP(email, otp) {
    otpStorage[email] = {
        otp,
        expiresAt: Date.now() + 300000, // OTP expires in 5 minutes
    };
    console.log("Stored OTP:", otp, "for email:", email); // Log stored OTP
}

function verifyOTP(email, otp) {
    const storedOTP = otpStorage[email];
    if (!storedOTP) {
        console.log("No OTP found for email:", email); // Log no OTP found
        return false;
    }
    if (storedOTP.expiresAt < Date.now()) {
        console.log("OTP expired for email:", email); // Log OTP expired
        delete otpStorage[email];
        return false;
    }
    if (storedOTP.otp !== otp) {
        console.log("Stored OTP:", storedOTP.otp, "does not match provided OTP:", otp); // Log mismatch
        return false;
    }
    delete otpStorage[email];
    return true;
}

module.exports = {
    generateOTP,
    storeOTP,
    verifyOTP,
};
