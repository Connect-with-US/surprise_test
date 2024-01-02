const express = require("express");
const router = express.Router();

const {login, signup} = require("../Controllers/Auth");
const {auth} = require("../middlewares/auth");
const {Listdata}=require("../component/ListData")

router.post("/login", login);
router.post("/signup", signup);
router.get("/list/test",Listdata);

router.get("/test", auth, (req,res) =>{
    res.json({
        success:true,
        message:'Welcome to the Protected route for TESTS',
    });
});

// const User = require("../models/User");
module.exports = router;