import React from 'react';
import header from '../assets/header.webp';
import video from '../assets/video1.mp4';
import curent from '../assets/current.svg';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row max-h-screen gap-4 pt-3">
      
      {/* Image + Text Section */}
      <div className="relative h-[80vh] md:h-screen w-full md:w-2/3">
        <img src={header} className="w-full h-full object-cover rounded-md" alt="Header background" />

        {/* Main Text */}
        <p className="absolute inset-0 flex items-center justify-center text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center px-4 leading-tight">
          LET'S BUILD THE <br className="hidden sm:block" /> NEXT BIG THING
        </p>

        {/* Button Section */}
        <div className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full px-4 border-t-1 border-white pt-5">
  <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-2 md:gap-8">

    {/* Left: Text Section */}
    <div className="flex items-center rounded-full px-3 py-2 ">
      <img src={curent} alt="icon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
      <button className="bg-yellow-500 text-black font-semibold text-sm sm:text-base rounded-full px-4 py-2 whitespace-nowrap">
        REQUEST PROPOSAL
      </button>
    </div>

    {/* Right: Image + Button */}
    <div className="flex items-center  text-white text-base md:text-2xl font-medium">
      <p>Of Design-Driven product developer</p>
      <h1 className=" text-2xl md:text-4xl font-semibold">10Y</h1>
    </div>

  </div>
</div>



      </div>

      {/* Video Section */}
      <div className="w-full md:w-1/3 h-[50vh] md:h-screen">
        <video
          className="w-full h-full object-cover rounded-md"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
};

export default Header;
