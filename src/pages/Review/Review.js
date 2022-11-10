import React from 'react';

const Review = ({rev}) => {
    const {title, img, description } = rev;
    return (
        <div>
            <div className=" mt-5">
        <div className="card bg-base-100 shadow-xl">
           
          <div className="card-body">
            <div className="flex">
              <img className="h-12 w-12 rounded-full mr-5" src={img} alt="" />
              <h2 className="card-title">{title}</h2>
            </div>
            <p>{description}</p>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default Review;