import React from 'react';
import white from '../assets/white.avif';
import button from '../assets/button.mp4';
import { FaCaretRight } from "react-icons/fa6";
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import pic from '../assets/pic1.png'


const Service = () => {
  

  return (
    <div className="flex flex-col bg-black">
      {/* Header Section */}
      <div className="relative w-full mt-10">
        <img src={white} className="w-full object-cover" alt="White Background" />

        {/* Title */}
        <p className="absolute top-6 left-32 md:left-56 transform -translate-x-1/2 text-center text-4xl md:text-6xl font-bold text-black">
          OUR WORK
        </p>
       

        {/* Video Button */}
        <div className="absolute top-30 md:top-20 right-1/2 md:right-4 transform md:translate-x-0 translate-x-1/2 flex flex-row  items-end">
         <div className=''> <p className='w-54 text-xl font-medium'>Export bestest SOL portfolio; Web designe SEO, SMM, SPPO unscreen inovation approarch digital success stories.</p></div>
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
          </div>
          <div className="text-3xl bg-black p-6 rounded-full -ml-6 z-10">
            <FaCaretRight className="text-white" />
          </div>      
        </div>
{/* blog */}

       <div className="absolute top-30 md:top-80 left-20 transform md:translate-x-0 translate-x-1/2 flex flex-row items-center gap-12">
  {[blog1, blog2, pic, blog3].map((img, index) => (
    <div key={index} className="w-60 h-[400px] overflow-hidden relative group rounded shadow-lg">
      <img
        src={img}
        alt={`blog-${index}`}
        className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:-translate-y-10"
      />
    </div>
  ))}
</div>

      </div>

      {/* Services */}
     

         
      


      
      
    </div>
  );
};

export default Service;
