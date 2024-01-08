const{ OpenAI }=require("openai")
require("dotenv").config();
const openai = new OpenAI({
    apiKey: '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',
  });

exports.OpenAi=async  (req,res)=> {
    try{
    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
    }
    catch(err){
        res.status(400).json({
            err:err,
            success:false,
        })
        
    }
}

