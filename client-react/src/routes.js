import React from 'react';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

import App from  "./App";
import IndexUser from "./pageUser/index";
import Help from "./components/pages/help.page";
import Login from "./components/pages/login.page";
import AboutChefPessoal from "./components/pages/about-chef-pessoal.page";
import RegisterUser from './components/pages/usuariocadastro.page';

import FoodSingle from './components/pages/detalhe-comida.page';

function routesClient () {

    return (
        <BrowserRouter>
            <Routes>
        
                <Route exact path='/' element={<App />} />
                <Route path='/index' element={<IndexUser />} />

                <Route path='/cadastro-usuario' element={<RegisterUser />} />                
                <Route path='/login' element={<Login />} />
                <Route path='/sobre-chef-pessoal' element={<AboutChefPessoal />} />
                
                <Route path='/help' element={<Help />} />

                <Route path='/food_single/:food_id' element={<FoodSingle />} />
            </Routes>
        </ BrowserRouter>
    )

}

export default routesClient;