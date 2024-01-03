const {GoogleGenerativeAI}=require("@google/generative-ai")

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
    const promot=["generate 10 question with 4 options",
       "tell abot react js"," teall about hooks"," tells about react icon",
    
    "reactis slow framwork and it also not able to use n tio company"
]
    const result=await model.generateContentStream(promot);
   
    let text = '';
    for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    text += chunkText;
    }
    res.status(200).json({
        message:"get AI respnces",
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