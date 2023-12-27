import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
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

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        console.log("printing account data ");
        console.log(accountData);

        navigate("/dashboard");

    }


  return (
    <div>
        {/* student-Instructor tab */}
        {/* <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div> */}

        <form onSubmit={submitHandler} className='flex flex-col border-2 border-black p-2 py-6 w-96 items-center rounded text-black font-semibold text-[14px] '>
        {/* first name and lastName */}
            <div>
                    <label >
                        <p>First Name<sup>*</sup></p>
                        <input className='text-black'
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input className='text-black'
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
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
        <button className='text-lg bg-black rounded-3xl p-2 px-3 mx-auto text-white'>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm;
