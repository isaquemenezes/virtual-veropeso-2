import React, { Component } from 'react';
import Navbar from '../navBar'
import TextBanner from '../text-banner';
import Features from '../Feature';
import ChefPessoal from '../personalChef/ChefPessoal';
import Footer from '../Footer';
import Bids from '../Bids';


class AboutChefPessoal extends Component {
    render() {
        return (
            <>
            <Navbar />
            <TextBanner />
            <ChefPessoal /> 
            <Bids />
            <Features />
            <Footer />
            </>
        )
    }
}

export default AboutChefPessoal;