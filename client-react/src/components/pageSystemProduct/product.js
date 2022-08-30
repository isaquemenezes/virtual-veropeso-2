import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";

import Navbar from '../navBar'



function RegisterUser() {

  //Config DB
  const [_name, setNome] = useState("");
  const [_contato, setContato] = useState("");
  const [_barraca, setBarraca] = useState("");
  const [_localizacao, setLocalizacao] = useState("");
  const [_pass, setPassword] = useState("");

  const [userList, setUserDataList] = useState([]);


  const submitSet = () => {

    Axios.post("http://127.0.0.1:5000/api/usuariocadastro", {
       Nome: _name, 
       Contato:_contato,
       Barraca:_barraca,
       Localizacao_barraca:_localizacao,
       Senha:_pass

     });

     setUserDataList([
      ...userList,
      {
        nome: _name, 
        ontato:_contato,
        barraca:_barraca,
        localizacao_barraca:_localizacao,
        senha:_pass
      },
    ]);

    setNome("");
    setContato("");
    setBarraca("");
    setLocalizacao("");
    setPassword("");

  };

  return (
    <>   
       <Navbar />
    
    <div className='max-w-[1640px] mx-auto mt-20 mb-40 p-4'>
        <div className='max-h-[500px] relative'>

            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-center'>
               <h2 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500'> 
                Usuário - Manager              
               </h2>
                <p className='text-black text-2xl sm:text-2xl lg:text-2xl px-2'>Gerencie os Produtos</p>

            </div>
            
        </div>
    </div>


  

      

     


  
    {/* Fields  */}
    <div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

      {/* Nome */}
      <div className='flex items-center'>
          <p className='text-2xl sm:text-2xl lg:text-2xl px-2'>Nome </p>
      </div>

      {/*  Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <input 
            className='bg-transparent p-2 w-full focus:outline-none' 
            type='text' 
            // name="nome"
            value={_name}
            placeholder="Nome ou apelido"
            onChange={(e)=>{
              setNome(e.target.value)
            }} 
          />
      </div>   

    </div>

    <div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

      <div className='flex items-center'>

        <p className='text-2xl sm:text-2xl lg:text-2xl px-2'> Contato </p>

      </div>

      {/*  Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <input 
            className='bg-transparent p-2 w-full focus:outline-none' 
            type='text'
            value={_contato}
            placeholder="919..." 
            onChange={(e)=>{
              setContato(e.target.value)
            }} 
          />
      </div>   

    </div>

    <div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

      <div className='flex items-center'>

        <p className='text-2xl sm:text-2xl lg:text-2xl px-2'> Barraca </p>

      </div>

      {/*  Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <input 
            className='bg-transparent p-2 w-full focus:outline-none' 
            type='text'
            value={_barraca} 
            placeholder="Nome da Sua Barraca"
            onChange={(e)=>{
              setBarraca(e.target.value)
            }} 
          />
      </div>   

    </div>

    <div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

      <div className='flex items-center'>

        <p className='text-2xl sm:text-2xl lg:text-2xl px-2'>Localização da Barraca  </p>

      </div>

      {/*  Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <input 
            className='bg-transparent p-2 w-full focus:outline-none' 
            type='text'
            value={_localizacao} 
            placeholder="Quadra 2"
            onChange={(e)=>{
              setLocalizacao(e.target.value)
            }} 
          />
      </div>   

    </div>
    
    <div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

      <div className='flex items-center'>

        <p className='text-2xl sm:text-2xl lg:text-2xl px-2'>Senha </p>

      </div>

      {/*  Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <input 
            className='bg-transparent p-2 w-full focus:outline-none' 
            type='text'
            value={_pass} 
            onChange={(e)=>{
              setPassword(e.target.value)
            }} 
          />
      </div>   

     
    </div>

    {/* Login Register button */}
    <div className='max-w-[640px] mx-auto flex justify-center items-center p-2'>

      <button onClick={submitSet} className='bg-black text-white md:flex items-center py-2 rounded-full'>
        Registrar
      </button>

      <button className='bg-white text-black md:flex items-center py-2 rounded-full ml-10'> 
          <Link to="/login"> Entrar</Link>
      </button>    

    </div>    



    

</>


    
  );
}

export default RegisterUser;
