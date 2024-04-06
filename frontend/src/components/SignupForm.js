import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import { signup } from '../service/Authitication/Auth';
import { useDispatch } from 'react-redux';

const SignupForm = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const styleId='newBorder';

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
        
        <form onSubmit={submitHandler} className='border-action flex flex-col border-[1px] p-2 mb-1 py-5 w-96 items-center rounded text-black font-semibold text-[20px] gap-y-5 '>
        {/* first name and lastName */}
            <div>
                    <label >
                        {/* <p> Name<sup>*</sup></p> */}
                        <input className={`${styleId}`}
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
                    {/* <p>Email Address<sup>*</sup></p> */}
                    <input className={`${styleId}`}
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                    />
            </label>

            {/* createPassword and Confirm Password */}
            <div className='flex flex-col gap-y-2'>
                <label>
                    {/* <p>Create Password<sup>*</sup></p> */}
                    <div className='flex items-center w-full relative '>
                        <div>
                            <input className={`${styleId}`}
                                required
                                type= {showPassword ? ("text") : ("password")}
                                name="password"
                                onChange={changeHandler}
                                placeholder="Enter Password"
                                value={formData.password}
                            />
                        </div>
                        <div className='flex items-center absolute right-4 '>
                            <span onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ? (<AiOutlineEyeInvisible size={15}/>) : (<AiOutlineEye size={15}/>)}
                            </span>
                        </div>
                    </div>
                </label>

                <label >
                    {/* <p>Confirm Password<sup>*</sup></p> */}
                    <div className='flex items-center mt-2 w-full relative'>
                        <div>
                        <input className={`${styleId}`}
                            required
                            type= {showPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                        />
                        </div>
                        <div className='flex items-center absolute right-4 '>
                        <span onClick={() => setShowPassword((prev) => !prev)} className='   text-black place-items-end'>
                            {showPassword ? (<AiOutlineEyeInvisible size={15}/>) : (<AiOutlineEye size={15}/>)}
                        </span>
                        </div>
                    </div>
                </label>
            </div>
        <button   className='border bg-blue-300 p-2 px-3 rounded-lg hover:bg-neutral-50 m-2'>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm;
