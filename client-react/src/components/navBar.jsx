import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {FaUserFriends } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
      
    <div className='max-w-[1540px] mx-auto flex justify-between items-center p-4'>

      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
        <AiOutlineMenu size={30} />
        </div>

        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 cursor-pointer'>
          <Link to="/" > 

            Ver o Peso  <span className='font-bold'> Virtual</span>
          </Link>
        </h1>
        
      </div>

      {/* Search Product */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
  
        <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='buscar produto' />

      </div>

      {/* Login Register button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        
        <Link to="/login"> Entrar </Link>

      </button>
   
      <button className='bg-white text-black hidden md:flex items-center py-2 ease-in rounded-full'>
      <FaUserFriends size={20} className='mr-2' />
        
        <Link to="/cadastro-usuario"> Registre-se </Link>

      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          VeroPeso <span className='font-bold'>Virtual</span>
        </h2>

        {/* nav  */}
        <nav>
            <ul className='flex flex-col p-4 text-gray-800 duration-10000'>
           
                <Link to="/" className='text-xl py-4 flex cursor-pointer'>  Home</Link>
                <Link to="/cadastro-usuario" className='text-xl py-4 flex cursor-pointer'> Registre-se</Link>
                <Link to="/manager" className='text-xl py-4 flex cursor-pointer'>Manager</Link>
                <Link to="/login" className='text-xl py-4 flex cursor-pointer'> Entrar</Link>
                <Link to="/about" className='text-xl py-4 flex cursor-pointer'>About </Link> 
                <Link to="/help" className='text-xl py-4 flex cursor-pointer'>  Ajuda</Link>
                
            </ul>
        </nav>
       
      </div>
    </div>

   );
 
};

export default Navbar;
