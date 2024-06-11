const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Connected to database successfully"))
        .catch((error) => {
            console.log("Could not connect to database!", error);
        });
};

module.exports = connectDB;
