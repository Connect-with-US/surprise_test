const {GoogleGenerativeAI}=require("@google/generative-ai")
const {convertStreamToJSON,convertToJSON}=require("../component/index")
const { Readable } = require('stream');
require("dotenv").config();
const genAI=new GoogleGenerativeAI(process.env.API_KEY)

exports.googleAi=async(req,res)=>{
    const {des}=req.body;
   if(!des){
    res.send("must be provide descriptions")
   }

    try{
        const generationConfig = {
            stopSequences: ["red"],
            maxOutputTokens: 500,
            temperature: 0.9,
            topP: 0.1,
            topK: 16,
            
          };
    const model=genAI.getGenerativeModel({model:"gemini-pro",generationConfig});
    const prompt=["generate 10 question with 4 options",
       "tell abot react js"," tell about hooks"," tells about react icon",
    
    
]
    
  const result = await model.generateContent(prompt);
  const response =  result.response;
  const text = response.text();
 
    // const ans=convertToJSON(text)
    
    
    
    res.status(200).json({
        message:"get AI respnces",
        // ans,
        text,
        success:true,
    })
    
    }
    catch(err){
        res.status(600).json({
            message:"somthing is wrong",
            success:false,
        })
    }


}