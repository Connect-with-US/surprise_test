import { createSlice } from "@reduxjs/toolkit";

const initialSate={
    pdfFile:false,
    preaisearch:false,
    textinput:false,
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
        }
    }
})

export const {setPdfFile,setPresearch,setTextinput}=AiquestionSlice.actions

export default AiquestionSlice.reducer;