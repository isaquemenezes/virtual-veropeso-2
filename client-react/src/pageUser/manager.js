import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/navBar'


function Manager() {

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
                <p className='text-black text-2xl sm:text-2xl lg:text-2xl px-2'>Gerencie os Recuros e Cadastros </p>

            </div>
            
        </div>
    </div>    
  

    {/* Login Register button */}
    <div className='max-w-[640px] mx-auto flex justify-center items-center p-2'>

      <button className='bg-black text-white md:flex items-center py-2 rounded-full'>
        <a href="http://127.0.0.1:5000/select"> Produtos </a>
      </button>

      <button className='bg-white text-black md:flex items-center py-2 rounded-full ml-10'> 
        <Link to="/feirante"> Feirantes e Barracas</Link>
      </button>    

    </div>    

</>
    
  );
}

export default Manager;
