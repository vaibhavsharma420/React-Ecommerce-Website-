import React from 'react';
import styled from 'styled-components';

const Contact=()=>{
    const Wrapper= styled.section`

        padding: 9rem 0 5rem 0rem;
        text-align: center;

        .container{
            margin-top: 6rem;

            .contact-form{
                max-width: 50rem;
                margin: auto;

                .contact-inputs{
                    display:flex;
                    flex-direction: column;
                    gap: 3rem;

                    input[type="submit"]{
                        cursor: pointer;
                        transition: all 0.2s;

                        &:hover{
                            background-color: ${({theme})=> theme.colors.white};
                            border: 1px solid ${({theme})=> theme.colors.btn};
                            color: ${({theme})=> theme.colors.btn};
                            transform: scale(0.9);
                        }
                    }
                }
            }
        }
    
    `;
    return(
        <>
            <Wrapper>
                <h2 className='common-heading'>Contact Page</h2>

                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.666599839699!2d80.96372567618714!3d26.850554562757587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd03fd06249f%3A0x697f4e6a7f8ada13!2sGomti%20River%20Front%20Side!5e0!3m2!1sen!2sin!4v1694598254211!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{border:0}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">

                </iframe>

                <div className='container'>
                    <div className='contact-form'>
                        <form action='https://formspree.io/f/mpzglwkp' method='POST' className='contact-inputs'>
                            <input 
                            type='text' 
                            placeholder='Username' 
                            name="username" 
                            required 
                            autoComplete='off'/>

                            <input 
                            type='email' 
                            placeholder='Email' 
                            name='email' 
                            required autoComplete='off'/>

                            <textarea 
                            name="Message"
                            placeholder="Enter your message." 
                            rows='10' 
                            cols='30' 
                            required autoComplete='off'>
                            </textarea>
                            <input type='submit' value="Submit"/>
                        </form>
                    </div>
                </div>

            </Wrapper>
        </>
    );
};

export default Contact;