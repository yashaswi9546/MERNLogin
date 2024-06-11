const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const auth = async (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) return res.status(401).send({ message: "Access Denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);
        if (!user) throw new Error();
        req.user = user;
        next();
    } catch (error) {
        res.status(400).send({ message: "Invalid Token" });
    }
};

module.exports = auth;
