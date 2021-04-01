import React from 'react';
import styled from 'styled-components';
import greenBlob from '../images/lime-blob.png';
import profilePic from '../images/bw.png';
import CoreWrapper from '../CSS/style.js';

const StyledContactInfo = styled.div`
    text-align: center;
    img {
        width: 55rem;
        height: 100%;
    }
`;

const StyledProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    img {
        height: 20rem;
    }
`;

const Contact = () => {
    return (
        <CoreWrapper>
            <StyledContactInfo>
                 <img src={greenBlob} alt="green-blob"/>
            </StyledContactInfo>
            
             <StyledProfile>
                  <img src={profilePic} alt="green-blob"/>
            </StyledProfile>

      </CoreWrapper>
    );
};

export default Contact;