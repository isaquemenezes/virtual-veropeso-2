const howItWorks = () => {

    return (
      <div className='max-w-[1540px] m-auto px-4 py-12'>

        <h1 className='text-orange-600 font-bold text-4xl text-center'>
          Transforme a sua casa num restaurante com os nossos Chefs Pessoais 
        </h1>
        <p className='text-black-600 font-bold text-2xl text-center'> 
          Eles são especialista em cada prato feito; e você não precisa mais gastar muito com isto 
        </p>

  
      <div className='m-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-6'>
          
            <div  className='bg-gray-100 rounded-lg p-4 items-center' >
              <h2 className='font-bold sm:text-xl text-center'>O chef</h2><br />
            
              <img className='rounded-lg w-15'
                src="https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/images/homepage/common/sections/your-private-chef-will-be-cooking-at-your-home-kitchen.jpg,w_540,h_380,c_1,q_90,fd_0,e_.webp" 
                alt=""  
              />
              <br />  
              <p>
                O seu Chef Pessoal chegará com todos os ingredientes <br /> <br />
                necessários para preparar a sua tão sonhada refeição.<br /><br />
               

                Sente-se e desfrute do seu próprio show culinário!<br />
                 Assista e aprenda novas receitas enquanto<br /><br />
                  seu chef prepara uma boa refeição na mesa do seu chef interno
              </p>
            </div>

            <div  className='bg-gray-100 rounded-lg p-4 items-center' >
              <h2 className='font-bold sm:text-xl text-center'>A comida</h2><br />
              <img className='rounded-lg w-15'
                src="https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/images/homepage/common/sections/your-private-chef-will-be-serving-each-dish.jpg,w_540,h_380,c_1,q_90,fd_0,e_.webp" 
                alt=""  
              />
              <br />
              <p>
              Seu chef cuidará da sua festa durante toda a experiência;
               e sim! Isso significa que os deveres do anfitrião estão fora da mesa para você.
              </p><br />
              
              <p>
                Serviço francês, estilo familiar ou buffet, a sua escolha! 
                Queremos que você se sinta mimado.
              </p>
            </div>

            <div  className='bg-gray-100 rounded-lg p-4 items-center' >
              <h2 className='font-bold sm:text-xl text-center'>O valor</h2><br />
              <img className='rounded-lg w-25'
                src="https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/images/homepage/common/sections/your-private-chef-will-leave-your-kitchen-spotless.jpg,w_540,h_380,c_1,q_90,fd_0,e_.webp" 
                alt=""  
              />
              <br />
              <p>
              O chef Pessoal é uma pessoa altamente capacitada em determinado prato.<br /><br />
              Ele cuida exclusivamente do preparativo do prato escolhido pelo cliente.<br />

              </p><br />
              <p> Sua função será fazer da sua experiência com aquele prato se elevar para outro nível. </p>
            </div>        
      </div>
   
      

    </div>
      
    );
  };
  
  export default howItWorks;