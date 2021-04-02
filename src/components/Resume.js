import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from './Footer.js';
import CoreWrapper from '../CSS/style';

class Resume extends Component {

  render () {
    return (
        <CoreWrapper>
            <ResumeContainer>
                <Footer/>
            </ResumeContainer>
        </CoreWrapper>
        );
    };
  }

  const ResumeContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
  `;

export default Resume;