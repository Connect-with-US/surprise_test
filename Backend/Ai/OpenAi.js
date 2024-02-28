
const{ OpenAI }=require("openai")

require("dotenv").config();
const QuestionsSchema=require("../models/QuestionsModel")

const openai = new OpenAI({
    apiKey:process.env.API_KEY,
    organization:process.env.Origanization
});

exports.OpenAi=async  (req,res)=> {
     const {pram,num}=req.body
    //  const thumbnail=req.files.file;
    //  console.log("text heding is",pram);
    //  console.log("this is pdf",thumbnail);
     
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
      //create the db map
    //   await  dbEntry(result)
        // console.log(result)
        
        
   
    res.send(result)
    
    }
    catch(err){
        res.status(400).json({
            err:err,
            success:false,
        })
        
    }
}


// async function dbEntry(data){
//     try{
//     console.log(data.type)
//         data.map((item,index)=>{
//             const result=[]
//             result.push(item.answer);

//             console.log(result)
//         })

//     }catch(err){
//         console.log(err.message)
//     }
// }