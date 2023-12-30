import React from 'react'
import logo from "../../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly z-11 h-14 bg-neutral-50 border font-semibold py-[2px] items-center'>

        <Link to="/"> 
            <img src={logo}  alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav >
            <ul className='flex gap-4'>
                <li>
                    <Link  className=' hover:border-b-green-700 hover:border-b-4' to="/">HOME</Link>
                </li>
                <li>
                    <Link className=' hover:border-b-green-700 hover:border-b-4  ' to="/">ABOUT</Link>
                </li>
                <li>
                    <Link className=' hover:border-b-green-700 hover:border-b-4  ' to="/">CONTACT</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex ml-5 mr-3 gap-3 '>
            { !isLoggedIn &&
                <Link to="/login" className=' hover:border-b-green-700 hover:border-b-4  '>
                    <button>
                        LOGIN
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup" className=' hover:border-b-green-700 hover:border-b-4  '>
                    <button >
                        SIGN UP
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/" className=' hover:border-b-green-700 hover:border-b-4  '>
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        LOG OUT
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard" className=' hover:border-b-green-700 hover:border-b-4  '>
                    <button>
                        DASHBORD
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar;
