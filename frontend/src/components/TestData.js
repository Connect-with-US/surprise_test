import React from 'react'
import { useEffect,useState } from 'react'
import { FiUsers } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import { apiConnector } from '../service/apisConnector';
const BASE_URL="http://localhost:8000";
const TestData = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        (async()=>{
        // const response=await axios.get('https://jsonplaceholder.typicode.com/users')
        const response=await apiConnector('GET',BASE_URL+'/api/v1/list/test')
        setData(response.data)
        console.log(response.data);
        })()
      },[])

  return (
    <div className='grid grid-cols-2 gap-4 w-[80%] mx-auto mb-1 mt-6'>
        {
          data?
          ( data.map((item,index)=>(
            <div key={index} className='grid  bg-neutral-50 shadow-md hover:shadow-2xl border-2 z-11 text-neutral-700   p-4 px-6 rounded-lg min-h-44 gap-y-[20px] mb-10'>
            <div className='flex  justify-between items-center text-sm gap-x-3 border-l-4  border-green-800 rounded-sm'>
            <div className='flex gap-x-4 font-semibold items-center '>
              <button className='border px-2 py-1 rounded'> SETUP IN PROCESS</button>
              <span>CREATED:2023.12.29</span></div>
              
              <FiMoreVertical size={20} />
            </div>
            <p className='text-xl font-semibold text-black w-full'>{item.title}</p>
            <p className='w-full'>{item.des}</p>
            {/* <img src={photo} alt='this is' sizes={30} className='rounded-xl object-cover w-56 h-48 mx-auto'/> */}
            <div className='flex  justify-between items-center font-semibold'>
              <div className='flex gap-3 items-center'><p>74% <span>avg.score</span></p>
              <p className=' border-l-2 px-4 '>Results</p>
              <FiUsers className=' border-l-2 px-4 fill-black ' />
              </div>
              <button className='border px-4 py-1 rounded '> HTML</button>
              
            </div>
            </div>
          ))):(<div className='flex justify-items-center w-[99%]  bg-red-500 text-xl text-black text-center font-semibold'><p>Loading...</p></div>)
         
        }
      </div>
  )
}

export default TestData;
