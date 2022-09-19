import React, { Component } from 'react';
import Navbar from '../navBar'
import TextBanner from '../text-banner';
import Features from '../Feature';
// import Produtos from '../vitrine';
import FoodSingle from '../FoodSingle';
// import Category from '../Category'


class perfilFood extends Component {
    render() {
        return (
            
            <div>
                <Navbar />
                <TextBanner />
                
                <Features />
                <FoodSingle />
               

            </div>
            );
        }
}
  
  export default perfilFood;
