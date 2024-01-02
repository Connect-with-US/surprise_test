import React from 'react'
import { useNavigate } from 'react-router-dom'
import LineStyle from '../components/common/LineStyle'
import StripStyle from '../components/common/StripStyle'
import TestData from '../components/TestData'

const Home = () => {
  let navigate=useNavigate();
  
  return (
    <div className=' '>
      <div className='grid grid-cols-3   w-full h-[288px] mt-3 bg-gradient-to-r from-gray-500 via-slate-700 to-gray-500 rounded-b-3xl ml-1 mr-1  text-center text-white justify-center place-items-center text-3xl gap-x-8'>
        <LineStyle/>
        <div className='flex flex-col h-full justify-around'>
        <p className='text-white hover:text-purple-300 hover:border-b-[4px] hover:p-2 hover:rounded duration-500 cursor-pointer' > AI BASED TEST ASSESSMENT </p>
        <button onClick={()=>(navigate('/testpage'))}  className='text-sm font-bold bg-zinc-300 rounded-3xl p-2 w-[35%] mx-auto text-black hover:bg-neutral-50'>TAKE TEST</button>
        <p className='w-full h-1 border-b border-dashed border-t '/>
        </div>
        <div className=' bg-stone-50 w-11/12 h-1/6 rounded-full bottom-6 hover:shadow-2xl' />
      </div>
      <StripStyle value={"TEST YOUR SKILL"}/>
      
      <TestData/>
      <StripStyle value1={"b-full"}/>
       
    </div>
  )
}

export default Home;
