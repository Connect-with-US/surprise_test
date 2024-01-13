import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LineStyle from '../components/common/LineStyle'
import StripStyle from '../components/common/StripStyle'
import TestData from '../components/TestData';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { setPopStyle } from '../central/slices/authslice';
import PopUploginForm from '../components/common/PopUploginForm';
import DeveloperList from '../components/common/DeveloperList';
import roshan from "../assets/roshan.jpg"
import DownloadFile from "../components/download/DownloadFile"

const Home = () => {
  let navigate=useNavigate();
  const dispatch=useDispatch();
  
  const token=useSelector(state=>state.auth.token)
  const pop_up=useSelector(state=>state.auth.pop_up)
  const handler=()=>{
    if(!token){
      toast.success("you have to login first")
     dispatch(setPopStyle(true))
    }else{
      
      navigate("/testpage")
    }
  }

  return (

    <div className='' >
    {
      pop_up? (<PopUploginForm/>):(<></>)
    }
      <div className='grid place-content-center w-full h-96 mt-2 bg-gradient-to-r from-gray-800 via-indigo-950 to-gray-800 text-black rounded-b-[30px] rounded-xl py-4   '
       >
        
        <div className='flex flex-col h-full gap-8 mt-24 '>
        <p className='text-white font-bold text-[40px]   cursor-pointer' > AI POWERED QUESTIONS GENERATOR </p>
        <button onClick={handler}  className='text-sm font-bold bg-zinc-300 rounded-3xl p-2 w-[35%] mx-auto text-black hover:bg-neutral-50'>TAKE TEST</button>
        </div>
        


    

      </div>
      <StripStyle value={"TEST YOUR SKILL"}/>
      <div className='flex'>
      <DeveloperList/>
      <TestData/>    
      </div>
      <StripStyle value1={"b-full"}/>
      <div className='text-3xl font-bold text-black text-center'>
        {/* <a href={hello} download='hello' target='pdf'>download</a> */}
        {/* <DownloadFile/> */}
      </div>
    </div>
  )
}

export default Home;
