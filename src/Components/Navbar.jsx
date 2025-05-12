import React, { useState } from 'react'; 
import icon from '../assets/icon.svg';
import { FiAlignJustify } from 'react-icons/fi';
import icon1 from '../assets/discovery.svg';
import hide2 from '../assets/hide-2.webp';
import hide1 from '../assets/hide-1.avif';
import { IoIosCall } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineLaptopMac } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleToggle = () => setShowDiv(!showDiv);

  const categoryData = [
    {
      title: "Platforms",
      items: ['Wordpress', 'Shopify', 'Webflow', 'Mangento', 'Uscreen', 'Squarespace', 'WIX']
    },
    {
      title: "Designing",
      items: ['Graphinc design', 'UI/UX design', 'Digital marketing', 'SEO services', 'Marketing', 'Performances']
    },
    {
      title: "Integration",
      items: ['Make integration', 'Pipe integration', 'Zopier integration', 'API integration', 'API Development']
    },
    {
      title: "Development",
      items: ['Web development ', 'Laravel', 'App development', 'CRM', 'spp.co']
    }
  ];

  return (
    <div className="relative border-t border-b border-gray-300 max-w-full text-white">
      {/* Top Navbar */}
      <div className="flex items-center justify-between gap-2 md:gap-4 h-18 p-2">
        <div className="text-6xl">
          <img src={icon} alt="Logo" className="h-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-between items-center gap-6 text-xl text-white">
          <li className="hover:text-yellow-500 cursor-pointer">
            <button onClick={handleToggle}>
              Service
            </button>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">Projects</li>
          <li className="hover:text-yellow-500 cursor-pointer">Our Process</li>
          <li className="hover:text-yellow-500 cursor-pointer">Our Blogs</li>
          <li className="hover:text-yellow-500 cursor-pointer">Open Source</li>
        </ul>

        {/* Contact Button */}
        <div className="hidden md:flex bg-white rounded-full px-10 py-2 cursor-pointer flex-row gap-2">
  <p className="text-black font-medium pt-1">CONTACT US</p>
  <div className="bg-red-600 text-blue-500 rounded-full p-2">
    <MdOutlineLaptopMac className="text-xl" />
  </div>
</div>

        {/* Mobile Icon */}
        <div className="md:hidden text-5xl cursor-pointer" onClick={toggleMenu}>
          <FiAlignJustify />
        </div>
      </div>

      {/* Expandable Section */}
      {showDiv && (
        <div className="bg-white text-black p-4 m-4 rounded-md flex flex-wrap justify-start gap-4">
          
          <div className="bg-blue-800 rounded-md flex items-center gap-4 flex-col p-3 w-[250px]">
            <img src={hide1} />
            <p className='text-gray-100 font-medium text-[18px] w-[240px] pl-5'>
              UNLOCK UP TO +30% A HIGHER ENGAGEMENT <br /> IN SIX MONTHS WITH DETAILED UX/UI AUDIT
            </p>
            <div className="bg-white text-black rounded-full px-12 py-2 cursor-pointer flex gap-2">
              <p className='text-[15px] font-medium'>BOOK A CALL</p>
              <p className='text-2xl'><IoIosCall /></p>
            </div>
          </div>

          {/* Category Cards */}
          <div className="flex gap-4 flex-wrap">
            {categoryData.map((category, index) => (
              <div key={index} className='relative h-[470px] w-[230px] bg-white rounded-md overflow-hidden shadow-md'>
                {/* Background Image */}
                <img src={hide2} className='h-[470px] w-full object-cover'/>

                {/* Overlay Content */}
                <div className='absolute top-4 left-4'>
                  <div className='flex items-center'>
                    <img src={icon1} />
                    <p className='rounded-full p-3 border border-gray-500 hover:bg-black hover:text-white'>
                      <MdArrowOutward className='text-2xl' />
                    </p>
                  </div>
                  <h1 className='font-semibold text-2xl my-4'>{category.title}</h1>
                  <div className='text-lg font-medium flex flex-col gap-2'>
                    {category.items.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-start gap-4 bg-black text-white text-lg p-5 absolute top-full left-0 w-full shadow-md z-50">
          <li className="cursor-pointer">Service</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Our Process</li>
          <li className="cursor-pointer">Our Blogs</li>
          <li className="cursor-pointer">Open Source</li>
          <li className="bg-white text-black rounded-full px-4 py-1 mt-2 cursor-pointer">CONTACT US</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
