import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { useSelector } from 'react-redux';
import RingLoader from "react-spinners/ClipLoader";

const Template = ({title, desc1, desc2, image,formtype}) => {

const loading=useSelector(state=>state.auth.loading)
console.log("this is redux data ",loading)
  return (
    <div className=' h-screen flex items-center justify-center  bg-richblack-1007'>
        {
            loading? <RingLoader
                color={'#d6b036'}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />:
            (
                <div className='grid  justify-center items-center w-full mb-2  bg-richblack-1007 ml-1 mr-1'>

        <div className='border-action text-black flex flex-col justify-center items-center p-4 text-sm w-full mx-auto rounded font-semibold border-4 text-[16px] mt-12'>
            <h1 className='bg-green-700 text-white rounded-lg w-11/12 mx-auto text-center p-2' >{title}</h1>
            <p className='flex flex-col items-center gap-4 mb-3 mt-3 text-[0.999rem] leading-[1.125rem]'>
                <span className="font-edu-sa font-bold italic text-sky-100">{desc1}</span>
                <span className="font-edu-sa font-bold italic text-sky-100">{desc2}</span>
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

            {/* <img src={image}
                alt="Students"
                width={558}
                height={300}
                loading="lazy"
                    className=' rounded-3xl  object-fill'
                />     */}
        </div>

    </div>
            )

        }
    </div>
    
  )
}

export default Template;
