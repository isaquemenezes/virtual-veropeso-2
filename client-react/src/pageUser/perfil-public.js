import React, { Component } from 'react';
import NavbarUser from '../components/user/navBarUser'
import TextBanner from '../components/text-banner';
import Features from '../components/Feature';
import Bids from '../components/Bids';
import Footer from '../components/Footer';
import ProfilePublicUser from '../components/user/ProfilePublic';

class PerfilPublicUser extends Component {
    render() {
        return (
            
            <div>
                
                <NavbarUser />
                <TextBanner />
                <Features />
                <ProfilePublicUser />  
                <Bids />     
                <Footer />
                
            </div>
        );
    }
}
  
export default PerfilPublicUser;