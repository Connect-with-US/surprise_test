import React from 'react'
import logo from "../../assets/QuizFuse-removebg.png"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"
import { FiLogIn } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { FiUser } from "react-icons/fi";


const Navbar = () => {
    
    const authdata=useSelector(state=>state.auth.token)
    console.log("from navbar auth data",authdata)
   

  return (
    <div className='flex justify-evenly z-11 h-14 bg-yellow-51 border font-semibold py-[2px] items-center'>

        <Link to="/"> 
            <img src={logo}  alt="Logo" width={95} height={18} loading="lazy"/>
        </Link>

        <nav >
            <ul className='flex gap-4'>
                <li>
                    <Link  className=' hover:border-b-orange-700 hover:border-b-4' to="/">HOME</Link>
                </li>
                <li>
                    <Link className=' hover:border-b-orange-700 hover:border-b-4  ' to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link className=' hover:border-b-orange-700 hover:border-b-4  ' to="/">CONTACT</Link>
                </li>
            </ul>
        </nav>

        {/* Login   */}
        <div className='flex ml-5 mr-3 gap-3 '>
            { 
                authdata? (<FiUser size={35} className=' stroke-2 stroke-cyan-700 border-[2px] rounded-full p-1'/>):
                (<Link to="/login" className=' hover:border-b-green-700 hover:border-b-4  '>
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
