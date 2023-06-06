const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const blacklistToken = [];

const loginUser = async(req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username: username } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const match = bcrypt.compareSync(password, user.password);

        if (!match) {
            return res.status(400).json({ message: "Wrong password" });
        }

        const token = jwt.sign({ username, _id: user.user_id }, secretKey);

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const logoutUser = async(req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {

        const decoded = jwt.verify(token, secretKey);

        const expiredToken = jwt.sign({}, secretKey, { expiresIn: 0 });

        res.json({ token: expiredToken, message: "Logout successful" });
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = {
    loginUser,
    logoutUser,
    blacklistToken,
};