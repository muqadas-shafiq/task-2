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
        <div className="absolute bottom-12 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center  px-4 py-2 rounded-full ">
          <img src={curent}  className="p-4" />
          <button className="text-black font-semibold text-sm sm:text-base bg-yellow-500 rounded-full px-4 py-2">
            REQUEST PROPOSAL
          </button>
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
