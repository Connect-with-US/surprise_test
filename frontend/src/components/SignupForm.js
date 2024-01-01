import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import { signup } from '../service/Authitication/Auth';
import { useDispatch } from 'react-redux';

const SignupForm = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);

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
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return ;
        }

       
        const accountData = {
            ...formData
        };
        dispatch(signup(accountData,navigate))
        
      
    }


  return (
    <div>
        
        <form onSubmit={submitHandler} className='flex flex-col border-2 border-black p-2 py-6 w-96 items-center rounded text-black font-semibold text-[14px] '>
        {/* first name and lastName */}
            <div>
                    <label >
                        <p> Name<sup>*</sup></p>
                        <input className='text-black'
                            required
                            type="text"
                            name="name"
                            onChange={changeHandler}
                            placeholder="Enter your Name"
                            value={formData.name}
                        />
                    </label>

            </div>
            {/* email Add */}
            <label>
                    <p>Email Address<sup>*</sup></p>
                    <input className='text-black'
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                    />
            </label>

            {/* createPassword and Confirm Password */}
            <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input className='text-black'
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                    />
                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>

                <label className=' flex flex-col   '>
                    <p>Confirm Password<sup>*</sup></p>
                    <input className='text-black rounded p-1 border-none hover:border-none default:border-none '
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                    />
                    <span onClick={() => setShowPassword((prev) => !prev)} className='   text-black place-items-end'>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>
            </div>
        <button   className='text-lg bg-black rounded-3xl p-2 px-3 mx-auto text-white'>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm;
