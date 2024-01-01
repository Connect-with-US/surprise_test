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
        // ;(()=>{
        //     login(formData,navigate)
        // })()
        
        
    }

  return (
  <div className='flex flex-col  items-center'>
  <div>
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

            
        </label>
        
        <button className='text-sm font-semibold hover:bg-neutral-50 hover:shadow-xl bg-zinc-200 rounded-3xl p-1 px-4 mx-auto text-black'>
            LOG IN 
        </button>
        
    </form></div>
    <div className='flex flex-col  items-center'>
                <div></div>
                <p>OR</p>
                <div className='text-zinc-500 text-[10px] font-normal m-2 '><p>if you dont have account</p></div>
            </div>

            <Link to={"/signup"} className='border bg-zinc-200 text-blck py-1 px-2 rounded hover:bg-neutral-50'>
                <p>Sign Up</p>
            </Link></div>
            
  )
}

export default LoginForm;
