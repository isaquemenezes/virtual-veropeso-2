import React from 'react';
import { Link } from 'react-router-dom';
import { footer_social } from '../data/infofooter.js';

const Footer = () => {

    // Social Media
    const found = footer_social.find(function (element){
        return element.id === 1;
    });
    
  return (
    <>
      
        <div className='bg-gray-100 pb-10 max-w-[1540px] m-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-6'>
            
            {/* start doc  */}
            <div> 
                <h2 className='text-orange-600 font-bold sm:text-xl text-center'>
                    Doc
                </h2> 
                <div className='text-center'>
                                       
                    <h3>Sobre Nós</h3>
                    <h3>Política de Privacidade</h3>    
                    <h3>Termos de Uso </h3> 
                </div> 
            </div>

                    
            {/* start contact  */}
            <div> 
                <h2 className='text-orange-600 font-bold sm:text-xl text-center'>
                    Contato
                </h2>  
                <div className='text-center'>       
                    <h3>Fone: +55 (91) 9 88134393  </h3>        
                    <h3>Email: VeroPesoVirtual@gmail.com</h3>
                    <h3>Localização: Brasil, Pará</h3>
                </div> 
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

        <div className='bg-gray-100 max-w-[1540px] m-auto grid grid-cols-1 md:grid-cols-1 gap-6 py-6'>
            
           
            <div> 
               
                <div className='text-center'>
                                       
                     
                    <h3>Copyright @ Todos os direitos reservados</h3> 
                </div> 
            </div>

                    
          
                        
            
            
        </div>
       
    </>

  );
};

export default Footer;


