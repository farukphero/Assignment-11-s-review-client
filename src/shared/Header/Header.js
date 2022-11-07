import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/png-clipart-icon-design-social-media-favicon-icon-aircraft-television-angle-thumbnail.png"
import { FaUserCircle} from "@react-icons/all-files/fa/FaUserCircle";

const Header = () => {
  return (
    <div>
      <div>
        <div className="navbar">
          <div className="flex-1">
            <img className="h-12 w-12 mr-3  rounded-full" src={image} alt="" />
            <Link to='/' className="text-white text-3xl">FLY_ <span className="font-bold text-indigo-400">PLANE</span></Link>
          </div>
          <div>
               <Link className="text-white mr-6 text-2xl font-semibold">Sign In</Link>
               </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn-circle ">
                <div className=" rounded-full">
                <FaUserCircle className="h-12 w-12 text-white"/>
               </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <button>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-base-100 bg-opacity-25 rounded">
        <div className="text-center">
         <Link to='' className="mr-5 md:mr-12 text-white font-semibold text-lg">Home</Link>
         <Link to='' className="mr-5 md:mr-12 text-white font-semibold text-lg">jhd</Link>
         <Link to='' className="mr-5 md:mr-12 text-white font-semibold text-lg">fgfxdbvg</Link>
         <Link to='' className="text-white               font-semibold text-lg">dfgbdfbhdf </Link>
       
        </div>
      </div>
    </div>
  );
};

export default Header;
