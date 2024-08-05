import styled from "styled-components";
import WebHeader from '../assets/web-header.png';
import MobileHeader from '../assets/mobileHeader.png';

export const Container = styled.div`
	width: 100vw;
	background-image: url(${WebHeader});
	background-size:cover;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: ease-in-out 0.2s;
	padding: 10px;
	padding-inline: 20px;
	height: 8%;
	@media only screen and (max-width: 768px) {
		height: 10%;
		background-image: url(${MobileHeader});
	}
`;

export const FirstDiv = styled.div`
	display: flex;
	font-size: small;
`;
export const SecondDiv = styled.div`
	height: 100%;
	width: 17%;
	display: flex;
	color: white;
`;
export const ThirdDiv = styled.div`
	height: 100%;
	width: 33%;
	display: flex;
	justify-content: right;
	align-items: center;
	vertical-align: center;
	padding-right: 2%;
	color: white;
	@media only screen and (max-width: 768px) {
		width:50%
    } 
`;
export const Title = styled.h1`
	color: white;
	font-size: 2vw;
	margin: 0;
	@media only screen and (max-width: 768px) {
        font-size:3.5vw;
    } 
`;
export const NavButton = styled.div`
	color: white;
	justify-content:center;
	align-items:center;
	padding-left:50px;
	width:45%;
	font-size: 2vw;
	margin: 0;
	border-left:white solid 1px;
	@media only screen and (max-width: 768px) {
        font-size:3.5vw;
		padding-left:15px;
    } 
`;
