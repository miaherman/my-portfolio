import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: rgb(169, 175, 255);
  text-align: center;
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>All content copyright Mia Herman 2021 ©</p>
    </StyledFooter>
  );
};

export default Footer;
