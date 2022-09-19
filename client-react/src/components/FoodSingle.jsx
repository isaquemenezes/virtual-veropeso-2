import React from 'react';

import { dataDetails } from '../data/data-details';
import { Link, useParams } from "react-router-dom";

const Food = () => {
  // get ID from url
  const params = useParams();
  const _id =  params.food_id;  
  //console.log(params);

  //Select by id
  const found = dataDetails.find(element => {
    return element.id == _id;
  });

  
  
  

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
            
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Massas
            </button>

            <button
              
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Carnes
            </button>

            <button
            
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
          
            <div
              key={found.id}
              className='border shadow-lg rounded-lg hover:scale-105 duration-300'
            >
              <img
                src={found.image}
                alt={found.name}
                className='w-full h-[200px] object-cover rounded-t-lg'
              />
               <p> valor da receita
                  <span 
                    className='bg-orange-500 text-white p-1 rounded-full'> 
                    aproximadamente* {found.price}
                  </span>
                 
                </p>
              <div className=' justify-between px-2 py-4'>
             
             
                <p className='font-bold'>{found.name} </p> 

              
               
              </div>
              <div className=' justify-between px-2 py-4'>
                <p 
                  className='font-bold'>
                    INGREDIENTES: {found.ingredientes}<br />
                    MODO DE PREPARO: {found.modoprepara}  <br /><br />
                </p> 
              </div>
              <div className=' justify-between px-2 py-4'>
                <p 
                  className='font-bold'>
                    Onde encontrar: {found.local}
                </p> 
              </div>

                

              <Link to="/"  className='cursor-pointer'> 
                  <button
                    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                  >
                    Contrate alguém especialista neste prato
                  </button>
                </Link >
            </div>
        
        }
      </div>
      
    </div>
  );
};

export default Food;