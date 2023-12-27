import React from 'react'
import logo from "../../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly bg-slate-50 font-semibold'>

        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav >
            <ul className='flex gap-3'>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/">ABOUT</Link>
                </li>
                <li>
                    <Link to="/">CONTACT</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex ml-5 mr-3 gap-3 '>
            { !isLoggedIn &&
                <Link to="/login">
                    <button>
                        LOGIN
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button >
                        SIGN UP
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        LOG OUT
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
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
