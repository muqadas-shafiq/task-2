import React from 'react'
import white from '../assets/white.avif';
import button from '../assets/button.mp4';
import { FaArrowRight } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa6";
import top from '../assets/Ctop.svg'
const Work = () => {
  return (
       <div className="flex flex-col bg-black text-red-800">
          {/* Header Section */}
          <div className="relative w-full mt-10">
            <img src={white} className="w-full object-cover" alt="White Background" />
    
            {/* Title */}
            <p className="absolute top-6 left-32 md:left-80 transform -translate-x-1/2 text-center text-4xl md:text-6xl font-bold text-black">
              OUR SERVICES
            </p>
    
            {/* Video Button */}
            <div className="absolute top-30 md:top-32 right-1/2 md:right-10 transform md:translate-x-0 translate-x-1/2 flex items-center">
            <div>
                <p className='mr-2 md:mr-10 font-medium '>Explore bestest SOl protfolio Web <br /> designe , web flow , SMM , SPP Unscreen <br /> inovation approach. Digital success stories.</p>
            </div>
              <div className="relative group w-20 h-20 rounded-full overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={button}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full" />
                <div className='flex '>
                 <div className=' background-position  center top
    transition  background-position 3s ease-in-out
    overflow  hidden background-position:center bottom
'>
                   <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                 </div>
                 <div className=' background-position  center top
    transition  background-position 3s ease-in-out
    overflow  hidden
background-position:center bottom'>
                   <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                  <img src={top} />
                 </div>
                </div>
              </div>
              <div className="text-3xl bg-black p-6 rounded-full -ml-6 z-10">
                <FaCaretRight className="text-white" />
              </div>
            </div>
          </div>
    
          {/* Services Grid */}
          <div className="absolute mt-60 md:mt-72 md:bg-white bg-black w-full px-4 md:px-12 py-4 md:py-16  grid grid-cols-1 sm:grid-cols-2 gap-10">
            
              </div>
        
          
    
    <div className="flex items-center">
      <button className="bg-blue-700 text-white font-semibold text-sm sm:text-base rounded-full px-4 py-2 whitespace-nowrap flex items-center gap-2">
        <span>Read more</span>
        <FaArrowRight className="w-4 h-4" />
      </button>
    </div>
    
          </div>
          
        
  )
}

export default Work