import React, { Component } from 'react';
import Navbar from './components/navBar'
import TextBanner from './components/text-banner';
import Features from './components/Feature';
import Footer from './components/Footer';
import Food from './components/Food';


class App extends Component {
    render() {
        return (
            
            <div>
                
                <Navbar />
                <TextBanner />
                <Features />
                <Food />              
                <Footer />
            </div>
        );
    }
}
  
  export default App;
