import React, { Component } from "react";
import styled from "styled-components";
import MyPortfolioImages from "./Projects";
// import { usePopper } from 'react-popper';

const PortfolioContainer = styled.div`
  background-color: rgb(169, 175, 255);
  min-height: -webkit-fill-available;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  .fp-controlArrow.fp-next {
    right: 15px;
    border-width: 15px 0 15px 15px;
    border-color: transparent transparent transparent #fff;
  }
  .fp-controlArrow.fp-prev {
    left: 15px;
    border-width: 15px 15px 15px 0;
    border-color: transparent #fff transparent transparent;
  }

  img {
    max-width: 60%;
    max-height: 60%;
  }

  h3 {
    display: inline-block;
  }

  p {
    color: white;
  }

  /* @media (max-width: 768px) {
    img {
      max-width: 80%;
    }
  } */

`;
class Portfolio extends Component {
  render() {
    return MyPortfolioImages.map((MyPortfolioImages) => {
      return (
        <div key={MyPortfolioImages.id} className="fullpagewrapper">
          <PortfolioContainer>
            <div className="slide fp-auto-height-responsive">
              <img src={MyPortfolioImages.image} alt="work" />
              <div>
                <a href={MyPortfolioImages.demo}>
                  <h3>{MyPortfolioImages.title}</h3>
                </a>
                <h3>|</h3>
                <a href={MyPortfolioImages.github}>
                  <h3>{MyPortfolioImages.work}</h3>
                </a>
                <p>{MyPortfolioImages.description}</p>
              </div>
            </div>
          </PortfolioContainer>
        </div>
      );
    });
  }
}

export default Portfolio;
