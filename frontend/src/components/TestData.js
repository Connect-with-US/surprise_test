import React from 'react'
import { useEffect,useState } from 'react'
import { FiMoreVertical } from "react-icons/fi";
import { apiConnector } from '../service/apisConnector';
import { OpenAi } from '../service/Ai/OpenAi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const BASE_URL="https://surprise-test-1.onrender.com/api/v1.1.2";
const TestData = () => {
    const[data,setData]=useState([]);
    const navigate=useNavigate()
    const dispatch=useDispatch();
    useEffect(()=>{
        (async()=>{
        const response=await apiConnector('GET',BASE_URL+'/list/test')
        setData(response.data)
        console.log(response.data);
        })()
      },[])

      const clickhandle=(data)=>{
        console.log("our data is",data)
        dispatch(OpenAi(data,5,navigate))
      }

  return (
    <div className='grid grid-cols-2 gap-4 w-[83%] mx-auto mb-1 mt-6'>
        {
          data?
          ( data.map((item,index)=>(
            <div key={index} onClick={()=>clickhandle(item.des)} className={`grid  bg-neutral-50 shadow-md hover:shadow-2xl border-l-[2px]  z-11 text-neutral-700   p-4 px-6 rounded-lg min-h-44 gap-y-[20px] mb-10
            ${index%3===0 ? ('border-green-600'):('border-indigo-950')}`}>
            <div className='flex  justify-between items-center text-sm gap-x-3 border-l-4  border-green-800 rounded-sm'>
            <div className='flex gap-x-4 font-semibold items-center '>
              <button className='border px-2 py-1 rounded text-green-950'>{item.status?(item.status):("SETUP IN PROCESS")} </button>
              <span>{`DATE ${item.created_At}`}</span></div>
              
              <FiMoreVertical size={20} />
            </div>
            <p className='text-xl font-semibold text-black w-full'>{item.title}</p>
            <p className='w-full'>{item.des}</p>
            <div className='flex  justify-between items-center font-semibold'>
              <div className='flex gap-3 items-center'><p>{item.score} <span>avg.score</span></p>
              <p className=' border-l-[3px] border-zinc-200 rounded-sm px-4 '>{`Results ${" "}( ${item.no_of_participant}+)`}</p>
           
              </div>
              <button className='border px-4 py-1 rounded '>{item.tage? (item.tage):("Tage Has Not Set")} </button>
              
            </div>
            </div>
          ))):(<div className='flex justify-items-center w-[99%]  bg-red-500 text-xl text-black text-center font-semibold'><p>Loading...</p></div>)
         
        }
      </div>
  )
}

export default TestData;
