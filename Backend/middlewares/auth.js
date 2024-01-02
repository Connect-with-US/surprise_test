const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req,res, next) => {
    try{
        
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");
        
        if(!token || token === undefined) {
            return res.status(401).json({
                success:false,
                message:'Token Missing',
            });
        }

        //verify the token
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(payload);
            req.user = payload;
        } catch(error) {
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        next();
    } 
    catch(error) {
        return res.status(401).json({
            success:false,
            message:'Something went wrong, while verifying the token',
            error:error.message,
        });
    }
   
}

//for signin email checks
exports.signEamilVerify=(req,res,next)=>{
    try{
        const userEmail=req.body.email;
        
        if (userEmail && userEmail.toLowerCase().endsWith('@gmail.com')) {
           
                next();
          } else {
            
            res.status(400).json({
                message:"this does not valid gmail",
                success:false,

                });
          }

    }catch(err){
        res.status(500).json({
            message:"this eamil did not exit",
            success:false,
            message2:"user did not created try with valid email",
            err:err.message
        })
    }
}
//password velidations
exports.verifyPassword=(req,res,next)=>{
    try{
        const userPass=req.body.password;
        if (
            userPass.length >= 8 &&
            /[A-Z]/.test(userPass) &&
            /[a-z]/.test(userPass) &&
            /\d/.test(userPass) &&
            /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(userPass)
          ) {
            next();
          } else {
            res.status(500).json({
                message:"password did not contain all 8 char",
                success:false,
            })
          }
      
    }
    catch(err){
        res.status(500).json({
            message:"password did not contain all 8 char",
            success:false,
        })
    }
}