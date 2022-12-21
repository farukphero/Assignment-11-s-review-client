import React from "react";
import './Banner.css'

const Banner = () => {
  return ( 
   <div className="relative">
     <div className="carousel w-full">
      <div className="relative w-full  ">
        <div className="absolute  bg-black h-full w-full opacity-20">

        </div>
        <img src="https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=" alt="" className="w-full h-screen" />
      </div>
      <div className="absolute top-64 left-0 md:left-28 w-full md:w-5/6 text-white">
        <h1 className="text-6xl lg:text-8xl text-center font-semibold">Let's Make Your Best Trip Ever</h1>
        <p className="text-2xl text-center mt-6 px-2">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from me.</p>
      </div>
    <div className="absolute top-0 bottom-0 w-full md:p-5">
   </div>
   </div>
   </div>
   
  );
};

export default Banner;
