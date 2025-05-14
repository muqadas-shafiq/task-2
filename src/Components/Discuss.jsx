import React from 'react';
import { IoCall } from "react-icons/io5";
import discus from '../assets/discus.webp';

const Discuss = () => {
  return (
    <div className="relative w-full h-screen text-white bg-blue-950 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img
        src={discus}  className=" object-cover w-[370px] md:w-1/2"
      />

      {/* other content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-gray-900 ">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Ready to discuss our project with us.</h1>
        <p className=" text-xl max-w-xl mb-6">
          Let's talk about how to create a craft that not only looks great but drives real growth for your project.
        </p>
            <div className='flex flex-row bg-blue-950 rounded-full py-2 px-5 text-white items-center gap-2'>
              <p className='font-semibold'>BOOK A CALL</p>
              <p className='border-1 border-white rounded-full p-1'><IoCall/></p>
            </div>
      </div>
    </div>
  );
};

export default Discuss;
