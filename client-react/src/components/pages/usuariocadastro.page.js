import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";

import Navbar from '../navBar'

function RegisterUser() {

  //Config DB
  const [_username, setUserNome] = useState("");
  const [_password, setPassword] = useState("");

  const [userList, setUserDataList] = useState([]);


  const submitSet = () => {

    Axios.post("http://127.0.0.1:5000/signup", {
       username: _username, 
       password: _password
     });

     setUserDataList([
      ...userList,
      {
        username: _username, 
        password:_password
      },
    ]);

    //clear imputs
    setUserNome("");
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
               Crie Uma Conta Grátis              
               </h2>
                <p className='text-black text-2xl sm:text-2xl lg:text-2xl px-2'>para ter acesso a mais recursos e benefícios</p>

            </div>            
        </div>
    </div>


  
    {/* Fields  */}
    <div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

      <div className='flex items-center'>
          <p className='text-2xl sm:text-2xl lg:text-2xl px-2'>Nome de Usuário </p>
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <input 
            className='bg-transparent p-2 w-full focus:outline-none' 
            type='text' 
            value={_username} 
            placeholder="Nome de usuario" 
            onChange={(e)=>{ 
              setUserNome(e.target.value) 
              }} />
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
            type='password'
            value={_password} 
            onChange={(e)=>{
              setPassword(e.target.value)
            }} 
          />
      </div>  
    </div>

    <div className='max-w-[640px] mx-auto flex justify-center items-center p-2'>

      <button onClick={submitSet} className='bg-black text-white md:flex items-center py-2 rounded-full'>
        Registrar
      </button>

      <button className='bg-white text-black md:flex items-center py-2 rounded-full ml-10'> 
          <Link to="/login"> Entrar</Link>
      </button>   
    </div>    

    {/* Login Register Social  */}
    <div className='max-w-[1640px] mx-auto mt-20 mb-5 p-4'>
        <div className='max-h-[500px] relative'>

            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-center'>
            
              <p className='text-black text-2xl sm:text-2xl lg:text-2xl px-2'>Registre-se Com sua Rede Favorita</p>

            </div>
        </div>
    </div>


    <div className='max-w-[640px] mx-auto flex justify-center items-center p-2'>
    
      <button onClick={submitSet} className='bg-white text-blue-500 md:flex items-center py-2 rounded-full'>
        Facebook
      </button>

      <button className='bg-white text-blue-400 md:flex items-center py-2 rounded-full ml-10'> 
          <Link to="/login"> Google</Link>
      </button>    

    </div>    


</>


    
  );
}

export default RegisterUser;
