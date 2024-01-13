
const{ OpenAI }=require("openai")

require("dotenv").config();
const QuestionsSchema=require("../models/QuestionsModel")

const openai = new OpenAI({
    apiKey:process.env.API_KEY,
    organization:process.env.Origanization
});

exports.OpenAi=async  (req,res)=> {
     const {pram,num}=req.body
     
    try{

        const completion=await openai.chat.completions.create({
            
            messages: [
                {
                    role: "system",
                    content: " Do not include any explanations, only provide a  RFC8259 compliant JSON response  ",
                  },
              
                {role:"user",content:`generate ${num} questins OF ${pram} with 4 options and  answer`},

              ],
              model: "gpt-3.5-turbo-1106",
              response_format: { type: "json_object" },
           
            temperature:0.7,
           
        })
        
        const result=completion.choices[0].message.content
        const questions2 = result.questions;
        console.log(questions2)
        
    // try{
    // //    const ans=await  QuestionsSchema.insertMany(result)
    //    const questionsToInsert = result.questions.map(question => ({ question }));
    //    console.log(questionsToInsert)

    // }catch(err){
    //     console.log("something is issu while saving the data into mongodb")
    //     res.status(400).json({
    //         err:err,
    //         success:false,
    //     })
    // }
   
    res.send(result)
    
    }
    catch(err){
        res.status(400).json({
            err:err,
            success:false,
        })
        
    }
}

