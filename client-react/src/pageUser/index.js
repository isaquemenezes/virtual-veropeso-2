import React, { Component } from 'react';
import NavbarUser from '../components/user/navBarUser'
import TextBanner from '../components/text-banner';
import Features from '../components/Feature';
import Food from '../components/Food';
import Bids from '../components/Bids';
import Footer from '../components/Footer';

class IndexUser extends Component {
    render() {
        return (
            
            <div>
                
                <NavbarUser />
                <TextBanner />
                <Features />
                <Food />  
                <Bids />     
                <Footer />
                
            </div>
        );
    }
}
  
  export default IndexUser;
