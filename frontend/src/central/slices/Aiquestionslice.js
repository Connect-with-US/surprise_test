import { createSlice } from "@reduxjs/toolkit";

const initialSate={
    pdfFile:false,
    preaisearch:false,
    textinput:false,
    question:null,
    questionData:false,
}

const AiquestionSlice=createSlice({
    name:"AiQuestion",
    initialState:initialSate,
    reducers:{
        setPdfFile(state,value){
            state.pdfFile=value.payload
        },
        setPresearch(state,value){
            state.preaisearch=value.payload
        },
        setTextinput(state,value){
            state.textinput=value.payload
        },
        setQ(state,value){
            state.question=value.payload
        },
        setQuestionsData(state,value){
            state.questionData=value.payload
        }
    }
})

export const {setPdfFile,setPresearch,setTextinput,setQ,setQuestionsData}=AiquestionSlice.actions

export default AiquestionSlice.reducer;