import React from 'react'
import { useNavigate } from 'react-router-dom'
import DownloadFile from './DownloadFile';


const DownloadOrTestButton = () => {
    const navigate=useNavigate();
    const clickHandler1=()=>navigate('/questions')
    function clickHandler2(){ return (<DownloadFile/>) } 
    
  return (
    <div className='flex flex-row justify-center h-screen aligns-center w-[70%] gap-4 border bg-neutral-100 shadow-lg p-4 mx-auto mb-6 text-black text-center rounded-xl mt-2'>
     <button type='submit' className='w-[50%] p-3 text-center font-semibold  text-black rounded  bg-emerald-400 hover:border-emerald-400 hover:border-[1px] hover:bg-neutral-50 duration-200' onClick={clickHandler1}>Take Test</button>
      <button type='submit' className='w-[50%] p-3 text-center font-semibold  text-black rounded  bg-emerald-400 hover:border-emerald-400 hover:border-[1px] hover:bg-neutral-50 duration-200' onClick={()=>clickHandler2()}>Download Question</button>
    </div>
  )
}

export default DownloadOrTestButton
