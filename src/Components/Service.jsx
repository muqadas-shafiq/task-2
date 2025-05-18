import React from 'react';
import white from '../assets/white.avif';
import button from '../assets/button.mp4';
import { FaCaretRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import discovery from '../assets/discovery.svg';
import { FaArrowRight } from "react-icons/fa";

const Service = () => {
  const div = [
    {
      img: discovery,
      icon: <MdArrowOutward />,
      h1: "Discovery",
      p: "We begin our journey with the discovery phase — laying the foundation for a creative and efficient process that follows."
    },
    {
      img: discovery,
      icon: <MdArrowOutward />,
      h1: "Strategy",
      p: "A strategic approach helps us map out the direction and goals for your project, ensuring each step is purposeful and impactful."
    },
    {
      img: discovery,
      icon: <MdArrowOutward />,
      h1: "Design",
      p: "We craft visually compelling and user-focused designs to boost engagement and deliver memorable digital experiences."
    },
    {
      img: discovery,
      icon: <MdArrowOutward />,
      h1: "Development",
      p: "Responsive, scalable, and high-performance digital products tailored precisely to your business needs."
    },
  ];

  return (
    <div className="flex flex-col bg-black">
      {/* Header Section */}
      <div className="relative w-full mt-10">
        <img src={white} className="w-full object-cover" alt="White Background" />

        {/* Title */}
        <p className="absolute top-6 left-32 md:left-64 transform -translate-x-1/2 text-center text-4xl md:text-6xl font-bold text-black">
          OUR SERVICES
        </p>

        {/* Video Button */}
        <div className="absolute top-30 md:top-32 right-1/2 md:right-10 transform md:translate-x-0 translate-x-1/2 flex items-center">
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
      </div>

      {/* Services */}
      <div className="absolute mt-60 md:mt-72 md:bg-white bg-black w-full px-4 md:px-12 py-4 md:py-16  grid grid-cols-1 sm:grid-cols-2 gap-10">
        {div.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            {/* Image*/}
            <div className="flex items-center gap-4 mb-4">
              <img src={item.img} alt={`service-${index}`} className="w-14 h-14 object-contain" />
              <span className="rounded-full p-3 border border-gray-400 hover:bg-black hover:text-white transition duration-300 text-xl">
                {item.icon}
              </span>
            </div>

            {/* Title and Text */}
            <h1 className="text-xl font-semibold mb-1">{item.h1}</h1>
            <p className="text-gray-700 ">{item.p}</p>
          </div>
        ))}
      

<div className="flex items-center">
  <button className="bg-blue-700 text-white font-semibold text-sm sm:text-base rounded-full px-4 py-2 whitespace-nowrap flex items-center gap-2">
    <span>Read more</span>
    <FaArrowRight className="w-4 h-4" />
  </button>
</div>

      </div>
      
    </div>
  );
};

export default Service;
