import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../images/png-clipart-icon-design-social-media-favicon-icon-aircraft-television-angle-thumbnail.png"
import { FaUserCircle} from "@react-icons/all-files/fa/FaUserCircle";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaArrowRight } from 'react-icons/fa';


const Header = () => {
  const {logOut, user} = useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
  }
  return (
    <div>
      <div>
     
        <div className="navbar">
          <div className="flex-1">
            <img className="h-12 w-12 mr-3  rounded-full" src={image} alt="" />
            <Link to='/' className="text-white text-3xl">FLY_ <span className="font-bold text-indigo-400">PLANE</span></Link>
          </div>
          <div>
               {
                user ? <>
                     <FaArrowRight className="text-white mr-2 text-3xl" />
                </> :<Link to='/signin' className="text-white mr-6 text-2xl font-semibold">Sign In</Link>
               }
               </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn-circle ">
                <div className="rounded-full">
              

                
           {user?.photoURL ? <img title={user?.displayName} className="h-12 w-12 rounded-full mr-5 mt-0" src={user?.photoURL} alt="" />:
          <FaUserCircle className="h-12 w-12 text-white"/>
          }
                
               </div>
              </label>
              {
                user?<ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to='/myreview' className="justify-between">
                  My reviews
                    
                  </Link>
                </li>
                <li>
                  <Link to='/addservices'>Add service</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>:<></>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-base-100 bg-opacity-25 rounded">
        <div className="text-center">
         <Link to='/' className="mr-5 md:mr-12 text-white font-semibold text-lg">Home</Link>
         <Link to='/services' className="mr-5 md:mr-12 text-white font-semibold text-lg"> Services</Link>
         <Link to='/blog' className="mr-5 md:mr-12 text-white font-semibold text-lg"> Blog</Link>
         {/* <Link to='' className="text-white               font-semibold text-lg">dfgbdfbhdf </Link> */}
       
        </div>
      </div>
    </div>
  );
};

export default Header;
