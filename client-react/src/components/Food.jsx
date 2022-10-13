import React, { useState } from 'react';
import { data } from '../data/data.js';
import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';
import { MdOutlineStarHalf } from 'react-icons/md';

const Food = () => {
  
  const [foods, setFoods] = useState(data);

  //   Filtrar Tipos /massas/carne
  const filterType = (category) => {

    setFoods(

      data.filter((item) => {
        return item.category === category;
      })

    );

  };

  // Filtrar por id  const filterTypeId = (id) => { setFoods( data.filter((item) => { return item.id === id; }) ); };
  

  return (
    <div className='max-w-[1540px] m-auto px-4 py-12'>

      <h1 className='text-orange-600 font-bold text-4xl text-center'> Pratos do Ver O Peso</h1>

      <div className='flex flex-col lg:flex-row justify-between'>

        {/* Filtrar Tipo */}
        <div>

          <p className='font-bold text-gray-700'>Filtrar Por</p>
          <div className='flex justfiy-between flex-wrap'>

            <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Todos
            </button>

            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Massas
            </button>

            <button
              onClick={() => filterType('carne')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Carnes
            </button>

            <button
              onClick={() => filterType('salada')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Saladas
            </button>
          </div>
        </div>
        
               
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>

        {
          foods.map((item, index) => (
            <Link to={`/food_single/${item.id}`}  className='cursor-pointer'> 
           
              <div  
                className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className='w-full h-[200px] object-cover rounded-t-lg' 
                />
                 
                <div className='absolute flex justify-start  px-2 py-4'>
                  <img src={item.img_user} alt="" className='w-12 sm:h-[50px] rounded-lg' />
                  
                </div>
                <div  className='realtive flex flex-row mt-3.5 px-16  '>
           
                  <p className='font-bold uppercase tracking-wider'> {item.name} <br /> </p> 
                
                </div>
                <div className='relative mt-8 flex flex-col px-2  '>                  
                  <p className='font-semibold'> Barraca: <span className='text-orange-600'> {item.feirante} </span> </p> 
                 
                </div>

                <div className='relative mt-2 flex justify-between px-2 py-4 '>                  
                  <p className='font-semibold '> 
                    Preço Médio:                  
                  </p> 
                  <p> 
                  
                    <span className='bg-orange-500 text-white p-1 rounded-full'> {item.price} </span> 
                  </p> 

                </div>

              </div>

              <div className='flex justify-start px-2 py-4'>
                    <FaStar size={17} style={{ fill: '#ff8c00' }}/>
                    <FaStar size={17} style={{ fill: '#ff8c00' }}/>
                    <FaStar size={17} style={{ fill: '#ff8c00' }}/>
                    <MdOutlineStarHalf size={17} style={{ fill: '#ff8c00' }}/>
                    <AiOutlineStar size={17} style={{ fill: '#ff8c00' }}/>
                  </div>
            </Link >
            
          ))
        }
      </div>      
    </div>
  );
};

export default Food;
