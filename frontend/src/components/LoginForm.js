import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

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
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col border-2 border-black p-2 py-4 w-96 items-center rounded text-black font-semibold text-[14px] '>
        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
            <input 
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
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

            <Link to="#">
                <p>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='text-lg bg-black rounded-3xl p-1 px-4 mx-auto text-white'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm
