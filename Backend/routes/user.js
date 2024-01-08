const express = require("express");
const router = express.Router();

const {login, signup} = require("../Controllers/Auth");
const {auth,signEamilVerify,verifyPassword} = require("../middlewares/auth");
const {Listdata}=require("../component/ListData")
const{googleAi}=require("../Ai/index")
const {OpenAi}=require("../Ai/OpenAi")

router.post("/login", login);
router.post("/signup",signEamilVerify,verifyPassword, signup);
router.get("/list/test",Listdata);
router.post("/ai",googleAi)
// router.get("/openai",OpenAi)


module.exports = router;