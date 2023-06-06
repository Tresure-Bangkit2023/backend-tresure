const express = require("express");
const { loginUser, logoutUser } = require("../controllers/authController");

const router = express.Router();

router.post('/loginUser', loginUser);
router.post('/logoutUser', logoutUser);

module.exports = router;