import React from 'react'
import man from '../assets/man.avif'
import slider from '../assets/slider.webp'
import star from '../assets/star.svg'
import man1 from '../assets/man1.avif'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Founder = () => {
  return (
    <div className='text-white'>
        <div className="grid grid-col-1 md:grid-cols-4  gap-6  text-black p-4 min-h-screen mt-10">
                
                
                {/*Container */}
                <div className="relative h-auto flex-row flex ">
                  <img src={man}  className=" h-[500px] rounded-md" />
        
                
                  <div className="absolute md:top-96 top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-start p-4  rounded-md ml-5">
                    <div className="text-white flex flex-col items-start justify-center gap-2">
                    <p className='text-6xl font-bold'>4.5</p>
                      <p className="text-2xl  w-44">
                        Clutch average based on 80+. Reviews all chances yoy will be impressed too.
                      </p>
                    </div>
                    <div className='text-white flex flex-row mt-5 gap-5'>
                         <p className=' border-1 border-white rounded-full p-2 hover:text-black hover:bg-white text-2xl'><IoIosArrowBack /></p>
                          <p className=' border-1 border-white rounded-full p-2 hover:text-black hover:bg-white text-2xl'><IoIosArrowBack /></p>                      
                    </div>
                  </div>
                </div>
                {/* div1 */}
             <div className="relative h-[500px] flex-row flex ">
                  <img src={slider}  className=" h-auto rounded-md" />
        
        
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start p-4  rounded-md flex items-start ">
                    <div className="text-white flex flex-col  gap-6">
        
                     <div className='border-b-2 border-gray-200 w-60 pb-4 flex flex-row '>
                       <h1 className=' font-bold text-4xl'>4.5</h1>
                       <p className='flex flex-row w-4 h-4 items-center mt-4 gap-1'>
                         <img src={star} />
                         <img src={star} />
                         <img src={star} />
                         <img src={star} />
                         <img src={star} />
                         <img src={star} />
   
                       </p>
                     </div>
                      <p className="text-xl text-gray-200  ">
                    The client has learnt to trust Halo lab , thanks to thier significant knowledge in UI/UX designe. The has provide valueable feedback by always being readily available for communication .
                      </p>
                      <div>
                        {/* bottom */}
                      <div className='flex flex-row items-center gap-x-4'>
  <div className=''>
    <img src={man1} className='w-16 h-16 rounded-full' />
  </div>
  <div>
    <p className='font-semibold text-xl'>Atif Hussain</p>
    <p className=' text-gray-300'>Co-Founder at Kinetik</p>
  </div>
</div>


                    </div>
                    </div>
                    
                  </div>
                </div>
                {/* div2 */}
                           <div className="relative h-[500px] flex-row flex ">
                  <img src={slider}  className=" h-auto rounded-md" />
        
        
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start p-4  rounded-md flex items-start ">
                    <div className="text-white flex flex-col  gap-6">
        
                     <div className='border-b-2 border-gray-200 w-60 pb-4 flex flex-row '>
                       <h1 className=' font-bold text-4xl'>4.5</h1>
                       <p className='flex flex-row w-4 h-4 items-center mt-4 gap-1'>
                         <img src={star} />
                         <img src={star} />
                         <img src={star} />
                         <img src={star} />
                         <img src={star} />
                         <img src={star} />
   
                       </p>
                     </div>
                      <p className="text-xl text-gray-200  ">
                    The client has learnt to trust Halo lab , thanks to thier significant knowledge in UI/UX designe. The has provide valueable feedback by always being readily available for communication .
                      </p>
                      <div>
                        {/* bottom */}
                      <div className='flex flex-row items-center gap-x-4'>
  <div className=''>
    <img src={man1} className='w-16 h-16 rounded-full' />
  </div>
  <div>
    <p className='font-semibold text-xl'>Atif Hussain</p>
    <p className=' text-gray-300'>Co-Founder at Kinetik</p>
  </div>
</div>


                    </div>
                    </div>
                    
                  </div>
                </div>
                  
                {/* div3 */}
             
                        <div className="relative h-[500px] flex-row flex ">
                  <img src={slider}  className=" h-auto rounded-md" />
        
        
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start p-4  rounded-md flex items-start ">
                    <div className="text-white flex flex-col  gap-6">
        
                     <div className='border-b-2 border-gray-200 w-60 pb-4 flex flex-row '>
                       <h1 className=' font-bold text-4xl'>4.5</h1>
                       <p className='flex flex-row w-4 h-4 items-center mt-4 gap-1'>
                         <img src={star} />
                         <img src={star} />
                         <img src={star} />
                         <img src={star} />
                         <img src={star} />
                         <img src={star} />
   
                       </p>
                     </div>
                      <p className="text-xl text-gray-200  ">
                    The client has learnt to trust Halo lab , thanks to thier significant knowledge in UI/UX designe. The has provide valueable feedback by always being readily available for communication .
                      </p>
                      <div>
                        {/* bottom */}
                      <div className='flex flex-row items-center gap-x-4'>
  <div className=''>
    <img src={man1} className='w-16 h-16 rounded-full' />
  </div>
  <div>
    <p className='font-semibold text-xl'>Atif Hussain</p>
    <p className=' text-gray-300'>Co-Founder at Kinetik</p>
  </div>
</div>


                    </div>
                    </div>
                    
                  </div>
                </div>
           
        
        
        
              </div>
    </div>
  )
}

export default Founder