import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/bp-1.jpg.webp'
// import './SignIn.css'

const SignIn = () => {
    return (
<div>
<div className="w-full img-gradient">
        <img src={image} alt="" className="w-full h-screen" />
      </div>
      <div className="absolute top-24 md:top-5 lg:top-14 left-0 md:left-40 lg:left-52">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-white">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-black">
            <form  className="card-body">
              <div className="form-control w-72">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email/number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* <p className="text-red-500">{passwordError}</p> */}
              <div className="form-control">
                <button className="btn btn-primary">Register</button>

                <p>
                  Already have an account? 
                  <Link className="text-blue-700 hover:underline" to="/">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</div>
    );
};

export default SignIn;