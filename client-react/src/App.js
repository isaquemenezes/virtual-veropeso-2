import React, { Component } from 'react';

import Navbar from './components/navBar'
import TextBanner from './components/text-banner'
import DescProducts from './components/texto-produtos'
import Produtos from './components/vitrine';
import Category from './components/categorias';

class App extends Component {
    render() {
        return (
            
            <div>
                <Navbar />
                <TextBanner />
                {/* <DescProducts /> */}
                <Produtos />
                  {/*<Category /> */}
            </div>
            );
        }
}
  
  export default App;
