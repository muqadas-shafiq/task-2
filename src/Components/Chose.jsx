import React from 'react'
import { RiGlobalFill } from "react-icons/ri";
import { SiHiveBlockchain } from "react-icons/si";
import { HiDatabase } from "react-icons/hi";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { HiMap } from "react-icons/hi";
import { GrDocumentUser } from "react-icons/gr";

const Chose = () => {
    const user=[
        {
            icon:<RiGlobalFill/>,
            h1:"Modren Designe",
            p:"modern design is a dynamic and ever. evolving approach to creating space modern design is a dynamic and ever. evolving approach to creating space"
        },
        {
            icon:<SiHiveBlockchain/>,
            h1:"Affordable cost",
            p:"modern design is a dynamic and ever. evolving approach to creating space modern design is a dynamic and ever. evolving approach to creating space"
        },
        {
            icon:<HiDatabase/>,
            h1:"Marketing strategy",
            p:"modern design is a dynamic and ever. evolving approach to creating space modern design is a dynamic and ever. evolving approach to creating space"
        },
        {
            icon:<FaArrowUpFromBracket/>,
            h1:"Business growth",
            p:"modern design is a dynamic and ever. evolving approach to creating space modern design is a dynamic and ever. evolving approach to creating space"
        },
        {
            icon:<HiMap />,
            h1:"Creative designe",
            p:"modern design is a dynamic and ever. evolving approach to creating space modern design is a dynamic and ever. evolving approach to creating space"
        },
        {
            icon:<GrDocumentUser/>,
            h1:"24x7 User support",
            p:"modern design is a dynamic and ever. evolving approach to creating space modern design is a dynamic and ever. evolving approach to creating space"
        },
    ]
  return (
    <div className='text-white flex flex-col items-center justify-center mt-10'>
        <div className='flex flex-col items-center gap-4 '>
             <h1 className='text-3xl text-blue-400 font-sans font-medium'>WHY CHOOSE US</h1>
             <p className='font-mediul'>Chose best IT SOL for unparallel experties, inovation and customer satisfaction contact us today.</p>
        </div>
        {/* map */}
        
        <div className='grid grid-cols-1  md:grid-cols-3 gap-6 mt-10 px-4'>
  {user.map((items, index) => (
    <div key={index} className=" p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
      <div className="text-5xl text-blue-400 mb-4">{items.icon}</div>
      <h2 className="text-2xl font-semibold mb-2 font-serif">{items.h1}</h2>
      <p className="text-sm text-gray-300 w-80">{items.p}</p>
    </div>
  ))}
</div>
    </div>
  )
}

export default Chose