import React from 'react';
import myLogo from '../images/logo.png'
import styled from 'styled-components';

const AboutmeDiv = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    background-color: rgb(169, 175, 255);
    height: 100vh;
    `;



const Startpage = () => {

    return (
        <>
            <AboutmeDiv>
                <div>
                    <h1>Hi! I'm Mia Herman</h1>
                      <text>Web development.
                        Graphic Design
                        Illustrator
                        Jack of all trades.</text>
                </div>
                <img src={myLogo}
                    alt="MiaHerman"/>
                </AboutmeDiv> 
        </>
                
    );
};

export default Startpage;