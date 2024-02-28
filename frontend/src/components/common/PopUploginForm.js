import React from 'react'
import LoginForm from '../LoginForm'
import { TiDelete } from "react-icons/ti";
import {setPopStyle} from "../../central/slices/authslice"
import { useDispatch } from 'react-redux';

const PopUploginForm = () => {
    const dispatch=useDispatch();
    const handler=()=>{
        dispatch(setPopStyle(false))
    }
  return (
    <div  className=" mt-0 fixed inset-0 z-[1000]  justify-center items-center overflow-auto bg-opacity-10 backdrop-brightness-50 backdrop-blur-[2px]"
    
     >
        <div className='flex flex-col absolute top-[160px] left-0 right-0 border bg-gray-100 w-[550px] h-[350px] mx-auto
        rounded   '>
        <div className='flex py-0 mt-0 justify-end'><TiDelete  size={35} onClick={handler} className=' hover:z-10 hover:scale-110'/></div>
        
        <LoginForm/>
        
        </div>
    </div>
  )
}

export default PopUploginForm;
