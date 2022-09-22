import React from 'react';
import { Link } from 'react-router-dom';
import { footer_social } from '../data/infofooter.js';
import Banner from "../images/banner.jpeg"


const Footer = () => {

    // Social Media
    const found = footer_social.find(function (element){
        return element.id == 1;
    });
    
  return (
    <>
        {/* <div className='  py-12'> */}

        <div className='bg-gray-100 max-w-[1540px] m-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-6'>
            
                    {/* <div className='bg-gray-100 rounded-lg p-4 flex justify-around items-center'> */}

                        {/* start about  */}
                        <div> 
                            <h2 className='text-orange-600 font-bold sm:text-xl text-center'>
                                Sobre Nós
                            </h2> 
                            <div className='text-center'>
                                       
                            <h3>Ver o Peso Virtual é uma plataforma de indexação da cultura culinária paraense</h3>    
                            <h3>Copyright @ Todos os direitos reservados</h3> </div> 
                        </div>

                    
                        {/* start contact  */}
                        <div> 
                            <h2 className='text-orange-600 font-bold sm:text-xl text-center'>
                                Contato
                            </h2>  
                            <div className='text-center'>       
                            <h3>Fone: +55 (91) 9 88134393  </h3>        
                            <h3>Email: VeroPesoVirtual@gmail.com</h3>
                            <h3>Localização: Brasil, Pará</h3></div> 
                        </div>
                        
                        {/* start social media  */}
                        <div> 

                            <h2 className='text-orange-600 font-bold sm:text-xl text-center'>
                                Conecte-se Conosco
                            </h2>    

                            <div className='flex justify-around'>

                            <Link to={'/facebook.com.br'}  className='cursor-pointer '> 
                                <h3><img src={found.icon_f} alt='' className='w-5' />{found.social_f} </h3>                        
                            </ Link>  

                            <Link to={'/facebook.com.br'}  className='cursor-pointer '>     
                                <h3><img src={found.icon_w} alt='' className='w-5' />{found.social_w} </h3>                        
                            </ Link> 

                            <Link to={'/facebook.com.br'}  className='cursor-pointer '>                
                                <h3><img src={found.icon_i} alt='' className='w-5' />{found.social_i} </h3>
                            </ Link> 
                            </div>
                        </div>
            
            
        </div>

        {/* </div>  */}
    </>

  );
};

export default Footer;


