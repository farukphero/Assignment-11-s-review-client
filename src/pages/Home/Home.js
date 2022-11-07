import React from "react";
import image from '../../images/bp-1.jpg.webp'
import Header from "../../shared/Header/Header";
import './Home.css'

const Home = () => {
  return (
   <div className="relative">
     <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full img-gradient">
        <img src={image} alt="" className="w-full h-screen" />
      </div>
      <div className="absolute top-64 left-0 md:left-28 w-full md:w-5/6 text-white">
        <h1 className="text-6xl lg:text-8xl text-center font-semibold">Let's Make Your Best Trip Ever</h1>
        <p className="text-2xl text-center mt-6 ">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
        <button className="bg-base-100 px-6 py-4 rounded text-black mt-10">Button</button>
      </div>
    <div className="absolute top-0 bottom-0 w-full md:p-5">
   <Header></Header>
   </div>
   </div>
   </div>
   
  );
};

export default Home;
