import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHome = ({service}) => {
    const {_id, img, description, title } = service;
    return (
      <div>
        <div className="hero min-h-full">
          <img className='h-full w-full rounded' src={img} alt="" />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">
                 {description.slice(0, 100)+"..." }<Link className='underline text-amber-400' to={`/servicedetails/${_id}`}>read more</Link>
              </p>
              <button className="btn btn-primary"><Link to={`/servicedetails/${_id}`}>details</Link></button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceHome;