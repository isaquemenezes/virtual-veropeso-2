import React from 'react';

import App from  "./App"
import About from './components/pages/about';
import Help from "./components/pages/help";
import Login from "./components/pages/login";

import RegisterUser from './components/pages/usuariocadastro';
import Feirante from './components/pages/feirante';

import Product from './components/pageSystemProduct/product';

import Manager from './components/pageUser/manager';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";


function routesClient () {

    return (
    <BrowserRouter>
        <Routes>
       
            <Route exact path='/' element={<App />} />

            <Route path='/cadastro-usuario' element={<RegisterUser />} />
            <Route path='/feirante' element={<Feirante />} />

            <Route path='/manager' element={<Manager />} />
            <Route path='/produtos' element={<Product />} />
            <Route path='/login' element={<Login />} />

            <Route path='/about' element={<About />} />

            <Route path='/help' element={<Help />} />
        </Routes>
    </ BrowserRouter>

    )

}

export default routesClient;