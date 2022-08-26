import React, { Component } from 'react';
import Navbar from './components/navBar'
import TextBanner from './components/text-banner'
import Produtos from './components/vitrine';


class App extends Component {
    render() {
        return (
            
            <div>
                <Navbar />
                <TextBanner />
                <Produtos />
            </div>
            );
        }
}
  
  export default App;
