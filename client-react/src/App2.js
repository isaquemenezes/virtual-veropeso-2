import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/routes/Home";
import About from "./components/routes/About";

function App() {

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
    <BrowserRouter>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    

    <div className="App">
      <h1>Client:  Hello React JS - CRUD APPLICATION </h1>
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

export default App;
