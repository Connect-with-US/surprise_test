import React from 'react'
<<<<<<< HEAD
import logo from "../../assets/logo.png"
=======
import logo from "../../assets/QuizFuse-removebg.png"
>>>>>>> 8e575e5540a2200064946f503a4dde1ae604392f
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
        path:'/'
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
<<<<<<< HEAD
    <div className='flex justify-center gap-x-24 z-11 h-16 w-[50%] mx-auto rounded-full bg-neutral-50 border font-semibold py-[2px] items-center  fixed  left-0 right-0 top-4 text-gray-500'>
        <Link to="/"> 
            <img src={logo}  alt="Logo" width={100} height={10} loading="lazy" className='p-2'/>
=======
    <div className='flex justify-evenly z-11 h-14 bg-yellow-51 border font-semibold py-[2px] items-center'>

        <Link to="/"> 
            <img src={logo}  alt="Logo" width={95} height={18} loading="lazy"/>
>>>>>>> 8e575e5540a2200064946f503a4dde1ae604392f
        </Link>
        <nav >
            <ul className='flex gap-4'>
            {
                navbar.map((item,index)=>(
                <li>
<<<<<<< HEAD
                   <Link  className={`${tailwind}`} to={`${item.path}`}> {item.title}</Link>
=======
                    <Link  className=' hover:border-b-orange-700 hover:border-b-4' to="/">HOME</Link>
                </li>
                <li>
                    <Link className=' hover:border-b-orange-700 hover:border-b-4  ' to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link className=' hover:border-b-orange-700 hover:border-b-4  ' to="/">CONTACT</Link>
>>>>>>> 8e575e5540a2200064946f503a4dde1ae604392f
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
