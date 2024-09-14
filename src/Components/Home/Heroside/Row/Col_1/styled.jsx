import styled from "styled-components";


const Col = styled.div`
width:60%;
    margin-top: 4rem;
`
const H1 = styled.h1`
    font-size: 2.5rem;
`
const Paragraph = styled.p`
color: gray;
    font-family: "satoshi";
    margin-top: 20px;`
const Button = styled.button`
margin-top: 30px;
    padding: 1rem 5rem;
    color: white;
    background-color: black;
    border-radius: 2rem;
    cursor: pointer;
    border:none;
    transition:0.3s background-color;
    
    &:hover{
    background-color:gray;
    border:none;
    }`
export{Col,H1,Paragraph,Button}