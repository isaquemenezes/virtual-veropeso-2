import React, { useState, useEffect } from "react";
import Axios from 'axios';


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
   
    <div className="App">
      <h1>RClient:  Hello React JS - CRUD APPLICATION </h1>
      <div className="__form">
        <label>User Name</label>
        <input 
          type="text" 
          name="username" 
          onChange={(e)=>{
            setUsername(e.target.value)
          }} 
        />

        <label>Cidade</label>
        <input 
          type="text" 
          name="cidade" 
          onChange={(e)=>{
            setCidade(e.target.value)
          }}
        />

        <button onClick={submitSet}>Enviar</button>

        {/* Exibindo uma Lista  */ }
        {
          userList.map(function (k){
            return (
              <h1>Id: {k.id} | Cidades: {k.cidade}</h1>
            )
          })
        }
      </div>
    </div>
    </>
  );
}

export default RegisterUser;