import React, { useState, useEffect } from "react";
import Axios from 'axios';

import Navbar from '../navBar'


function RegisterUser() {

  //Config DB
  const [name_barraca, setName_barraca] = useState("");
  const [categ, setCateg] = useState("");
  const [name_produto, setName_produto] = useState("");
  const [price, setPrice] = useState("");

  const [productList, setProductDataList] = useState([]);

  useEffect(function (){
    Axios.get("http://127.0.0.1:5000/api/select").then(function (response){
      // console.log(response);
      // console.log(response.data);
      setProductDataList(response.data);
    });
  }, []);

  const submitSet = () => {
    
    // Axios.post("http://127.0.0.1:5000/api/insert", {
    //   username: username, 
    //   cidade:cidade 
    // }).then(() => {
    //   alert("Successful Insert!!");
    // });

    Axios.post("http://127.0.0.1:5000/api/insert", {
      name_barraca: name_barraca, 
      categ:categ, 
      name_produto:name_produto,
      price:price
     });

     setProductDataList([
      ...productList,
      {
        name_barraca: name_barraca, 
        categ:categ, 
        name_produto:name_produto,
        price:price
      },
    ]);

    // Clear Inputs 
    setName_barraca("");
    setCateg("");
    setName_produto("");
    setPrice("");

  };

  return (
    <>   
    
    <Navbar />
   


    <div className='max-w-[1640px] mx-auto mt-20 mb-40 p-4'>
        <div className='max-h-[500px] relative'>

            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-center'>
               <h3 className='px-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500'> 
                    Cadastrar Um Produto              
               </h3>
            </div>
            
        </div>
    </div>

    {/* Fields  Products */}
    <div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

      {/* Products */}
      <div className='flex items-center'>
          <p className='text-2xl sm:text-2xl lg:text-2xl px-2'> Fk Barraca  </p>
      </div>

      {/*  Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          
          <input 
          className='bg-transparent p-2 w-full focus:outline-none' 
          type='text' 
          value={name_barraca} 
          onChange={(e)=>{
            setName_barraca(e.target.value)
          }} />
          
      </div>   

    </div>

    {/* Fields  Products */}
    <div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

        {/* Products */}
        <div className='flex items-center'>
            <p className='text-2xl sm:text-2xl lg:text-2xl px-2'> Nome do Produto </p>
        </div>

        {/*  Input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            
            <input 
            className='bg-transparent p-2 w-full focus:outline-none' 
            type='text' 
            value={name_produto} 
            onChange={(e)=>{
              setName_produto(e.target.value)
            }} />
            
        </div>  
    </div>

    <div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

        <div className='flex items-center'>

            <p className='text-2xl sm:text-2xl lg:text-2xl px-2'> Preço </p>

        </div>

        {/*  Input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <input 
            className='bg-transparent p-2 w-full focus:outline-none' 
            type='text'
            value={price} 
            onChange={(e)=>{
                setPrice(e.target.value)
            }} />
        </div>  
    </div>
    
    <div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

        <div className='flex items-center'>

            <p className='text-2xl sm:text-2xl lg:text-2xl px-2'> Categoria </p>

        </div>

        {/*  Input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <input 
            className='bg-transparent p-2 w-full focus:outline-none' 
            type='text'
            value={categ} 
            onChange={(e)=>{
                setCateg(e.target.value)
            }} 
            />
        </div>  
    </div>

    {/* Login Register button */}
    <div className='max-w-[640px] mx-auto flex justify-center items-center p-2'>

    <button onClick={submitSet} className='bg-black text-white md:flex items-center py-2 rounded-full'>
     Cadastrar
    </button>    

    </div>    

       {/* {
          productList.map(function (k){
            return (
              <h1>Id: {k.fk_nome_barraca} | Produto: {k.nome_produto} | Categoria:{k.categoria}</h1>
            )
          })
        } */}

</>


    
  );
}

export default RegisterUser;
