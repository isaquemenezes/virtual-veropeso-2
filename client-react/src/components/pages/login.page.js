import React, { useState } from "react";
import aaxios from 'axios';
import { Link } from "react-router-dom"


function LoginUser() {

  //Config DB
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitSet = () => {
    
    aaxios.post("http://127.0.0.1:5000/login/password", {
      username: username, 
      password:password
    });

  };

  return (
   
    <>

<div className='max-w-[1640px] mx-auto mt-20 mb-40 p-4'>
        <div className='max-h-[500px] relative'>

            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-center'>
               <h2 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500'> 
               Entrar              
               </h2>
            </div>
            
        </div>
    </div>
   
    {/* <div className="App">
      <h1>Entrar</h1>
      <div className="__form">
        <label>User Name</label>
        <input 
          type="text" 
          name="username" 
          onChange={(e)=>{
            setUsername(e.target.value)
          }} 
        />

        <label>Senha</label>
        <input 
          type="text" 
          name="cidade" 
          onChange={(e)=>{
            setCidade(e.target.value)
          }}
        />

        <button onClick={submitSet}>Entrar</button>

     
      </div>
    </div> */}

{/* Fields  */}
<div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

    {/* Usuario */}
    <div className='flex items-center'>
        <p className='text-2xl sm:text-2xl lg:text-2xl px-2'> Usuário </p>
    </div>

    {/*  Input */}
    <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <input 
          className='bg-transparent p-2 w-full focus:outline-none' 
          type='text'
          name="username" 
          onChange={(event) =>{
            setUsername(event.target.value)
          }}
        />
    </div>   
 
</div>

<div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

    <div className='flex items-center'>

        <p className='text-2xl sm:text-2xl lg:text-2xl px-2'> Senha </p>

    </div>

    {/*  Input */}
    <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <input 
          className='bg-transparent p-2 w-full focus:outline-none' 
          type='password' 
          name="password"
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
    </div>   

</div>


{/* Login Register button */}
<div className='max-w-[640px] mx-auto flex justify-center items-center p-2'>

    <button onClick={submitSet} className='bg-black text-white md:flex items-center py-2 rounded-full'>
    Entrar
    </button>

    <button className='bg-white text-black md:flex items-center py-2 rounded-full ml-10'> 
        <Link to="/register-user"> Registre-se</Link>
    </button>

</div>








    </>
  );
}

export default LoginUser;
