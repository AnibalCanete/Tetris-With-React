
import styled from "styled-components";

export const StyledStage = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    background: #111;
    max-width: 90vw;
    aspect-ratio: ${props => props.width} / ${props => props.height};


    @media (max-width: 600px) {
        max-width: 90vw;
        grid-template-rows: repeat(${props => props.height}, calc(90vw / ${props => props.width}));
    }
    
    @media (min-width: 900px) {
        max-width: 25vw;
    }

`;
