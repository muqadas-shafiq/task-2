import React from "react";
import client from '../assets/client.webp';
import fire from '../assets/fire.avif';
import hk from '../assets/hk.webp';
import market from '../assets/marketing.svg';
import current from '../assets/current.svg';
import discovery from '../assets/discovery.svg';
import 'animate.css';

const images = [discovery, fire, market, hk, client, current];

const Client = () => {
  return (
    <div className="bg-white h-48 overflow-hidden flex items-center">
      <div className="marquee flex gap-8 w-max ">
        {[...images, ...images].map((img, i) => (
          <img key={i} src={img} className="h-24 w-auto" alt={`img-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Client;
