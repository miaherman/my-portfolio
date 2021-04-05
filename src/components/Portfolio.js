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
`;

class Portfolio extends Component {
  render() {
    return MyPortfolioImages.map((MyPortfolioImages) => {
      return (
        <div key={MyPortfolioImages.title} className="fullpagewrapper">
          <PortfolioContainer>
            <div className="slide">
                    {/* <a href={MyPortfolioImages.git}>Github</a> */}
                  <img src={MyPortfolioImages.image} alt="work" />
                <a href={MyPortfolioImages.url}>
                    <h3>{MyPortfolioImages.title}</h3>
                </a>
            </div>
          </PortfolioContainer>
        </div>
      );
    });
  }
}

export default Portfolio;
