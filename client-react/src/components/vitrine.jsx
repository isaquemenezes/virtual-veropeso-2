import React, { useState, useEffect } from "react";
import Axios from 'axios';

const VitrineProdutos = () => {
  const [productList, setProductDataList] = useState([]);

  useEffect(function (){
        Axios.get("http://127.0.0.1:5000/api/select").then(function (response)
            {
              setProductDataList(response.data);
            }
        );
      }, 
  []);


  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>

      <h1 className='text-orange-600 font-bold text-4xl text-center'> Produtos Vendidos </h1>


      <div className='flex flex-col lg:flex-row justify-between'>
        <div>

          <p className='font-bold text-gray-700'>Filtrar Categoria</p>

        </div>
      </div>

      {/* Display products */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>

        {
          productList.map((item, index) => (
            <div
              key={index}
              className='border shadow-lg rounded-lg hover:scale-105 duration-300'
            >
             
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.nome_produto}</p>
              
                <p>
                  <span className='bg-orange-500 text-white p-1 rounded-full'>
                    R$: {item.preco}
                  </span> 
                </p>
               
              </div>

              <div className='flex justify-between px-2 py-4'>
              
                <p>Categoria: {item.categoria}</p>
                
              </div>

              <div className='flex justify-between px-2 py-4'>
              
                <p>Barraca: {item.fk_nome_barraca}</p>
            
              </div>

            </div>
          ))
        }
      </div>
      
    </div>
  );
};

export default VitrineProdutos;

