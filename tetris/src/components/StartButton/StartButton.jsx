
// Install (styled-components) with NPM (npm install styled-components)
import styled from "styled-components";

const StyledStartButton = styled.button`
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 20px;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    border: none;
    color: white;
    background: #333;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;

    @media (max-width: 600px) {
        padding: 10px;
        font-size: 0.65rem;
        margin: 0 0 12px 0;
        border-width: 2px;
        border-radius: 12px;
    }
`;

const StartButton = ({ callback }) => (
    <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
