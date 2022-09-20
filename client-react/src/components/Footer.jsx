import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../data/infofooter.js';

const Footer = () => {
  
  return (

    <div className='max-w-[1640px] m-auto px-4 py-12'>

      {/* categories_subfooter */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 py-6'>

        {
          footer.map((item, index) => (
            <>
                <div className='bg-gray-100 rounded-lg p-4'>
                    
                    <div> 
                        <h2 className='text-orange-600 font-bold sm:text-xl text-center'>
                            {item.name}
                        </h2>                                
                    </div>

                    <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-center items-center' >
                        <h3>{item.description} </h3>                      
                        <h3>{item.fone} </h3>                
                        <h3> {item.description_fone}</h3>   
                    </div>

                    <div className='flex justify-around'>

                        <div key={index} className='bg-gray-100 rounded-lg p-4  items-center' >                   
                            <Link to={'/facebook.com.br'}  className='cursor-pointer '> 
                        
                                <h3><img src={item.icon_f} alt='' className='w-5' />{item.social_f} </h3>                        
                            </ Link>                              
                        </div>

                        <div key={index} className='bg-gray-100 rounded-lg p-4  items-center' >       
                        
                            <Link to={'/facebook.com.br'}  className='cursor-pointer '> 
                            
                                <h3><img src={item.icon_w} alt='' className='w-5' />{item.social_w} </h3>                        
                            </ Link>                             
                        </div>

                        <div key={index} className='bg-gray-100 rounded-lg p-4 items-center' >                
                            <Link to={'/facebook.com.br'}  className='cursor-pointer '>                
                
                                <h3><img src={item.icon_i} alt='' className='w-5' />{item.social_i} </h3>
                            </ Link>                       
                        </div>
                    </div>

                    <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-center items-center' >
                        
                        <h3>{item.copyright} </h3>
                        <h3>{item.right} </h3>    

                    </div>

                    <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-center items-center' >
                                               
                        <h3>{item.address} </h3>
                        <h3> {item.description_address}</h3>     

                    </div>

                    <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-center items-center' >
                        
                        <h3>{item.email} </h3>
                        <h3> {item.address_email}</h3>  

                    </div>
                </div>
            </>
          ))
        }
        
      </div>

    </div>

  );
};

export default Footer;


