import React from "react";
import styled from "styled-components";
import greenBlob from "../images/lime-blob.png";
import profilePic from "../images/bw.png";
import CoreWrapper from "../CSS/style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Section } from "react-fullpage";

const StyledContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  //Grön blob
  img {
    height: auto;
    max-width: 80vh;
  }
  @media (max-width: 768px) {
    background-color: #c7efcf;
    height: 100vh;
    width: 100%;

    img {
      display: none;
    }
  }
  @media (max-width: 1024px) {
    img {
      height: auto;
      width: 40rem;
    }
  }
`;

const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    position: relative;
    width: auto;
    height: 100%;
    max-height: 25vh;
  }
  @media (max-width: 768px) {
    background-color: #fcb97d;
    height: 100vh;
    width: 100%;
  }

`;

const StyledText = styled.div`
  position: absolute;
  text-align: center;
  font-size: 2rem;
  padding: 0.5rem;

  a {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    position: relative;
    h2 {
      font-size: 2.5rem;
    }
    a {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    position: relative;
    h2 {
      font-size: 1.4rem;
    }
    a {
      font-size: 0.8rem;
    }
  }
`;

const Contact = () => {
  return (
    <Section>
      <CoreWrapper>
        <StyledContactInfo>
          <StyledText>
            <h2>CONTACT</h2>
            <a href="mailto:hello@whoismiaherman.com">
              hello@whoismiaherman.com
            </a>
            <p>
              <a href="https://github.com/miaherman">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;
              <a href="https://www.linkedin.com/in/mia-herman-9a0b26189/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </p>
          </StyledText>

          <img src={greenBlob} alt="green-blob" />
        </StyledContactInfo>
        <StyledProfile>
          <img src={profilePic} alt="green-blob" />
        </StyledProfile>
      </CoreWrapper>
    </Section>
  );
};

export default Contact;
