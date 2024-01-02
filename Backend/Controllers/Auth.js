const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
// const { options } = require("../routes/user");
require("dotenv").config();


//signup route handler
exports.signup = async (req,res) => {
    setTimeout(async () => {
    try{
        //get data
        const {name, email, password, conform_p} = req.body;
      
        //check if user already exist
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already Exists',
            });
        }
        if(password!=conform_p){
            return res.status(400).json({
                success:false,
                message:"password and confrom password did not matched",
            })
        }

        //secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(err) {
            return res.status(500).json({
                success:false,
                message:'Error in hashing Password',
            });
        }

        //create entry for User
        const user = await User.create({
            name,email,password:hashedPassword
        })

        return res.status(200).json({
            success:true,
            message:'User Created Successfully',
        });

    }
    catch(error) {
        console.error(error.message);
        return res.status(500).json({
            success:false,
            message:'User cannot be registered, please try again later',
            error:error.message,
        });
    } },5000)
}

//login
exports.login =async(req,res)=>{
    setTimeout(async () => {
        try {
    
            //data fetch
            const {email, password} = req.body;
            //validation on email and password
            if(!email || !password) {
                return res.status(400).json({
                    success:false,
                    message:'PLease fill all the details carefully',
                });
            }
    
            //check for registered user
            let user = await User.findOne({email});
            //if not a registered user
            if(!user) {
                return res.status(401).json({
                    success:false,
                    message:'User is not registered',
                });
            }
    
            const payload = {
                email:user.email,
                id:user._id,
               
            };
            //verify password & generate a JWT token
            if(await bcrypt.compare(password,user.password) ) {
                //password match
                let token =  jwt.sign(payload, 
                                    process.env.JWT_SECRET,
                                    {
                                        expiresIn:"2h",
                                    });
                if(!token){
                    console.log("token did get from sign function");
                    return res.status(400).json({
                        message:"somthing went wrong while login",
                        
                    })
                }
                                    
                user = user.toObject();
                user.token = token;
                user.password = undefined;
    
                const options = {
                    expires: new Date( Date.now() + 3*24*60*60*1000),
                    httpOnly:true,
                }
    
                res.cookie("token", token, options).status(200).json({
                    success:true,
                    user,
                    message:'User Logged in successfully',
                });
    
                
            }
            else {
                //passwsord do not match
                return res.status(403).json({
                    success:false,
                    message:"Password Incorrect",
                });
            }
    
        }
        catch(error) {
            console.log(error);
            return res.status(400).json({
                success:false,
                message:'Login Failure',
                err:error.message
            });
    
        }
    },5000)
} 