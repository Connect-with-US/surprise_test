const express = require("express");
const router = express.Router();

const {login, signup} = require("../Controllers/Auth");

router.post("/login", login);
router.post("/signup", signup);

// const User = require("../models/User");
module.exports = router;