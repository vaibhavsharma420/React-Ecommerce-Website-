import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Products from '../Products';
import {Button} from './Button';

const HeroSection=(props)=>{
    return(
        <>
            <Wrapper>
                <div className='container'>
                    <div className='grid grid-two-column'>
                        <div className="hero-section-data">
                            <p className='intro-data'>Welcome to the Store!</p>
                            <h1>{props.title}</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it 
                            to make a type specimen book.</p>
                            <NavLink to="/products" >
                                <Button>Shop Now</Button>
                            </NavLink>
                            

                        </div>
                        <div className='hero-section-image'>
                            <figure>
                                <img src="public\Images\hero.jpg" alt="family-images" className='img-style' />
                            </figure>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

const Wrapper= styled.section`
padding: 12rem 0;

img{
    min-width: 10rem;
    height: 10rem;
}

.hero-section-data{
    p{
        margin: 2rem 0;
    }
    h1{
        text-transform: capitalize;
        font-weight:bold;
    }

    .intro-data{
        margin-bottom: 0;
    }
}
.hero-section-image{
    width:100%;
    height:auto;
    display:flex;
    justify-content: center;
    align-item: center;
}
figure{
    position:relative;

    &::after{
        content:"";
        width: 60%;
        height: 80%;
        background-color: rgba( 81, 56, 238, 0.4);
        position:absolute;
        left: 50%;
        top: -5rem;
        z-index: -1;
    }
}
.img-style{
    width:100%;
    height:auto;
}

@media(max-width: ${({theme})=> theme.media.mobile})
{
    .grid{
        gap: 10rem;
    }
    figure::after{
        content:"";
        width:50%;
        height:100%;
        left:0;
        top:10%;
        background-color: rgba(81,56,238, 0.4);
    }
}

`;

export default HeroSection;