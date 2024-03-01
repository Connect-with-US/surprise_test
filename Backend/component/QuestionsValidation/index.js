

exports.ValidateAnswer=async(req,res)=>{
    try{
    const {userAnswers, questions}=req.body
    // console.log(userAnswers, questions)
    let score=0;
    let correctQuestions=0;
    for(let i=0;i<questions.length;i++){
        if(userAnswers[i]===questions[i].answer){
            score+=5;
            correctQuestions++;
        }
    }
    const wrongQuestions=questions.length-correctQuestions;
    return res.status(200).json({
        score,
        correctQuestions,
        wrongQuestions,
        message:"sucessfull get the result",
    })
    }
    catch(err){
        res.status(400).json({
            message:"questions validations failed",
            sucess:false,
        })
    }
}        