import React from 'react';
import styled from 'styled-components';
import Footer from './Footer.js';
import CoreWrapper from '../CSS/style';

const StyledResume = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;

`;

const Resume = () => {
    return (
        <CoreWrapper>
            <StyledResume>
                <p>
                    Resume goes here!
                </p>
                <Footer/>
            </StyledResume>
        </CoreWrapper>
    );
};

export default Resume;