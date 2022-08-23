import { useEffect } from "react";
import Axios from 'axios';


useEffect(function (){
  Axios.get("http://127.0.0.1:5000/api/select").then(function (response){
    // console.log(response);
    // console.log(response.data);
    setProductDataList(response.data);
  });
}, []);


//   {
//     productList.map(function (k){
//       return (
//         <h1>Id: {k.fk_nome_barraca} | Produto: {k.nome_produto} | Categoria:{k.categoria}</h1>
//       )
//     })
//   }


export const data = 
    productList.map(function (k){
         return (
          k.fk_nome_barraca, 
          k.nome_produto, 
          k.categoria,
          k.price
          
         )
      });
     
//    {
//       id: 2,
//       name: 'Bacon Cheeseburger',
//       category: 'burger',
//       image:
//         'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
//       price: '$',
//     },