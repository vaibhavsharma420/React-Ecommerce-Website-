import React from 'react';
import HeroSection from './components/HeroSection';
import {useProductContext} from "./context/ProductContext"

const About=()=>{

    const {myName}= useProductContext();

    return(
        <>
            {myName}
            <HeroSection title="About Us!"/>
        </>
    );
};

export default About;