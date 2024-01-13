import React from 'react'
import logo from "../../assets/logo.png"

import {Link} from "react-router-dom"
import { FiLogIn } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { FiUser } from "react-icons/fi";

const navbar=[
    {
        title:"HOME",
        path:'/'
    },
    {
        title:"ABOUT",
        path:'/about'
    },
    {
        title:"CONTACT",
        path:'/'
    },
]

const Navbar = () => {
    const tailwind=' hover:border-b-indigo-950 hover:border-b-4 hover:bg-zinc-200 p-2 rounded'
    const authdata=useSelector(state=>state.auth.token)
    console.log("from navbar auth data",authdata)
    
  return (

    <div className='flex justify-center gap-x-24 z-11 h-16 w-[50%] mx-auto rounded-full bg-neutral-50 border font-semibold py-[2px] items-center  fixed  left-0 right-0 top-3 text-gray-500'>
        <Link to="/"> 
            <img src={logo}  alt="Logo" width={100} height={10} loading="lazy" className='p-2'/>

        </Link>
        <nav >
            <ul className='flex gap-4'>
            {
                navbar.map((item,index)=>(
                <li key={index}>
                   <Link  className={`${tailwind}`} to={`${item.path}`}> {item.title}</Link>
                </li>
                ))
            }
            </ul>
        </nav>
        {/* Login   */}
        <div className='flex ml-5 mr-3 gap-3'>
            { 
                authdata? (<FiUser size={35} className=' stroke-2 stroke-indigo-900 border-[2px] rounded-full p-1'/>):
                (<Link to="/login" className=' hover:scale-105 hover:shadow-2xl  p-2 rounded'>
                    <button className='flex gap-2 items-center'>
                        LOGIN<span><FiLogIn/></span>
                    </button>
                </Link>)
            }
        </div>
    </div>
  )
}

export default Navbar;
