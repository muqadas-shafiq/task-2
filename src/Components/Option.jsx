import React from 'react'
import mail from '../assets/mail.jpg'
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MdOutlineAdd } from "react-icons/md";
import { useState } from "react";
import whatsapp from '../assets/whatsapp.svg'


const Option = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='text-white flex md:flex-row flex-col py-12 h-[70vh]'>

        <div className='grid grid-rows-3 gap-4  w-1/4 h-[60vh]'>
          <div className='flex flex-col  gap-44 '>
            <p className='text-2xl font-medium '>Subscribe to our newsletter to stay in touch with the latest.</p>
            <button className='flex flex-row justify-between rounded-4xl border-2 border-white p-2  '>
                <input type="email" placeholder='Your Email adress' className='text-xl' />
            <img src={mail} className='h-8 w-8 rounded-full' />
            </button>
        </div>
        <div className='flex gap-4 flex-col text-gray-300'>
          <p className='text-xl '>FOLLOW US HERE:</p>
       <div className="flex flex-row gap-4">
  <p>
    <FaInstagram className="text-4xl p-1 rounded-full border-2 border-white " />
  </p>
  <p>
    <FaGithubAlt className="text-4xl p-1 rounded-full border-2 border-white " />
  </p>
  <p>
    <FaTiktok className="text-4xl p-1 rounded-full border-2 border-white " />
  </p>
  <p>
    <FaTwitter className="text-4xl p-1 rounded-full border-2 border-white " />
  </p>
  <p>
    <FaFacebookF className="text-4xl p-1 rounded-full border-2 border-white " />
  </p>
  <p>
    <TiSocialLinkedin className="text-4xl p-1 rounded-full border-2 border-white " />
  </p>
</div>
  </div>
 </div>


       <div className="text-xl font-semibold w-1/3  flex flex-col items-center">
      <div>
        <ul className="space-y-4">
          <div >
            <div
              className="flex flex-row gap-2 items-start cursor-pointer "
              onClick={() => setOpen(!open)}
            >
              <li>Our Services</li>
              <MdOutlineAdd className={`font-bold text-2xl transition-transform duration-300  ${
                  open }`}
              />
            </div>

              {open && (
              <div className="ml-4 mt-2 space-y-2  text-gray-300 text-xl">
                <p>Development</p>
                <p>Design</p>
                <p>Discovery</p>
                <p>Marketing</p>
              </div>
            )}
          </div>

          <li>Projects</li>
          <li>Hire a team</li>
          <li>Open source</li>
          <li>Referal program</li>
          <li>Contact</li>
          <li>Blogs</li>
        </ul>
      </div>
    </div>


      
<div className='flex flex-col gap-5 items-start  mr-10 '>
  <p className=' text-gray-300 font-serif'>DROP US A LINE</p>
  <p className='text-xl font-medium '>Inquiry@Halo-lab.com</p>
  <p className=' text-gray-300 font-serif'>CALL US</p>
  <div className='flex flex-row'>
    <p><img src={whatsapp} /></p>
    <p className='text-xl font-medium '>+092458319</p>
  </div>
</div>
        </div>
    
  )
}

export default Option