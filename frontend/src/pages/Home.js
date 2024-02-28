import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StripStyle from '../components/common/StripStyle'
import TestData from '../components/TestData';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { setPopStyle } from '../central/slices/authslice';
import PopUploginForm from '../components/common/PopUploginForm';
import DeveloperList from '../components/common/DeveloperList';
import 'typeface-roboto';
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
      <div className='grid place-content-center w-full h-96 mt-[5px] bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500 rounded-b-[30px] rounded-xl py-4   '
       >
        <div className='flex flex-col h-full gap-8 mt-2'>
        <p className='text-transparent bg-clip-text bg-black text-[34px] font-medium cursor-pointer font-sans font-roboto' > AI POWERED QUESTIONS GENERATOR </p>
        <button onClick={handler}  className='text-sm font-bold bg-zinc-300 rounded-3xl p-2 w-[35%] mx-auto text-black hover:bg-neutral-50'>TAKE TEST</button>
        </div>
      </div>
      <div className='p-2'>
      <StripStyle value={"TEST YOUR SKILL"}/>
      <div className='flex border-l-4 border-r-4 border-orange-500 border-r-orange-500 opacity-75 shadow-md'>
      <DeveloperList/>
      <TestData/>    
      </div>
      <StripStyle value1={"b-full"}/>
      </div>
      <div className='text-3xl font-bold text-black text-center'>
        {/* <a href={hello} download='hello' target='pdf'>download</a> */}
        {/* <DownloadFile/> */}
      </div>
    </div>

  )
}

export default Home;
