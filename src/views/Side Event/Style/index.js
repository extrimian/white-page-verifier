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
    border-bottom: #2ea8e1 solid 5px;
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
const QRContainer = styled.div`
    position:relative;
    height:100%;
    width:75%;
    display:flex;
    flex-direction:column;
    background-color:white;
    border-radius:10px 0px 0px 10px;
    padding:1rem;
    justify-content:space-around;
    text-align:center;
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
const ResultContainer = styled.div`
    position:absolute;
    left:0;
    z-index:1;
    height:100%;
    width:100%;
    background-color:#7a7a7a7e;
    backdrop-filter: blur(10px);
    border-radius:10px 0px 0px 10px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const RightSide = styled.div`
  height: 100%;
  width: 35%;
  background-color: #2ea8e1;
  background-image: url(${WebSide});
  background-size: cover;
  background-position:center;
  border-radius: 0px 10px 10px 0px;
  box-shadow: 10px -10px 30px 0.5px rgba(125, 125, 125, 0.5);
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 20%;
    border-radius: 0px;
    box-shadow: none;
    background-image: url(${MobileFooter});
    background-size:cover;
    background-position:center;
  }
`;
const Button = styled.button`
    width:40%;
    height:10%;
    margin-left:30%;
    margin-right:auto;
    background-color:#38a1ff;
    border:none;
    border-radius:5px;
    color:white;
    font-size:1vw;
    &:hover{
        background-color:#a8d7ff;
        color:#36434e
    }
    
    @media only screen and (max-width: 768px) {
        width:40%;
        height:5%;
        font-size:3vw;
    }  
`;

const QRimage = styled.img`
    width: 60%;
    padding-bottom: 5%;
`;
const BlurDiv = styled.div`
  position:absolute;
  background-color:rgb(0,0,0,0.5);
  width:100%;
  height:100%;
  justify-content:center;
`
const BlurContainer = styled.div`
    position:relative;
    display:flex;
    background-color:#cfcfcf;
    flex-direction: column;
    height:50vh;
    width:52vw;
    margin-top: 17vh;
    margin-bottom: 10vh;
    margin-inline: auto;
    border-radius:15px;
    border-bottom:#2ea8e1 solid 5px;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-size:20px;
    @media only screen and (max-width: 768px) {
        background-color:rgb(207, 207, 207,0.8);
        height:100%;
        width:100vw;
        flex-direction: column;
        border-bottom:none;
        margin-top: 0vh;
        margin-bottom: 0vh;
        border-radius:0px;
        font-weight: bold;
        font-size:17px;
    };
`;
const BlurButton = styled.div`
    width:40px;
    height:40px;
    background-color:rgb(145, 145, 145,0.8);
    border-radius:50px;
    border:black 1px solid;
    position:absolute;
    right:20px;
    top:20px;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding-top:5px;
    @media only screen and (max-width: 768px) {
        right:40px
    }

`;

const InnerQrContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    padding:15px;
`;
const QR = styled.img`
    width:70%;
`;
export const Style = {
    Container,
    QRContainer,
    RightSide,
    Button,
    QRimage,
    BlurButton,
    BlurContainer,
    BlurDiv,
    ResultContainer,
    InnerQrContainer,
    QR
};