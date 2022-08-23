import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";



function RegisterUser() {

  //Config DB
  const [username, setUsername] = useState("");
  const [cidade, setCidade] = useState("");

  const [userList, setUserDataList] = useState([]);

  useEffect(function (){
    Axios.get("http://127.0.0.1:5000/api/select").then(function (response){
      // console.log(response);
      // console.log(response.data);
      setUserDataList(response.data);
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
       username: username, 
       cidade:cidade 
     });

     setUserDataList([
      ...userList,
      {
        username: username,
        cidade:cidade
      },
    ]);

  };

  return (
    <>   
    
    <div className='max-w-[1640px] mx-auto mt-20 mb-40 p-4'>
        <div className='max-h-[500px] relative'>

            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-center'>
               <h2 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500'> 
               Crie Uma Conta Grátis              
               </h2>
            </div>
            
        </div>
    </div>


  

      

     


    

    {/* Fields  */}
    <div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

    {/* Usuario */}
    <div className='flex items-center'>
        <p className='text-2xl sm:text-2xl lg:text-2xl px-2'> Nome de Usuário </p>
    </div>

    {/*  Input */}
    <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <input 
          className='bg-transparent p-2 w-full focus:outline-none' 
          type='text' 
          name="username" 
          onChange={(e)=>{
            setUsername(e.target.value)
          }} 
        />
         
    </div>   

    </div>

    <div className='max-w-[640px] mx-auto flex justify-between items-center p-2'>

    <div className='flex items-center'>

        <p className='text-2xl sm:text-2xl lg:text-2xl px-2'> Cidade </p>

    </div>

    {/*  Input */}
    <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <input 
          className='bg-transparent p-2 w-full focus:outline-none' 
          type='text'
          name="cidade" 
          onChange={(e)=>{
            setCidade(e.target.value)
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



       {/* Exibindo uma Lista  */ }
       {
          userList.map(function (k){
            return (
              <h1>Id: {k.id} | Cidades: {k.cidade}</h1>
            )
          })
        }

</>


    
  );
}

export default RegisterUser;
