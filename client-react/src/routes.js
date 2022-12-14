import React from 'react';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

import App from  "./App";
import IndexUser from "./pageUser/index";
import PerfilPublicUser from './pageUser/perfil-public';
import AboutChefPessoal from "./components/pages/about-chef-pessoal.page";
import FoodSingle from './components/pages/detalhe-comida.page';

function routesClient () {

    return (
        <BrowserRouter>
            <Routes>
        
                <Route exact path='/' element={<App />} />
                <Route path='/index' element={<IndexUser />} />
                <Route path='/sobre-chef-pessoal' element={<AboutChefPessoal />} />
                <Route path='/food_single/:food_id' element={<FoodSingle />} />
                <Route path='/perfil-public/:perfil_id' element={<PerfilPublicUser />} />

            </Routes>
        </ BrowserRouter>
    )

}

export default routesClient;