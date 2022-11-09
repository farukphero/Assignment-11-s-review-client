import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../images/login/login.svg'
import { AuthContext } from "../../contexts/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  const [passwordError, setPasswordError] = useState("");
  const { createUserByEmail,updateName} =  useContext(AuthContext);
  const navigate = useNavigate()
     

  const handleEmailPassword = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value
    // console.log(name, email, password)

    if (password.length < 8) {
      setPasswordError("password should be 8 character");
      return;
    }

    createUserByEmail(email, password)
      .then((result) => {
        const user = result.user;
        updateName()
        navigate('/')
        toast("Wow so easy!")
        handleUpdateProfile(name, photoURL)
        console.log(user);
  
      })
      .catch((error) => {
        setPasswordError(error.message);
      });

  };
  const handleUpdateProfile = (name, photoURL) => {
    const profileName = { displayName: name, photoURL: photoURL };
    updateName(profileName)
      .then(() => {})
      .catch((error) => setPasswordError(error.message));
  };
  
    return (
      <div className="hero min-h-screen bg-base-200">
        <ToastContainer />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
         
        <img className="hidden md:flex" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleEmailPassword} className="card-body">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" />
              <label className="label">
                <p>Already have an account?
                <Link to='/signin' className="label-text-alt link link-hover">Sign In</Link></p>
              </label>
            </div>
            <p className='text-black'>{passwordError}</p>
            <div className="form-control mt-6">
               <button  className='btn btn-primary'>submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
 
    );
};

export default SignUp;