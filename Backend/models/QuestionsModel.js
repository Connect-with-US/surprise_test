const mongoose=require("mongoose");

const QuestionsSchema=new mongoose.Schema({

    // options:{
    //     type:[],
    // }
    question: String,
})

module.exports=mongoose.model("QuestionsSchema",QuestionsSchema);