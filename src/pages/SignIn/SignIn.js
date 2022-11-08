 import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import image from '../../images/login/login.svg'
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
 const navigate = useNavigate()
  const {accountSignIn,providerGoogleLogIn}= useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
 

    accountSignIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate('/')
        // navigate(from, { replace: true });
        console.log(user);
        
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerGoogleLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        // navigate(from, { replace: true });
        navigate('/')
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
         
        <img className="hidden md:flex" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
          <h1 className="text-5xl font-bold">Sign In now!</h1>
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
                <h1>Haven't an account? 
                <Link to='/signup' className="label-text-alt link link-hover">Sign Up</Link></h1>
              </label>
            </div>
            <p>{error}</p>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
                <button onClick={handleGoogleSignIn} className="btn mt-6">Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
 
    );
};

export default SignIn;