import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import phone from '../assets/phone.jpg'
import phone2 from '../assets/phone2.jpg'

const Flow = () => {
  return (
    <div className='text-white flex flex-col m-6 mx-8 gap-10'>
<div className="flex flex-col md:flex-row  items-center gap-24 w-1/3 md:w-1/2 justify-between">
  
<div className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-full  cursor-pointer ">
  <span className="text-sm font-semibold text-gray-800">ARTICLES</span>
  <span className="p-2 bg-blue-800 rounded-full text-white flex items-center justify-center">
    <IoBookOutline className="text-base" />
  </span>
</div>

  <p className="text-3xl font-semibold">
    The Halo Lab is a blog treasure trove of our best technical tricks and expert knowledge. Here you will discover all the valuable secrets and trends of the IT industry.
  </p>
</div>
{/* div1 */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Card 1 */}
  <div className="h-96 w-72 bg-white flex flex-col justify-start rounded-2xl shadow">
    <img src={phone} className="h-64 w-72 rounded-t-2xl object-cover" />
    <p className="text-blue-600 p-2 font-medium">Web-flow and WordPress: In-depth comparison guide</p>
    <p className="text-black text-[18px] pl-2">Whaja Chaudhary · Jan 13, 2015</p>
  </div>

  {/* Card 2 */}
  <div className="h-96 w-72 bg-white flex flex-col justify-start rounded-2xl shadow">
    <img src={phone2} className="h-64 w-72 rounded-t-2xl object-cover" />
    <p className="text-blue-600 p-2 font-medium">Web-flow and WordPress: In-depth comparison guide</p>
    <p className="text-black text-[18px] pl-2">Whaja Chaudhary · Jan 13, 2015</p>
  </div>

  {/* Card 3 */}
  <div className="h-96 w-72 bg-white flex flex-col justify-start rounded-2xl shadow">
    <img src={phone} className="h-64 w-72 rounded-t-2xl object-cover" />
    <p className="text-blue-600 p-2 font-medium">Web-flow and WordPress: In-depth comparison guide</p>
    <p className="text-black text-[18px] pl-2">Whaja Chaudhary · Jan 13, 2015</p>
  </div>
</div>



        
    </div>
  )
}

export default Flow