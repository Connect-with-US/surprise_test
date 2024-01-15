import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import abc from "../../assets/abc.png"
import template2 from "../../assets/template2.jpg"
import template3 from "../../assets/template3.jpg"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import DownloadFile from './DownloadFile'

const designData=[
  { template:abc},{ template:template2},{ template:template3},
]

const DownloadFormate = () => {
    const[indexes,setIndexes]=useState(-1);
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const clickHandle=(index)=>{
      console.log(index)
      
      // return (<DownloadFile index={index}/>)
      setIndexes(index)

    }
    if(indexes===0){
      return  (<DownloadFile />  );
    }
    else if(indexes===1){
      return  (<DownloadFile />);
    }
    else if(indexes===2){
      return  (<DownloadFile />);
    }
  return (
    <div className='m-4 mt-8 mb-8 text-center font-bold border-b'>
      <h1 >SELECT THE FORMATES</h1>
      <div className=' grid grid-cols-3 gap-4 w-[90%] mx-auto'>
        {
          designData.map((item,index)=>(
            <div key={index} className='p-4 rounded shadow-lg m-4 hover:shadow-2xl cursor-pointer ' 
            onClick={()=>clickHandle(index)}>
            <img src={item.template} className=' rounded'/>
            
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default DownloadFormate;
