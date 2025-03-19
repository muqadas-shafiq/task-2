import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { FaDollarSign } from "react-icons/fa";


const Menu = () => {
    const menu =[
        {
          icon1 : <FaUserFriends className='text-blue-500 text-4xl'/>,
          p : "Total User",
          h2 : "$321,54",
          p1:"+ 12% this month"
        },
        {
          icon1 : < FaDollarSign  className='text-green-500 text-4xl' />,
          p : "Monthly Revenue",
          h2 : "$656,87",
          p1:"+85 last month"
        },
        {
          icon1 : <ImCart className='text-red-400 text-4xl'/>,
          p : "New Orders",
          h2 : "$987,34",
          p1:"+ *% this week"
        },
        
    ]
  return (
    <div className='p-5 md:p-10 max-w-screen'>
        <div  >
            <h1 className='text-3xl font-bold '>
                Dashboard
            </h1>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-1 mt-4 md:gap-28 gap-5'>
        
        {menu.map((item,index)=>(
          <div key={index} className='bg-white rounded-lg flex flex-col min-h-40 p-4 pt-8 w-44 md:w-72 justify-between ' >
            <div className='px-4 justify-between flex flex-row mt-3'>
              <p>{item.icon1}</p>
              <div className='flex flex-col' > 
              <div className='text-[17px] text-gray-500 font-medium'>{item.p}</div>
              <div className='text-2xl font-bold'>{item.h2}</div>
            </div>
            </div>
           
            <div className='flex flex-row mt-4 items-center gap-2'>
              <div className='text-[15px] text-gray-600 font-medium'>{item.p1}</div>
            </div>
    
          </div>
        ))}
      </div>
    </div>

  )
}

export default Menu