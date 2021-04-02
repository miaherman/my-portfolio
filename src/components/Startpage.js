import React from 'react';
import myLogo from '../images/logo.png'
import styled from 'styled-components';

const AboutMeDivContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(169, 175, 255);
    height: 100vh;
    
    img {
        padding-right: 2rem;
    }
    
    @media (max-width: 768px) {
        h1 {
            font-size: 4rem;
        }
    }
`;

const AboutMeText = styled.div`
    padding-left: 2rem;
`;



const Startpage = () => {

    return (
        <>
            <AboutMeDivContainer>
                <AboutMeText>
                    <h1>Hi! I'm Mia Herman</h1>
                      <text>Web development.
                        Graphic Design.
                        Illustration.
                        </text>
                </AboutMeText>
                <img src={myLogo}
                    alt="MiaHerman"/>
            </AboutMeDivContainer> 
        </>
                
    );
};

export default Startpage;