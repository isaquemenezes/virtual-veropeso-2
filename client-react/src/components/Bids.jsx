import React from 'react';
import { bids } from '../data/bids.js';

const Bids = () => {
  
  return (

    <div className='max-w-[1540px] m-auto px-4 py-12'>

      <h1 className='text-orange-600 font-bold text-4xl text-center'>
       - Top Bids Menu - 
      </h1>
      <p className='text-black-600 font-bold text-2xl text-center'> Últimas Receitas Lançadas </p>

      {/* bids */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>

        {
          bids.map((item, index) => (
            <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center' >
              <h2 className='font-bold sm:text-xl'>{item.name}</h2>
              <img src={item.image} alt={item.name} className='rounded-lg w-12' />
            </div>
          ))
        }
        
      </div>

    </div>

  );
};

export default Bids;