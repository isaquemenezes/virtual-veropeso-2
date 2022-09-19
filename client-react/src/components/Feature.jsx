import React from 'react';
import Virtual from '../images/sara-kurig-A2BIY-TUjuA-unsplash.jpg'

const FeatureCards = () => {
  return (

    <div className='max-w-[1540px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>

      {/* Features One*/}
      <div className='rounded-xl relative hover:scale-105 duration-300'>

       
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>

          <p className='font-bold text-2xl px-2 pt-4'>
            Monetize suas Receitas
          </p>

          <p className='px-2'>
            Ganhe dinheiro vendendo deliciosas receitas da culinária paraense
          </p>
          <button 
            className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Saiba +
          </button>
        </div>
        
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>

      {/* Features Two */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>

      
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>
            Chef Especialista
          </p>
          <p className='px-2'>
            Transforme sua casa em um restaurante com um Chef Especialista
          </p>
          <button 
            className='border-white bg-white text-black mx-2 absolute bottom-4'>
              Saiba +
            </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>

      {/* Features Three */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>

        
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>
            Tour Virtual
          </p>
          <p className='px-2'>
            Conheça um pouco da cultura paraense sem sair de casa
          </p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Explorar +
          </button>
        </div>

        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Virtual}
          alt='/'
        />
      </div>
      
    </div>
  );
};

export default FeatureCards;
