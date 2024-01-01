import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSignupData } from '../central/slices/authslice';

const Template = ({title, desc1, desc2, image,formtype}) => {
const dispatch=useDispatch();


const loading=useSelector(state=>state.auth.loading)
console.log("this is redux data ",loading)
  return (
    <div>
        {
            loading? (<p className='text-black w-full h-screen items-center text-3xl font-bold'>Loading......</p>):
            (
                <div className='grid grid-cols-2 justify-center w-full mb-2 mt-3 bg-gray-100 ml-1 mr-1'>

        <div className=' text-black flex flex-col justify-center items-center p-4 text-sm w-full mx-auto rounded uppercase font-semibold text-[16px]'>
            <h1 className='bg-green-700 text-white rounded-lg w-11/12 mx-auto text-center p-2' >{title}</h1>
            <p className='flex flex-col items-center gap-4 mb-4'>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {
                formtype==="signup"? (<SignupForm/>):( <LoginForm/>)
            }
               
        </div>

        <div className='relative overflow-hidden grid items-center justify-items-center w-full '>
            <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"
                className='z-0 absolute rounded-3xl w-full object-fill '
                />

            <img src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                    className='z-10 absolute rounded-3xl w-full object-fill'
                />    
        </div>

    </div>
            )

        }
    </div>
    
  )
}

export default Template;
