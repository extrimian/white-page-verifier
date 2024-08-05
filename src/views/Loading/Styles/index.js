import styled from "styled-components";
import WebSide from "../../../assets/web-box.png";
import MobileFooter from "../../../assets/mobileFooter.png";

const Container = styled.div`
    display:flex;
    flex-direction: row;
    height:50vh;
    width:52vw;
    margin-top: 10vh;
    margin-bottom: 10vh;
    border-radius:15px;
    border-bottom:#2ea8e1 solid 5px;
    @media only screen and (max-width: 768px) {
        height:100%;
        width:100vw;
        flex-direction: column;
        border-bottom:none;
        margin-top: 0vh;
        margin-bottom: 0vh;
        border-radius:0px;
    }
`;
const Login = styled.div`
    height:100%;
    width:75%;
    background-color:white;
    border-radius:10px 0px 0px 10px;
    padding:1rem;
    justify-content:space-around;
    box-shadow:-10px -10px 30px 0.5px rgba(125, 125, 125, 0.5); 
    @media only screen and (max-width: 768px) {
        height:80%;
        width:100%;
        justify-content:center;
        flex-direction: column;
        border-radius:0px;
        padding:2rem;
        box-shadow:none; 
    }
`;
const RightSide = styled.div`
    height:100%;
    width:25%;
    background-color:#2ea8e1;
    background-image: url(${WebSide});
    background-position:center;
    background-size: cover;
    border-radius:0px 10px 10px 0px;
    box-shadow: 10px -10px 30px 0.5px rgba(125, 125, 125, 0.5); 
    @media only screen and (max-width: 768px) {
        width:100%;
        height:20%;
        border-radius:0px;
        box-shadow:none;
        background-image: url(${MobileFooter});
        background-position:center;
    }
`;
const FormRow = styled.div`
    width:100%;
    height:33%;
    display:flex;
    flex-direction:column;
    @media only screen and (max-width: 768px) {
        width:100%;
        height:40%;
        justify-content:center;       
    }    
`;
const Input = styled.input`
    width:80%;
    height:2.5vw;
    @media only screen and (max-width: 768px) {
        height:10vw;
        width:100%;
    } 
`;
const Label = styled.label`
    font-size:1.3vw;
    color:grey;
    background-color:transparent;
    @media only screen and (max-width: 768px) {
        font-size:4vw;
        margin-bottom:2px;
    } 
`;
const Title = styled.h1`
    font-size:2.3vw;
    text-align:center;
    @media only screen and (max-width: 768px) {
        font-size:6vw;
    } 
`;
const Link = styled.a`
    font-size:1vw;
    @media only screen and (max-width: 768px) {
        font-size:4vw;
    } 
`;
const Button = styled.button`
    width:30%;
    height:10%;
    margin-left:35%;
    margin-right:auto;
    background-color:#38a1ff;
    border:none;
    border-radius:5px;
    color:white;
    &:hover{
        background-color:#a8d7ff;
        color:#36434e
    }
    
    @media only screen and (max-width: 768px) {
        width:30%;
        height:10%;
    }  
`;
const Loading = styled.img`
    margin-left:20%;
    margin-top:10%;
`;

export const Style = {Container , Login , RightSide , FormRow ,Input ,Label , Title , Link , Button , Loading} 