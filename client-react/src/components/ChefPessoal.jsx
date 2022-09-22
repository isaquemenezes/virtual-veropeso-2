import { Link  } from "react-router-dom";

const ChiefPessoal = () => {


  
  
  

    return (
      <div className='max-w-[1540px] m-auto px-4 py-12'>

      <h1 className='text-orange-600 font-bold text-4xl text-center'>
      Transforme a sua casa num restaurante com os nossos Chefs Pessoais 
      </h1>
      <p className='text-black-600 font-bold text-2xl text-center'> 
        Eles são especialista em cada prato feito; e você não precisa mais gastar muito com isto 
      </p>

      {/* bids */}
      <div className='m-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-6'>

        
          
            <div  className='bg-gray-100 rounded-lg p-4 items-center' >
              <h2 className='font-bold sm:text-xl text-center'>A Culinária</h2><br />
            
              <img className='rounded-lg w-15'
                src="https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/images/homepage/common/sections/your-private-chef-will-be-cooking-at-your-home-kitchen.jpg,w_540,h_380,c_1,q_90,fd_0,e_.webp" 
                alt=""  
              />
              <br />  
              <p>
                O seu Chef Pessoal chegará com todos os ingredientes <br /> necessários para preparar a sua tão sonhada refeição.<br />
               

                Sente-se e desfrute do seu próprio show culinário!<br /> Assista e aprenda novas receitas enquanto<br /> seu chef prepara uma boa refeição na mesa do seu chef interno
              </p>
            </div>

            <div  className='bg-gray-100 rounded-lg p-4 items-center' >
              <h2 className='font-bold sm:text-xl text-center'>A Experiência</h2><br />
              <img className='rounded-lg w-15'
                src="https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/images/homepage/common/sections/your-private-chef-will-be-serving-each-dish.jpg,w_540,h_380,c_1,q_90,fd_0,e_.webp" 
                alt=""  
              />
              <br />
              <p>
              Seu chef cuidará da sua festa durante toda a experiência; e sim! Isso significa que os deveres do anfitrião estão fora da mesa para você.
              </p><br />
              
              <p>
                Serviço francês, estilo familiar ou buffet, a sua escolha! Queremos que você se sinta mimado.
              </p>
            </div>

            <div  className='bg-gray-100 rounded-lg p-4 items-center' >
              <h2 className='font-bold sm:text-xl text-center'>O final</h2><br />
              <img className='rounded-lg w-25'
                src="https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/images/homepage/common/sections/your-private-chef-will-leave-your-kitchen-spotless.jpg,w_540,h_380,c_1,q_90,fd_0,e_.webp" 
                alt=""  
              />
              <br />
              <p>
              No final da noite, tudo o que restará para você fazer é relaxar e aproveitar sua companhia.


              </p><br />
              
              <p>
              Queremos dizer: Um prato delicioso e com você apreciando tudo, para a despedida.
              </p>
            </div>

        
      </div>

      <p>Como Funciona ?</p>
      <p>Vejo os Melhores Chef de Cada Prato </p>

      

    </div>
    );
  };
  
  export default ChiefPessoal;