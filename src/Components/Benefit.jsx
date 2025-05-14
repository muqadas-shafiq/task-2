import React from 'react';
import icon from '../assets/icon1.svg';
import hide from '../assets/hide-2.webp';
import benefit from '../assets/benefit.webp'

const Benefit = () => {
  return (
    
      <div className="grid grid-col-1 md:grid-cols-4  gap-6  text-black p-4 min-h-screen mt-10">
        
        
        {/*Container */}
        <div className="relative h-auto flex-row flex ">
          <img src={hide}  className=" h-[600px] rounded-md" />

        
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-start p-4  rounded-md ml-5">
            <div className="flex flex-col items-start justify-center gap-2">
              <img src={icon}  className="w-10 h-10" />
              <p className="text-2xl font-medium w-44">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, accusantium eosdoloremque sunt nemo totam impedit vel fuga ipsum! nemo totam impedit vel fuga ipsum
              </p>
            </div>
          </div>
        </div>
        {/* div1 */}
     <div className="relative h-[450px] flex-row flex ">
          <img src={benefit}  className=" h-auto rounded-md" />


          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start p-4  rounded-md flex items-start ">
            <div className="text-white flex flex-col  gap-6">

             <div className='border-b-2 border-gray-200 w-60 pb-10 '>
               <h1 className=' font-bold text-5xl'>$530M</h1>
             </div>
              <h1 className='text-3xl font-semibold'>Total funding</h1>
              <p className="text-xl text-gray-200  ">
                hard work and dedication to the helo lab team help our client  secure new successfull inestment deals.
              </p>
            </div>
          </div>
        </div>
        {/* div2 */}
        <div className="relative h-[450px] flex-row flex ">
          <img src={benefit}  className=" h-auto rounded-md" />

          {/* Absolute Centered Content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start p-4  rounded-md flex items-start ">
            <div className="text-white flex flex-col  gap-6">

             <div className='border-b-2 border-gray-200 w-60 pb-10 '>
               <h1 className=' font-bold text-5xl'>$530+</h1>
             </div>
              <h1 className='text-3xl font-semibold'>Complicated projects</h1>
              <p className="text-xl text-gray-200  ">
                hard work and dedication to the helo lab team help our client  secure new successfull inestment deals.
              </p>
            </div>
          </div>
        </div>
        {/* div3 */}
        <div className="relative h-[450px] flex-row flex ">
          <img src={benefit}  className=" h-auto rounded-md" />

          {/* Absolute Centered Content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start p-4  rounded-md flex items-start ">
            <div className="text-white flex flex-col  gap-6">

             <div className='border-b-2 border-gray-200 w-60 pb-10 '>
               <h1 className=' font-bold text-5xl'>$530-</h1>
             </div>
              <h1 className='text-3xl font-semibold'>Total funding</h1>
              <p className="text-xl text-gray-200  ">
                hard work and dedication to the helo lab team help our client  secure new successfull inestment deals.
              </p>
            </div>
          </div>
        </div>
   



      </div>
    
  );
};

export default Benefit;
