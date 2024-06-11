// const router = require("express").Router();
// const { User } = require("../models/user");
// const bcrypt = require("bcrypt");
// const Joi = require("joi");

// router.post("/", async (req, res) => {
//     try {
//         const { error } = validate(req.body);
//         if (error) return res.status(400).send({ message: error.details[0].message });

//         const user = await User.findOne({ email: req.body.email });
//         if (!user) return res.status(401).send({ message: "Invalid Email or Password" });

//         const validPassword = await bcrypt.compare(req.body.password, user.password);
//         if (!validPassword) return res.status(401).send({ message: "Invalid Email or Password" });

//         const token = user.generateAuthToken();
//         res.status(200).send({ data: token, message: "Logged in successfully" });
//     } catch (error) {
//         res.status(500).send({ message: "Internal Server Error" });
//     }
// });

// const validate = (data) => {
//     const schema = Joi.object({
//         email: Joi.string().email().required().label("Email"),
//         password: Joi.string().required().label("Password"),
//     });
//     return schema.validate(data);
// };

// module.exports = router;
const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

// Login route
router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(401).send({ message: "Invalid Email or Password" });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(401).send({ message: "Invalid Email or Password" });

        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: "Logged in successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) return res.status(401).send({ message: "Access Denied. No token provided." });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send({ message: "Invalid token." });
    }
};

// Route to get the logged-in user's details
router.get("/me", authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        if (!user) return res.status(404).send({ message: "User not found." });

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Validate user input
const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = router;
