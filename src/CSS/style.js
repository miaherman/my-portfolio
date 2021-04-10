import styled from "styled-components";
import backgroundPattern from "../images/pattern.png";

export const CoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundPattern});
  height: 100vh;
  width: auto;
  background-repeat: repeat;
  background-color: white;
  background-size: cover;

  @media (max-width: 280px) {
    flex-direction: column;
  }
`;

export default CoreWrapper;
