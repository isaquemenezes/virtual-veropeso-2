import React from 'react';

import App from  "./App"
import About from './components/pages/about.page';
import Help from "./components/pages/help.page";
import Login from "./components/pages/login.page";
import AboutChiefPessoal from "./components/pages/about-chef-pessoal.page";
import RegisterUser from './components/pages/usuariocadastro.page';
import Feirante from './components/pages/feirante.page';
import FoodSingle from './components/pages/detalhe-comida.page';

import Manager from './components/pageUser/manager';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";


function routesClient () {

    return (
        <BrowserRouter>
            <Routes>
        
                <Route exact path='/' element={<App />} />

                <Route path='/cadastro-usuario' element={<RegisterUser />} />
                <Route path='/feirante' element={<Feirante />} />
                
                <Route path='/login' element={<Login />} />
                <Route path='/chef-pessoal' element={<AboutChiefPessoal />} />
                <Route path='/help' element={<Help />} />
                <Route path='/manager' element={<Manager />} />

                <Route path='/food_single/:food_id' element={<FoodSingle />} />


            </Routes>
        </ BrowserRouter>
    )

}

export default routesClient;