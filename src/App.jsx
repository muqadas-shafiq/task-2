import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Intro from './Components/Intro'
import Service from './Components/Service'


const App = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Header/>
      <Intro/>
      <Service/>
    </div>
  )
}

export default App