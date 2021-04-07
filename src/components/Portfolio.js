import React, { Component } from "react";
import styled from "styled-components";
import MyPortfolioImages from "./Projects";
// import { usePopper } from 'react-popper';

const PortfolioContainer = styled.div`
  background-color: rgb(169, 175, 255);
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;  

  img {
    width: auto;
    height: 80vh;
  }

  h3 {
    display: inline-block;
  }

@media (max-width: 1024px) {

        img {
            max-width: 90%;
            height: auto;
        }
    }

  @media (max-width: 768px) {

        img {
            max-width: 90%;
            height: auto;
        }
    }

`;
class Portfolio extends Component {
  render() {
    return MyPortfolioImages.map((MyPortfolioImages) => {
      return (
        <div key={MyPortfolioImages.title} className="fullpagewrapper">
          <PortfolioContainer>
            <div className="slide fp-auto-height-responsive">
                <img src={MyPortfolioImages.image} alt="work" />
              <div>
              <a href={MyPortfolioImages.demo}>
                <h3>Demo</h3>
              </a>
              <h3>
                    |
                  </h3>
              <a href={MyPortfolioImages.git}>
                <h3>Github</h3>
              </a>
              </div>
            </div>
          </PortfolioContainer>
        </div>
      );
    });
  }
}

export default Portfolio;
