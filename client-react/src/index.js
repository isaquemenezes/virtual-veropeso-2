import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from  "./App"
import About from './components/pages/about';
import Help from "./components/pages/help";
import Login from "./components/pages/login";
import RegisterUser from './components/pages/usuariocadastro';
import RegisterProduct from './components/pageUser/register-product';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <BrowserRouter>
    <Routes>
        {/* page principal  */}
        <Route exact path='/' element={<App />} />

        <Route path='/cadastro-usuario' element={<RegisterUser />} />
        <Route path='/register-product' element={<RegisterProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/help' element={<Help />} />
    </Routes>
</ BrowserRouter>
    
);
