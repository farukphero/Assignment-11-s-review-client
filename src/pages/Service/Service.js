import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, img, description, title } = service;
    return (
      <div>
        <div className="hero min-h-full">
          <img src={img} alt="" />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">
                 {description.slice(0, 100)}
              </p>
              <button className="btn btn-primary"><Link to={`/servicedetails/${_id}`}>more</Link></button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Service;