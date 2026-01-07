
import styled from "styled-components";

export const StyledStage = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    background: #111;
    max-width: 25vw;
    grid-template-rows: repeat(${props => props.height}, calc(25vw / ${props => props.width}));


    @media (max-width: 600px) {
        max-width: 90vw;
        grid-template-rows: repeat(${props => props.height}, calc(90vw / ${props => props.width}));
    }
    
    @media (max-height: 600px) {
        max-width: 90vw;
        grid-template-rows: repeat(${props => props.height}, calc(90vw / ${props => props.width}));
    }

`;
