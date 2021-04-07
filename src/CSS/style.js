import styled from 'styled-components';
import backgroundPattern from '../images/pattern.png'

export const CoreWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundPattern});
    height: 100vh;
    width: 100%;
    background-repeat: repeat;
    background-color: white;
    background-size: 100%;

    @media (max-width: 768px) {
        flex-direction: column;

    }

`;

export default CoreWrapper;