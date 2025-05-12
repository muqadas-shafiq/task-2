import React from 'react';
import white from '../assets/white.avif';
import button from '../assets/button.mp4';
import { FaCaretRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import discovery from '../assets/discovery.svg';

const Service = () => {
  const div = [
    {
      img: discovery,
      icon: <MdArrowOutward />,
      h1: "Discovery",
      p: "to a solid foundation to create a creative  process that follows. We begin our  to create a creative  process that follows. We begin our journey with the discovery phase."
    },
    {
      img: discovery,
      icon: <MdArrowOutward />,
      h1: "Strategy",
      p: "to a solid foundation to create a creative  process that follows. We begin our journey with the discoverys that follows. We begin our journey with the discovery phase"
    },
    {
      img: discovery,
      icon: <MdArrowOutward />,
      h1: "Design",
      p: "Creating visually stunning and user-friendly designs to ensure strong engagement to a solid foundation to create a creative  process that follows."
    },
    {
      img: discovery,
      icon: <MdArrowOutward />,
      h1: "Development",
      p: "Building responsive, scalable, and high-performing digital products for your needs. to a solid foundation to create a creative  process that follows. "
    },
  ];

  return (
    <div className="flex flex-col bg-black">
      {/* Image Section */}
      <div className="relative w-full mt-10">
        <img src={white}  className="w-full object-cover" />

        {/* Title */}
        <p className="absolute top-12 md:top-12 left-60 transform -translate-x-1/2 text-center text-6xl md:text-5xl font-bold text-black">
          OUR SERVICES
        </p>

        {/* Video + Icon */}
        <div className="absolute top-52 md:top-32 right-48 md:right-10 flex flex-row items-center">
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

    {/* map */}
      <div className="absolute md:bg-white bg-black w-full px-12 md:px-12  grid grid-cols-1 md:grid-cols-2 gap-8 mt-[385px] md:mt-80 mb-10 md:mb-0">
        {div.map((item, index) => (
          <div key={index} className=" h-54 bg-gray-100 p-6 rounded-lg flex items-start  shadow hover:shadow-lg transition-shadow duration-300 ">
            <img src={item.img} alt={`service-${index}`} className="w-14 h-14 object-contain" />
            <span className="rounded-full p-5 border border-gray-400 hover:bg-black hover:text-white transition duration-300">
              {item.icon}
            </span>
            <div className="ml-4">
              <h1 className="text-2xl font-semibold mb-1">{item.h1}</h1>
              <p className="text-gray-700 text-base">{item.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
