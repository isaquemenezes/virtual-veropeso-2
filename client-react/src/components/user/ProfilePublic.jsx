import React  from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { useParams } from "react-router-dom";
import { chefPersonalName } from "../../data/chef-personal-name";


const ProfilePublicUser = () => {
    var param_id = useParams();
    var _id = param_id.perfil_id;
    //console.log("iud "+ _id);
    
    var found = chefPersonalName.find(elem => {
        return elem.id == _id 
    });


  return (
    <>

    <main class="max-w-[740px] mx-auto mb-40 border-2 bg-orange-100">
    
    <section class="max-w-[740px] mx-auto mb-40">
        <div class='max-h-[500px] '>
            <div class='w-full h-full mt-10 mb-20 max-h-[500px] flex flex-col justify-center items-center hover:scale-105 duration-300'>
                <h2 class='px-4 text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold '> 
                    
                    <p></p>
                    <img src={found.image} alt="" className='rounded-lg w-30' />             
                </h2><br /><br /><br /><br />
                <p class="text-white"></p>
                              
            </div>            
        </div>
    <form action="/signup" method="post" >

        <div class='max-w-[640px] mx-auto flex justify-between items-center p-2'>

            <div class='flex justify-around items-center'>
                <span><BsFillPatchCheckFill size={15} style={{ fill: '#00008B' }} /></span>
                <p class='text-2xl sm:text-2xl lg:text-2xl px-2'>Nome </p>
                
            </div>
            <div class='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <input 
                    class='bg-transparent p-2 w-full focus:outline-none' 
                    type='text' 
                    id="" 
                    value={found.name}
                    placeholder="Nome" 
                    required
                />
            </div> 
        </div>

        <div class='max-w-[640px] mx-auto flex justify-between items-center p-2'>

            <div class='flex items-center'>
                <span><BsFillPatchCheckFill size={15} style={{ fill: '#00008B' }} /></span>
                <p class='text-2xl sm:text-2xl lg:text-2xl px-2'>Email </p>
            </div>
            <div class='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <input 
                    class='bg-transparent p-2 w-full focus:outline-none' 
                    type='email' 
                    id="email" 
                    value=""
                    placeholder="Se melhor email" 
                    required
                />
            </div> 
        </div>

        <div class='max-w-[640px] mx-auto flex justify-between items-center p-2'>

            <div class='flex items-center'>
                <p class='text-2xl sm:text-2xl lg:text-2xl px-2'>Usuário </p>
            </div>
            <div class='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <input 
                    class='bg-transparent p-2 w-full focus:outline-none' 
                    type='text' 
                    id="user" 
                    value=""
                    placeholder="Nome de usuario" 
                    required
                />
            </div> 
        </div>

        <div class='max-w-[640px] mx-auto flex justify-between items-center p-2'>

            <div class='flex items-center'>
                <p class='text-2xl sm:text-2xl lg:text-2xl px-2'>Cidade</p>
            </div>
            <div class='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <input 
                    class='bg-transparent p-2 w-full focus:outline-none' 
                    type='text' 
                    id="user" 
                    name="cidade"
                    placeholder="Sua Cidade" 
                    required
                />
            </div> 
        </div>

        <div class='max-w-[640px] mx-auto flex justify-between items-center p-2'>

            <div class='flex items-center'>
                <p class='text-2xl sm:text-2xl lg:text-2xl px-2'>Bairro</p>
            </div>
            <div class='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <input 
                    class='bg-transparent p-2 w-full focus:outline-none' 
                    type='text' 
                    id="user" 
                    value={found.bairro}
                    placeholder="Seu bairro" 
                    required
                />
            </div> 
        </div>

        <div class='max-w-[640px] mx-auto flex justify-between items-center p-2'>

            <div class='flex items-center'>
                <span><BsFillPatchCheckFill size={15} style={{ fill: '#00008B' }} /></span>
                <p class='text-2xl sm:text-2xl lg:text-2xl px-2'>WhatsApp</p>
            </div>
            <div class='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <input 
                    class='bg-transparent p-2 w-full focus:outline-none' 
                    type='text' 
                    id="user" 
                    name="Whatsapp"
                    placeholder="+55 (91) 9 ..." 
                    required
                />
            </div> 
        </div>

        <div class='max-w-[640px] mx-auto flex justify-between items-center p-2'>

            <div class='flex items-center'>
                <span>
                    <BsFillPatchCheckFill size={15} style={{ fill: '#00008B' }} /></span>
                    <p class='text-2xl sm:text-2xl lg:text-2xl px-2'>Rede Social</p>
                
            </div>
            <div class='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <input 
                    class='bg-transparent p-2 w-full focus:outline-none' 
                    type='text' 
                    id="user" 
                    name="rede_social"
                    placeholder="@usuário" 
                    required
                />
            </div> 
        </div>

        <div class='max-w-[640px] mx-auto flex justify-center items-center p-2'>

            <button type="submit" class='bg-slate-800 font-semibold tracking-widest text-white pl-5 pr-5 py-2 text-lg md:flex items-center py-2 rounded-full hover:scale-105 duration-300'>
                Solicitar
            </button>         
        </div>
    </form>
        <div className='flex justify-start'>
            <span className='mt-10'>
                <BsFillPatchCheckFill size={15} style={{ fill: '#00008B' }} /> 
                Dados Verificados e Aprovados,seguindos as diretrizes do site. 
            </span>
        </div>
    </section>   
    </main> 

    <div className='max-w-[1540px] m-auto px-4 py-12'>
            <p className='text-black-600 font-bold text-2xl text-center'>Últimas Receitas Lançadas </p>
           
            <h3 className='text-orange-600 font-bold mb-10 text-4xl text-center'>
             De: {found.name} 
            </h3> 

            <section className='grid grid-cols-2 md:grid-cols-4 mb-40'>

            <div className='hover:scale-105 duration-300'>
                <a href="">  
                    <div className='bg-gray-100 rounded-lg p-4  items-center' >
                     
                        <img src="https://www.receiteria.com.br/wp-content/uploads/canja-de-galinha-simples-01-730x480.jpg" alt="" className='rounded-lg w-15' />
                       <h2 className='font-medium capitalize sm:text-xl text-center mt-3'>Canja de Galinha Simples</h2></div>
                </a>
            </div>

            <div className='hover:scale-105 duration-300'>
                <a href="">  
                    <div className='bg-gray-100 rounded-lg p-4 ' >
                      
                        <img src="https://www.receiteria.com.br/wp-content/uploads/frango-empanado-sem-farinha-00-730x477.jpg" alt="" className='rounded-lg w-15' />
                      <h2 className='font-medium capitalize sm:text-xl text-center mt-3'>Frango Empado Sem Farinha</h2></div>
                </a>
            </div>

            <div className='hover:scale-105 duration-300'>
                <a href="">  
                    <div className='bg-gray-100 rounded-lg p-4 ' >
                     
                        <img src="https://www.receiteria.com.br/wp-content/uploads/strogonoff-de-frango-simples-00-730x480.jpg" alt="" className='rounded-lg w-15' />
                       <h2 className='font-medium capitalize sm:text-xl text-center mt-3'>strogonoff de frango simples</h2></div>
                </a>
            </div>

            <div className='hover:scale-105 duration-300'>
                <a href="">  
                    <div className='bg-gray-100 rounded-lg p-4 ' >
                        
                        <img src="https://www.receiteria.com.br/wp-content/uploads/file-de-peito-de-frango-com-leite-de-coco-730x477.png" alt="" className='rounded-lg w-15' />
                        <h2 className='font-medium capitalize sm:text-xl text-center mt-3'>Filé de Peito de Frango Com Leite de Coco</h2> 
                   </div>
                </a>
            </div>

            <div className='hover:scale-105 duration-300'>
                <a href="">  
                    <div className='bg-gray-100 rounded-lg p-4 ' >
                        
                        <img src="https://www.receiteria.com.br/wp-content/uploads/creme-de-frango-com-milho-rapido-00-730x477.jpg" alt="" className='rounded-lg w-15' />
                        <h2 className='font-medium capitalize sm:text-xl text-center mt-3'>Creme de Frango com Milho Rápido</h2> 
                   </div>
                </a>
            </div>

            <div className='hover:scale-105 duration-300'>
                <a href="">  
                    <div className='bg-gray-100 rounded-lg p-4 ' >
                        
                        <img src="https://www.receiteria.com.br/wp-content/uploads/sopa-cremosa-de-frango-com-legumes-00-730x477.jpg" alt="" className='rounded-lg w-15' />
                        <h2 className='font-medium capitalize sm:text-xl text-center mt-3'>Sopa Cremosa de Frango com Legumes</h2> 
                   </div>
                </a>
            </div>

            <button className='bg-slate-800 font-semibold tracking-widest text-white m-auto  hover:scale-105 duration-300'>
                <a href="#">Ver Todos</a>
            </button>

            </section>


          </div>

  

    </>

    );
};

export default ProfilePublicUser;