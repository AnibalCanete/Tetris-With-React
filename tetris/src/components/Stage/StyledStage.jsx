
import styled from "styled-components";

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.height}, calc(25vw / ${props => props.width}));
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 25vw;
    background: #111;
    height: auto;
    aspect-ratio: ${props => props.width} / ${props => props.height};

    @media (max-width: 600px) {
        max-width: clamp(280px, 80vw, 360px);
        grid-template-rows: repeat(${props => props.height}, calc(90vw / ${props => props.width}));
    }
`;
