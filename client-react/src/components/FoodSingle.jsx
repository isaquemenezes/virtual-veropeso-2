import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';
import { MdOutlineStarHalf } from 'react-icons/md';
import { dataDetails } from '../data/data-details';
import { chefPersonalName } from "../data/chef-personal-name";
import { Link, useParams } from "react-router-dom";


const Food = () => {
  // get ID from url
  const params = useParams();
  const _id =  params.food_id;  
  //console.log(params);

  const [chefs] = useState(chefPersonalName);


  //Select by id
  const found = dataDetails.find(element => {
    return element.id == _id;
  });

  
  return (
    <div className='max-w-[1540px] m-auto px-4 py-12'>

      <h1 className='text-orange-600 font-bold text-4xl text-center'> Como fazer este prato (Receita) </h1>

      {/* Filtrar */}
      <div className='flex flex-col lg:flex-row justify-between'>

        {/* Fittrar Tipo */}
        <div>

          <p className='font-bold text-gray-700'>Filtrar Por</p>
          <div className='flex justfiy-between flex-wrap'>

          <Link to="/">
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >
             
             Todos 
            </button>
          </Link>
       
          </div>
        </div>          
        <div>

          <p className='font-bold text-gray-700'>Detalhes e Receitas</p>
        </div>
      </div>

      {/* Display Receita */}
      <div className='max-w-[800px] m-auto grid grid-cols-1 lg:grid-cols-1 gap-6 pt-4'>

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
             
              <div className='flex justify-between px-2 py-4'>
               
                <p className='font-bold'>{found.name} </p> 
                <p className='font-bold'> </p> 
                <p className='font-bold'> valor da receita 
                  <span className='bg-orange-500 text-white p-1 rounded-full'> 
                    {found.price}
                  </span> 
                </p>

              </div>
              <div className='justify-between px-2 py-4'>

                <p className='font-bold text-orange-600'> INGREDIENTES: </p> <br />
                <p>{found.ingredientes}</p><br /><br />
                <p className='font-bold text-orange-600'> MODO DE PREPARO:</p><br />
                <p>{found.modoprepara}<br /><br /></p> 
                   
              </div>

              <div className=' justify-between px-2 py-4'>
                <p 
                  className='font-bold'>
                    Chef Especialista neste prato: {found.local}
                </p> 
              </div>

              <div className='max-w-[800px] m-auto grid grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
                {
                    chefs.map((k,v)=>(

                    <Link to={`/perfil-public/${k.id}`}  className='cursor-pointer'> 
                
                    <button key={v} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >
                        {k.name} - {k.bairro}
                    </button>

                    <div className='flex justify-start px-2 py-4'>
                        <FaStar size={15} style={{ fill: '#ff8c00' }}/>
                        <FaStar size={15} style={{ fill: '#ff8c00' }}/>
                        <FaStar size={15} style={{ fill: '#ff8c00' }}/>
                        <MdOutlineStarHalf size={15} style={{ fill: '#ff8c00' }}/>
                        <AiOutlineStar size={15} style={{ fill: '#ff8c00' }}/>
                    </div>
                    </Link >))
                }
              
              </div><br /><br /><br /><br />                

            </div>
        }
      </div>
      
    </div>
  );
};

export default Food;