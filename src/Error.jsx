import { Button } from './components/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

 const Error=()=>{
    return(
        <>
            <Wrapper>
                <div className='container'>
                    <div>
                        <h2>Error 404</h2>
                        <h3>Oh No! You're Lost!</h3>
                        <p>The page you're looking for does not exist, click on this button to get to the Home Page</p>
                        <NavLink to="/">
                        <Button>Home</Button>
                        </NavLink>
                    </div>
                </div>
            </Wrapper>
        </>
    );
 };

 const Wrapper= styled.section`
 
 .container{
    padding: 9 rem 0;
    text-align:center;

    h2{
        font-size: 7rem;
    }
    h3{
        font-size: 5rem;
    }
    p{
        margin: 2rem 0;
        font-size: 2rem;
    }
 }

 
 
 `;

 export default Error;