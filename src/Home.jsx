import React from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeaturedProducts from './components/FeatureProducts';


const Home=()=>{
    return(
        <>
            <HeroSection title="Vaibhav Store"/>
            <FeaturedProducts/>
            <Services/>
            <Trusted/>
            
            
            
        </>
    );
};



export default Home;