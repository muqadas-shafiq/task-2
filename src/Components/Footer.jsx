import React, { useState } from 'react';
import star from '../assets/star.svg';
import { MdOutlineAdd } from "react-icons/md";

const Footer = () => {
  const [openServices, setOpenServices] = useState(false);
  const [openCountries, setOpenCountries] = useState(false);
  const [openTechniques, setOpenTechniques] = useState(false);
  const [openIndustries, setOpenIndustries] = useState(false);

   const option = [
    { icon: star, p: '4.9', h1: 'clutch' },
    { icon: star, p: '4.9', h1: 'clutch' },
    { icon: star, p: '4.9', h1: 'clutch' },
    { icon: star, p: '4.9', h1: 'clutch' },
    { icon: star, p: '4.9', h1: 'clutch' },
    { icon: star, p: '4.9', h1: 'clutch' },
    { icon: star, p: '4.9', h1: 'clutch' },
  ];

  return (
    <div className='text-white  h-screen flex flex-col'>
 <div className='flex justify-between w-full text-xl flex-wrap gap-y-4'>
        {option.map((item, index) => (
          <div key={index} className='flex flex-row gap-2 items-center bg-blue-950 p-4 rounded-2xl'>
            <img src={item.icon} className='h-5 w-5' alt="star" />
            <p className='font-medium'>{item.p}</p>
            <p className='font-medium text-2xl'>{item.h1}</p>
          </div>
        ))}
      </div>




      {/* Dropdown 1 - Services */}
      <div
        className='flex justify-between border-y border-white mt-6 cursor-pointer text-xl font-medium py-4'
        onClick={() => setOpenServices(!openServices)}
      >
        <p>Show all services</p>
        <MdOutlineAdd
          className={`transition-transform duration-300 text-2xl ${openServices ? 'rotate-45' : ''}`}
        />
      </div>
      {openServices && (
        <div className='mt-4 text-gray-200 text-lg space-y-2 bg-gray-950'>
          <p>Web Development</p>
          <p>UI/UX Design</p>
          <p>Mobile Apps</p>
          <p>Digital Marketing</p>
        </div>
      )}

      {/* Dropdown 2 - Countries */}
      <div
        className='flex justify-between border-b border-white mt-3 cursor-pointer text-xl font-medium py-4'
        onClick={() => setOpenCountries(!openCountries)}
      >
        <p>Show all countries</p>
        <MdOutlineAdd
          className={`transition-transform duration-300 text-2xl ${openCountries ? 'rotate-45' : ''}`}
        />
      </div>
      {openCountries && (
        <div className='mt-4 text-gray-200 text-lg space-y-2 bg-gray-950'>
          <p>USA</p>
          <p>UK</p>
          <p>India</p>
          <p>Canada</p>
        </div>
      )}

      {/* Dropdown 3 - Techniques */}
      <div
        className='flex justify-between border-b border-white mt-3 cursor-pointer text-xl font-medium py-4'
        onClick={() => setOpenTechniques(!openTechniques)}
      >
        <p>Show all techniques</p>
        <MdOutlineAdd
          className={`transition-transform duration-300 text-2xl ${openTechniques ? 'rotate-45' : ''}`}
        />
      </div>
      {openTechniques && (
        <div className='mt-4 text-gray-200 text-lg space-y-2 bg-gray-950'>
          <p>React</p>
          <p>Vue</p>
          <p>Angular</p>
          <p>Svelte</p>
        </div>
      )}

      {/* Dropdown 4 - Industries */}
      <div
        className='flex justify-between border-b border-white mt-3 cursor-pointer text-xl font-medium py-4'
        onClick={() => setOpenIndustries(!openIndustries)}
      >
        <p>Show all industries</p>
        <MdOutlineAdd
          className={`transition-transform duration-300 text-2xl ${openIndustries ? 'rotate-45' : ''}`}
        />
      </div>
      {openIndustries && (
        <div className='mt-4 text-gray-200 text-lg space-y-2 bg-gray-950'>
          <p>Healthcare</p>
          <p>Finance</p>
          <p>Retail</p>
          <p>Education</p>
        </div>
      )}
    </div>
  );
};

export default Footer;
