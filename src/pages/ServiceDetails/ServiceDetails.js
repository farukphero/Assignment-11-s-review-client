import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const singleCourse = useLoaderData();

  console.log(singleCourse);
  const { _id, img, description, price, situated, title } = singleCourse;

  return (
    <div className="flex justify-start">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="w-full md:w-1/2 rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6"> {description}</p>
            <p>Price:$ {price}</p>
            <p>Situated: {situated}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
