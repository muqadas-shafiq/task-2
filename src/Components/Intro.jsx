import React from 'react'
import img from '../assets/img3.webp'
import founder from '../assets/founders.avif'
import global from '../assets/global.svg'
import succes from '../assets/succes.svg'
import five from '../assets/five.svg'
import top from '../assets/Ctop.svg'

const Intro = () => {
  const icons = [
    {
      icon: global,
      p: "Top Team in the world on The dribble"
    },
    {
      icon: succes,
      p: "Top 100 global service srovider by slutch"
    },
    {
      icon: five,
      p: "5 Star rating on the Good firms like"
    },
    {
      icon: top,
      p: "Top 100% Job succes on the Upwork"
    },
  ]

  return (
    <div className='text-white mt-40 md:mt-28 '>
      {/* Intro section */}
      <div className='flex flex-col md:flex-row justify-center items-center mt-24 md:mt-14 gap-8'>
        <div className=' w-1/2'>
          <img src={img}  />
        </div>
        <div className='w-full md:w-2/3 pl-12'>
          <div className='flex flex-col items-center md:items-start gap-12'>
            <h1 className='text-3xl text-blue-400 font-sans font-medium'>WHO WE ARE</h1>
            <p className='w-[300] md:w-[600px] text-xl font-sans'>
              We are passionate creators driven by design, innovation, and code. I'm a developer dedicated to building clean, modern, and user-focused digital experiences. We are passionate creators driven by design, innovation, and code. I'm a developer dedicated to building clean, modern, and user-focused digital experiences.
            </p>
            <img src={founder} alt="Founder" className='w-[150px]' />
          </div>
        </div>
      </div>

      {/* Icons section */}
      <div className='flex flex-wrap justify-evenly items-center gap-12 mt-10'>
        {icons.map((item, index) => (
          <div key={index} className='flex flex-col items-center text-center w-[250px]  p-14 rounded-full border-2 border-white gap-2 justify-around'>
            <img src={item.icon} alt={`icon-${index}`} className='' />
            <p className='text-[18px]'>{item.p}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Intro
