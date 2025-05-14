import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Intro from './Components/Intro'
import Service from './Components/Service'
import Chose from './Components/Chose'
import Discuss from './Components/Discuss'
import Benefit from './Components/Benefit'





const App = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Header/>
      <Intro/>
      <Service/>
      <Chose/>
      <Discuss/>
      <Benefit/>
    
      
     
    </div>
  )
}

export default App