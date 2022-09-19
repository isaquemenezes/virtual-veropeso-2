import React, { Component } from 'react';
import Navbar from './components/navBar'
import TextBanner from './components/text-banner';
import Features from './components/Feature';
// import Produtos from './components/vitrine';
import Food from './components/Food';
// import Category from './components/Category'


class App extends Component {
    render() {
        return (
            
            <div>
                <Navbar />
                <TextBanner />
                {/* <Produtos /> */}
                <Features />
                <Food />
                {/* <Category /> */}

            </div>
            );
        }
}
  
  export default App;
