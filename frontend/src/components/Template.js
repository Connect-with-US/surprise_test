import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'


const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

    console.log("ye rha mera form type");
    console.log(formtype)
  return (
    <div className='grid grid-cols-2 justify-center w-full mb-2 bg-gray-100'>

        <div className=' text-black flex flex-col justify-center items-center p-4 text-lg w-full mx-auto rounded uppercase font-semibold text-[16px]'>
            <h1 className='bg-green-700 text-white rounded-lg w-11/12 mx-auto text-center p-2' >{title}</h1>
            <p className='flex flex-col items-center gap-4 mb-4'>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Sign Up with Google</p>
            </button>

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

export default Template;
