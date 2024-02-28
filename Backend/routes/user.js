const express = require("express");
const router = express.Router();

const {login, signup} = require("../Controllers/Auth");
const {auth,signEamilVerify,verifyPassword,pdftext} = require("../middlewares/auth");
const {Listdata}=require("../component/ListData")
const{googleAi}=require("../Ai/index")
const {OpenAi}=require("../Ai/OpenAi")
const {ValidateAnswer}=require("../component/QuestionsValidation/index")

router.post("/login", login);
router.post("/signup",signEamilVerify,verifyPassword, signup);
router.get("/list/test",Listdata);
router.post("/ai",googleAi)
router.post("/openai",OpenAi) 
router.post("/pdfpath",pdftext);
router.post("/questionsValidate",ValidateAnswer)


module.exports = router;