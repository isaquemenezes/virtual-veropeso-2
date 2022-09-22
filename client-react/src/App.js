import React, { Component } from 'react';
import Navbar from './components/navBar'
import TextBanner from './components/text-banner';
import Features from './components/Feature';
import Food from './components/Food';
import Bids from './components/Bids';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            
            <div>
                
                <Navbar />
                <TextBanner />
                <Features />
                <Food />  
                <Bids />            
                <Footer />
            </div>
        );
    }
}
  
  export default App;
