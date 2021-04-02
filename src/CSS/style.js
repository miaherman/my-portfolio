import styled from 'styled-components';
import backgroundPattern from '../images/pattern.png'

export const CoreWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundPattern});
    height: 100vh;
    background-repeat: repeat;
    background-size: 100%;

`;

export default CoreWrapper;