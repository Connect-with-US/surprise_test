const express = require("express");
const router = express.Router();

const {login, signup} = require("../Controllers/Auth");
const {Listdata}=require("../component/ListData")
router.post("/login",login);



router.post("/signup", signup);
router.get("/list/test",Listdata);

// const User = require("../models/User");
module.exports = router;