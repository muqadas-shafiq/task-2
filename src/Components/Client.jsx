import React from 'react'
import client from '../assets/client.webp'
import fire from '../assets/fire.avif'
import hk from '../assets/hk.webp'
import market from '../assets/marketing.svg'
import current from '../assets/current.svg'
import discovery from '../assets/discovery.svg'

const Client = () => {
  return (
    <div className="bg-white h-48 overflow-hidden group relative">
      <div className="flex gap-8 w-max animate-none group-hover:animate-slide">
        <img src={discovery} className="h-24 w-auto" />
        <img src={fire} className="h-24 w-auto" />
        <img src={market} className="h-24 w-auto" />
        <img src={hk} className="h-24 w-auto" />
        <img src={client} className="h-24 w-auto" />
        <img src={current} className="h-24 w-auto" />
      </div>
    </div>
  )
}

export default Client
