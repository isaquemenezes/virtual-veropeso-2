import React, { Component } from 'react';
import Navbar from '../navBar'
import TextBanner from '../text-banner';
import Features from '../Feature';
import ChiefPessoal from '../ChefPessoal';
import Footer from '../Footer';
import Bids from '../Bids';



class AboutChefPessoal extends Component {
    render() {
        return (
            <>
            <Navbar />
            <TextBanner />
            <Features />
            <ChiefPessoal />
            <Bids />
            <Footer />
            </>
        )
    }
}

export default AboutChefPessoal;