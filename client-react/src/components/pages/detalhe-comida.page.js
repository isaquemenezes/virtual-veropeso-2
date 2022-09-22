import React, { Component } from 'react';
import Navbar from '../navBar'
import TextBanner from '../text-banner';
import Features from '../Feature';
import FoodSingle from '../FoodSingle';
import Footer from '../Footer';


class perfilFood extends Component {
    render() {
        return (
            
            <div>
                <Navbar />
                <TextBanner />
                
                <Features />
                <FoodSingle />
                <Footer />
               

            </div>
            );
        }
}
  
  export default perfilFood;
