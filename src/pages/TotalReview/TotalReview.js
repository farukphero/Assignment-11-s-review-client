import React from "react";

const TotalReview = ({ review }) => {
  const { _id, title, img, description, image, name } = review;
  return (
    <div className=" mt-5">
      <div className="card bg-base-100 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="card-body">
            <div className="flex">
              <img className="h-12 w-12 rounded-full mr-5" src={img} alt="" />
              <h2 className="card-title">{title}</h2>
            </div>
            <p>{description}</p>
          </div>
          <div>
           <div className="block">
           <h1 className="text-2xl font-semibold">{name}</h1>
          
              <img className="h-52 w-full rounded" src={image} alt="" />
             
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalReview;
