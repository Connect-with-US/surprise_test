import React from 'react'
import photo from "../assets/login.png"
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { apiConnector } from '../service/apisConnector'
import BorderStyle from '../components/common/BorderStyle'
import LineStyle from '../components/common/LineStyle'
import StripStyle from '../components/common/StripStyle'

const BASE_URL="http://localhost:8000";


const Home = () => {

  const[data,setData]=useState([]);
 
  useEffect(()=>{
    (async()=>{
    // const response=await axios.get('https://jsonplaceholder.typicode.com/users')
    const response=await apiConnector('GET',BASE_URL+'/api/v1/list/test')
    setData(response.data)
    console.log(response.data);
    })()
  },[])

  let navigate=useNavigate();
  

  return (
    <div className=' '>
      <div className='grid grid-cols-3  w-full h-96 bg-gradient-to-r from-gray-500 via-slate-700 to-gray-500 rounded-b-3xl ml-1 mr-1  text-center text-white justify-center place-items-center text-3xl gap-x-8'>
        <LineStyle/>
        <div className='grid gap-20'>
        <p className='text-white hover:text-purple-300 hover:border-b-4 hover:p-2 hover:rounded-full duration-500 cursor-pointer' > AI BASED TEST ASSISTEMENT </p>
        <button onClick={()=>(navigate('/testpage'))}  className='animate-bounce text-xl bg-black rounded-3xl py-2 px-4 w-1/3 mx-auto'>TAKE TEST</button>
        <p className='w-full h-1 border-b border-dashed border-t '/>
        </div>
        <div className=' bg-stone-50 w-11/12 h-1/6 rounded-full bottom-6' />
      </div>
      <StripStyle value={"TEST YOUR SKILL"}/>
      <BorderStyle/>

      <div className='grid grid-cols-6 w-[99%] mx-auto mb-1 mt-6 divide-x divide-y divide-white'>
        {
          data?
          ( data.map((item,index)=>(
            <div key={index} className='grid  bg-gray-700 text-white place-content-center text-center p-2 rounded '>
            <p className='text-3xl font-semibold  '>{item.title}</p>
            <p>{item.des}</p>
            <img src={photo} alt='this is' sizes={30} className='rounded-xl object-cover w-56 h-48 mx-auto'/>
            </div>
          ))):(<div className='flex justify-items-end text-xl text-center font-semibold'>Loading...</div>)
         
        }
      </div>
      <StripStyle value1={"b-full"}/>
       
    </div>
  )
}

export default Home;
