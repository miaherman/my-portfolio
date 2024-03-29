import React, { Component } from "react";
import styled from "styled-components";
import Footer from "./Footer.js";
import CoreWrapper from "../CSS/style";

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: -webkit-fill-available;
`;

const ResumeInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  min-height: -webkit-fill-available;
  padding: 2%;

  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.6rem;
    }
  }
`;
class Resume extends Component {
  render() {
    return (
      <CoreWrapper>
        <ResumeContainer>
          <ResumeInfo>
            <h3>EDUCATION</h3>
            <p>
              <b>HVE, Front End Development</b>
            </p>
            <p>Medieinstitutet, Sweden</p>
            &nbsp;
            <p>
              <b>Bachelors degree</b>
            </p>
            <p>Cultural Studies with a major in Art History</p>
            <p>Gothenburg University, Sweden</p>
            &nbsp;
            <p>
              <b>Diploma, Project Management</b>
            </p>
            <p>Martin College, Australia</p>
            &nbsp;
            <h3>WORK</h3>
            <p>Clandestino Festival 2020 - ongoing</p>
            <p>
              <i>Producer</i>
            </p>
            &nbsp;
            <p>KEKS 2018 - 2020</p>
            <p>
              <i>Business Developer</i>
            </p>
            &nbsp;
            <p>Gothenburg City 2014 - 2018</p>
            <p>
              <i>Youth/NGO Consultant</i>
            </p>
          </ResumeInfo>
          <ResumeInfo>
            <h3>TECHNICAL SKILLS</h3>
            <p>Adobe Photoshop</p>
            <p>Adobe Illustrator</p>
            <p>Adobe Premiere</p>
            <p>Final Cut Pro</p>
            &nbsp;
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>React.js</p>
            &nbsp;
            <h3>LANGUAGES</h3>
            <p>Swedish</p>
            <p>English</p>
            <p>Farsi/Dari</p>
            &nbsp;
            <h3>SOFT SKILLS</h3>
            <p>Excellent social skills</p>
            <p>Focused and dependable</p>
            <p>Team oriented</p>
            &nbsp;
            <p>Bonus: Moderately funny!</p>
          </ResumeInfo>
          <Footer />
        </ResumeContainer>
      </CoreWrapper>
    );
  }
}

export default Resume;
