import React, { useState } from 'react';

import { data } from '../data/data-details';
import { Link, useParams } from "react-router-dom";

const Food = () => {
   // 👇️ get ID from url
   const params = useParams();

   console.log(params); 
 
  
 
     
  const [foods, setFoods] = useState(data);
  
  
  
  //   Filtrar Tipos /massas/carne
  const filterType = (category) => {

    setFoods(

      data.filter((item) => {
        return item.category === category;
      })

    );

  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>

      <h1 className='text-orange-600 font-bold text-4xl text-center'> Como fazer este prato (Receita) </h1>

      {/* Filtrar */}

      <div className='flex flex-col lg:flex-row justify-between'>

        {/* Fittrar Tipo */}
        <div>

          <p className='font-bold text-gray-700'>Filtrar Por</p>
          <div className='flex justfiy-between flex-wrap'>

          <button 
             
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              to="/"> 
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
        <div>

          <p className='font-bold text-gray-700'>Detalhes e Receitas</p>
        </div>
      </div>

      {/* Display Receita */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>

        {
          foods.map((item, index) => (
            <div
              key={index}
              className='border shadow-lg rounded-lg hover:scale-105 duration-300'
            >
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-[200px] object-cover rounded-t-lg'
              />
               <p> valor da receita
                  <span 
                    className='bg-orange-500 text-white p-1 rounded-full'> 
                    aproximadamente* {item.price}
                  </span>
                 
                </p>
              <div className=' justify-between px-2 py-4'>
             
             
                <p className='font-bold'>{item.name} </p> 

              
               
              </div>
              <div className=' justify-between px-2 py-4'>
                <p className='font-bold'>INGREDIENTES: {item.ingredientes}<br />MODO DE PREPARO: {item.modoprepara}  <br /><br /></p> 
                </div>
                <div className=' justify-between px-2 py-4'>
                <p className='font-bold'>Onde encontrar: {item.local}</p> 
                </div>

                

              <Link to="/"  className='cursor-pointer'> 
                  <button
                    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                  >
                    Contrate alguém especialista neste prato
                  </button>
                </Link >
            </div>
          ))
        }
      </div>
      
    </div>
  );
};

export default Food;
