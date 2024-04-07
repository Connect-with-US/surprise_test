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

  <div className='flex flex-col w-full h-full bg-richblack-1005 items-center'>
  <div>
    <form onSubmit={submitHandler} className='flex flex-col gap-y-6 p-12 w-96  items-center rounded text-black font-semibold text-[20px] '>
        <label>
            <p>
                {/* Email Address<sup>*</sup> */}
            </p>
            <input className='newBorder'
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
                {/* Password<sup>*</sup> */}
            </p>
            <div className='flex items-center w-full relative gap-5'>
                <div>
                    <input className='newBorder'
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
        <button className='text-sm font-semibold hover:bg-zinc-200 hover:shadow-xl bg-blue-200 rounded-lg py-2 px-3 mx-auto text-black mt-1'>
            LOG IN 
        </button>
    </form></div>
    <div className='flex flex-col  items-center'>
                
                <div className='text-black text-[15px] font-normal m-1.5 '><p>if you dont have an account</p></div>
            </div>
            <Link to={"/signup"} className='border bg-blue-200 p-1 px-3 rounded-lg hover:bg-zinc-200'>
                <p class>Sign Up</p>
            </Link></div>
        
  )
}

export default LoginForm;
