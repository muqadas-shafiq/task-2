import React from 'react'
import Dashboard from './Dashboard'
import Menu from './Menu'

const Home = () => {
  return (
    <div className='flex flex-row bg-gray-200' >
      <Dashboard/>
      <Menu/>
    </div>
  )
}

export default Home