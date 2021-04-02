import React from 'react';
import styled from 'styled-components';


const Footer = () => {
    return (
        <StyledFooter>
            <text>All content copyright Mia Herman 2020 ©</text>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    background-color: rgb(169, 175, 255);
    text-align: center;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    left:0;
    right:0;
`;

export default Footer;