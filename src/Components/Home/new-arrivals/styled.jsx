import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";



const FaStar1 = styled(FaStar)`
color:rgb(182, 155, 3);`
const FaStarHalfAlt1 = styled(FaStarHalfAlt)`
color:rgb(182, 155, 3);`



const Cardsss = styled.div`
display: flex;
gap:1rem;
justify-content:${({ $isSearchPage }) => ($isSearchPage ? 'center' : null)};
    padding: 0rem 6rem;
`
const Imgs = styled.img`
max-width:100%;
width:100%;
border-radius:10px;


`
const H2 = styled.h2`
text-align:center;
padding:2rem 0rem;`

const Name = styled.h4`
font-family:"satoshi";
font-size:1rem;
max-width: 270px;
margin-bottom:7px;
`
const Cardtt = styled.div`
  width: 25%;
  max-width: 25%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  border: ${({ $isSearchPage }) => ($isSearchPage ? '1px solid black' : 'none')};
  padding: ${({ $isSearchPage }) => ($isSearchPage ? '0.5rem' : '0')};
  cursor: pointer;
  transition: 0.3s scale;
  
`;


const ButtonAll = styled.button`
padding: 1rem 3rem;
    border-radius: 30px;
    font-weight: 500;
    font-family: "satoshi";
    border: 1px solid lightgray;
    margin: 2rem auto;
    cursor:pointer;
    transition:0.3s background-color,color;
    &:hover{
    background-color:gray;
    color:white;}
    `
const Divider = styled.span`
padding:0 6rem;
height:1px;
background-color:lightgray;
text-align:center;
width:80%;`

const Rate = styled.p`
    font-family:"satoshi";
    font-size:1rem;
    margin-left:5px;`
export const Flex = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.3rem;
    `
export {Imgs,Cardsss,H2,Cardtt,Name,FaStar1,FaStarHalfAlt1,ButtonAll,Rate,Divider}