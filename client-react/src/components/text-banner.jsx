import React from 'react'
import Banner from "../images/banner.jpeg"

const TextBanner = () => {
  return ( 
    <div className='max-w-[1540px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>

            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Conheça 
                  <span className='text-orange-500'>Ver </span>
                </h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> 
                  <span className='text-orange-500'> o Peso</span> 
                </h1>
            </div>
            
            <img className='w-full max-h-[500px] object-cover' src={ Banner } alt="/" />
        
        </div>
    </div>
  )
}

export default TextBanner;