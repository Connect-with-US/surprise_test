import { createSlice } from "@reduxjs/toolkit";

const initialSate={
    pop_up:false,
    signupData:null,
    loading:false,
    // token:localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")):null,
    token:sessionStorage.getItem("token")? JSON.parse(sessionStorage.getItem("token")):null,
};

const authSlice=createSlice({
    name:"auth",
    initialState:initialSate,
    reducers:{
        setSignupData(state,value){
            state.signupData=value.payload
        },
        setToken(state,value){
            state.token=value.payload
        },
        setLoading(state,value){
            state.loading=value.payload
        },
        setPopStyle(state,value){
            state.pop_up=value.payload
        }

    }
})

export const{setLoading,setSignupData,setToken,setPopStyle}=authSlice.actions
export default authSlice.reducer