import React from "react";
import MyLogo from "../images/logo.png";
import styled from "styled-components";

const AboutMeDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #a9afff;
  height: 100vh;

  img {
    padding-right: 2rem;
    width: 100%;
    height: auto;
    max-width: 30rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 4rem;
    }

    img {
      max-width: 40%;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const AboutMeText = styled.div`
  padding-left: 2rem;
`;

const Startpage = () => {
  return (
    <div className="section">
      <AboutMeDivContainer>
        <AboutMeText>
          <h1>Hi! I'm Mia Herman</h1>
          <p>Web development. Graphic Design. Illustration.</p>
        </AboutMeText>
        <img src={MyLogo} alt="MiaHerman" />
      </AboutMeDivContainer>
    </div>
  );
};

export default Startpage;
