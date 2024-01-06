import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {  useNavigate } from 'react-router-dom';
import { login } from '../service/Authitication/Auth';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const LoginForm = () => {

    const navigate = useNavigate();
    const dispatch=useDispatch();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        dispatch(login(formData,navigate))
       
    }

  return (
  <div className='flex flex-col  items-center '>
  <div>
    <form onSubmit={submitHandler} className='flex flex-col gap-y-2 border-2  p-4 w-96 items-center rounded text-black font-semibold text-[14px] '>
        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
            <input className='w-full rounded-lg h-10 px-2 focus:outline-none focus:ring-0  focus:border-green-500 border-2 border-solid mt-1'
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
            />
        </label>

        <label>
            <p>
                Password<sup>*</sup>
            </p>
            <div className='flex items-center w-full relative '>
                <div>
                    <input className='  rounded-lg h-10 px-2 focus:outline-none focus:ring-0  focus:border-green-500 border-2 border-solid mt-1'
                        required
                        type= {showPassword ? ("text") : ("password")}
                        value = {formData.password}
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        name="password"
                    />
                </div>
                <div className='flex items-center absolute right-4 '>
                    <span onClick={() => setShowPassword((prev) => !prev)} >
                        {showPassword ? (<AiOutlineEyeInvisible size={15} color='black'/>) : (<AiOutlineEye  size={15} color='black'/>)}
                    </span>
                </div>
            </div>
        </label>
        <button className='text-sm font-semibold hover:bg-neutral-50 hover:shadow-xl bg-zinc-200 rounded-lg py-2 px-4 mx-auto text-black mt-1'>
            LOG IN 
        </button>
    </form></div>
    <div className='flex flex-col  items-center'>
                
                <div className='text-zinc-500 text-[10px] font-normal m-1 '><p>if you dont have an account</p></div>
            </div>
            <Link to={"/signup"} className='border bg-zinc-200 p-1 px-3 rounded-lg hover:bg-neutral-50'>
                <p>Sign Up</p>
            </Link></div>
        
  )
}

export default LoginForm;
