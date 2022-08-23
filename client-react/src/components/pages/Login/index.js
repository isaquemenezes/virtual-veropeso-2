import React, { useState, useEffect } from "react";
import Axios from 'axios';


function LoginUser() {

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
      <h1>Entrar</h1>
      <div className="__form">
        <label>User Name</label>
        <input 
          type="text" 
          name="username" 
          onChange={(e)=>{
            setUsername(e.target.value)
          }} 
        />

        <label>Senha</label>
        <input 
          type="text" 
          name="cidade" 
          onChange={(e)=>{
            setCidade(e.target.value)
          }}
        />

        <button onClick={submitSet}>Entrar</button>

     
      </div>
    </div>
    </>
  );
}

export default LoginUser;
