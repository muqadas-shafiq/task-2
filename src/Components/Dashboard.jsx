import React from 'react'
import { FaChartLine } from "react-icons/fa6";
import { TiArrowForwardOutline } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { FiTool } from "react-icons/fi";


const Dashboard = () => {
  return (
    
        <div className='md:w-72 w-36 flex h-screen  flex-col items-start pl-2 pt-5  gap-8 bg-blue-500 text-white'>
            
            <div className='flex items-center '>
                <h1 className='md:text-2xl text-xl font-semibold '>Star Admin</h1>
            </div>
            <div className='flex flex-col gap-6 text-[15px] font-semibold'>
                 {/* icon1 */}
                <div className='flex flex-row items-center  gap-5'>
                    <p>
                    <FaHome className='text-xl font-bold'/>  </p>
                    <p >Dashboard</p>
                </div>
                 {/* icon2 */}
                <div className='flex flex-row items-center gap-5 '>
                <p> 
                 <IoIosMan className='text-xl font-bold'/>
                    </p>
                    <p >User</p>
                </div>
                 {/* icon3 */}
                <div className='flex flex-row items-center   gap-5'>
                <p> 
                 <FaChartLine className='text-xl font-bold'/>
                    </p>
                    <p>Analytics</p>
                </div>
                 {/* icon4 */}
                <div className='flex flex-row items-center  gap-5 '>
                    <p>
                    <FiTool className='text-xl font-bold'/>
                    </p>
                    <p >Setting</p>
                </div>
                <div>  <div className='flex flex-row items-center  bg-red-400 text-white md:px-10 px-3 p-2 text-[16px] font-bold '>
                    <p>
                    <TiArrowForwardOutline className='text-2xl font-bold'/>
                    </p>
                    <p>Log out</p>
                    </div></div>
            </div>
        </div>
    
  )
}

export default Dashboard

