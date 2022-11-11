import React from 'react';

const Review = ({rev}) => {
    const {title, img, description ,email} = rev;
    return (
        <div>
            <div className=" mt-5">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex">
              <img className="h-12 w-12 rounded-full mr-5" src={img} alt="" />
             <div>
             <h2 className="card-title">Name : {title}</h2>
              <h2 className="">Email:{email}</h2>
             </div>
            </div>
           <div>
           <p>{description}</p>
           </div>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default Review;