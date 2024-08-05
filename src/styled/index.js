import styled from "styled-components";

const View = styled.div`
    display: flex;
    flex-direction: column ;
    width: 100vw;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
`;
const Lower = styled.div`
    width: 100vw;
    background-color: black;
    height: 8vh;
    color: white;
    @media only screen and (max-width: 768px) {
        height: 2vh;
    } 
`;
const Body = styled.div`
    height:100%;
    width: 100vw;
    display:flex;
    justify-content:center;
    border-bottom:4px solid #2ea8e1;
    @media only screen and (max-width: 768px) {
        border-bottom:none;
    }   
`;


export const General = {
    View,
    Lower,
    Body
}