import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { useSelector } from 'react-redux';

const Template = ({title, desc1, desc2, image,formtype}) => {

const loading=useSelector(state=>state.auth.loading)
console.log("this is redux data ",loading)
  return (
    <div className=' mt-32 bg-gray-100'>
        {
            loading? (<p className='text-black w-full h-screen items-center text-3xl font-bold'>Loading......</p>):
            (
                <div className='grid grid-cols-2 justify-center w-full mb-2 mt-3 bg-white ml-1 mr-1'>

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

        <div className=' overflow-hidden grid items-center justify-items-center w-full '>
            {/* <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"
                className='z-0 absolute overflow-hidden rounded-3xl w-full object-fill '
                /> */}

            <img src={image}
                alt="Students"
                width={558}
                height={300}
                loading="lazy"
                    className=' rounded-3xl  object-fill'
                />    
        </div>

    </div>
            )

        }
    </div>
    
  )
}

export default Template;
