
import styled from "styled-components";
// BG Image
import bgImage from "../../assets/images/bg.jpg";

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;

    @media (max-width: 600px) {
        background-position: center;
    }

`;

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 100%;
        max-width: 300px;
        text-align: center;
        display: block;
        padding: 0 20px;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        padding: 20px;
        
        aside {
            max-width: 100%;
            margin-top: 10px;
            text-align: center;
            padding: 5px;
            font-size: 0.75rem;
        }
    }
}
`;
