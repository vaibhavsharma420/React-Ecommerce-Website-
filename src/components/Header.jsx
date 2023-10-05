import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from "./NavBar"

const Header=()=>{
    return(
        <>
        <MainHeader>
            <NavLink to="/">
                <img className='img'src="public/Images/logo.png" alt="logo" />
                <p className='pa'>Vaibhav Store</p>
            </NavLink>
            <NavBar/>

            
        </MainHeader>

        </>
    );
};


const MainHeader= styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({theme})=> theme.colors.bg};
display:flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo{
    height: 5rem;
}
.img{
    height: 6rem;
    width: 6rem;
}
.pa{
    text: bold;
    text-align:center
}

`;

export default Header;