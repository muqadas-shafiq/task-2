import React from 'react';
import header from '../assets/header.webp';
import video from '../assets/video1.mp4';
import curent from '../assets/current.svg'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row max-h-screen gap-4 pt-3">
      
    
      <div className="relative h-screen md:w-2/3">
        <img src={header} className="w-full h-full object-cover" />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-8xl font-bold text-center w-full leading-tight">
          LET'S BUILD THE <br /> NEXT BIG THING      
        </p>
<div className="absolute top-[250px] md:top-[570px] left-[210px] md:left-[170px] transform -translate-x-1/2 -translate-y-1/2 text-black  text-xl text-center flex">
          <p> <img src={curent} className='mt-2'/></p>
          <button className=" text-black font-semibold rounded-full px-4 py-1 mt-2 cursor-pointer bg-yellow-500"> REQUEST PROPOAL</button>
        </div>
       
      </div>

  
      <div className="md:w-1/3 w-full h-screen rounded-full">
        <video
          className="w-full h-full object-cover"
          src={video}
          autoPlay  muted loop  playsInline
        />
      </div>
      
    </div>
  );
};

export default Header;
