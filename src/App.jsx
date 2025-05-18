import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Intro from './Components/Intro'
import Service from './Components/Service'
import Chose from './Components/Chose'
import Discuss from './Components/Discuss'
import Benefit from './Components/Benefit'
import Founder from './Components/Founder'
import Flow from './Components/Flow'
import Option from './Components/Option'
import Footer from './Components/Footer'
import Work from './Components/Work'
import Client from './Components/Client'



const App = () => {
  return (
    <div className='bg-black p-5'>
      <Navbar/>
      <Header/>
      <Intro/>
      <Service/>
      <Chose/>
      <Discuss/>
      <Founder/>
      <Work/>
      <Flow/>
      <Benefit/>
      <Client/>
      <Discuss/>
      <Option/>
      <Footer/>
    
      
     
    </div>
  )
}

export default App