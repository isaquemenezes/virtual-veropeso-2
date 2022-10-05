import React, { Component } from 'react';
import Navbar from '../navBar'
import TextBanner from '../text-banner';
import Features from '../Feature';
import FoodSingle from '../FoodSingle';
import Footer from '../Footer';
import BidsChef from '../personalChef/BidsChef';


class perfilFood extends Component {
    render() {
        return (
            
            <div>
                <Navbar />
                <TextBanner />
                <Features />
                <FoodSingle />
                <BidsChef />
                <Footer />              
            </div>
            );
        }
}
  
  export default perfilFood;
