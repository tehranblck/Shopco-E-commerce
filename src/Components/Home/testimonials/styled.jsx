import styled from "styled-components";
import { Button } from "@mui/material";

const Container = styled.div`
padding:2rem 6rem;
.slick-slide{
margin-left:20px;}
.slick-list {
    margin-left: -20px; /* Kaydırma alanını dengelemek için */
  }
`
const CardTest = styled.div`
width: 100%;
    display: inline-block;
    border: 2px solid lightgray;
    padding: 1rem;
    border-radius: 20px;
    min-height:150px;
  
    `
const Testimonial = styled.p`
    font-family: "satoshi";
    font-size: 1rem;
    color: gray;`
const Name = styled.h4`
font-family: 'satoshi';
    font-weight: 800;
    margin-bottom: 5px;
    `

export const AddBasketButtonButton = styled.button`
     background: #222222 !important;
    color: white !important;
    border: 1px solid gray;
    transition: 0.3s all;
    padding: 0.7rem;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
    background-color:white!important;
    color:black!important;
    border:1px solid black;}
    `
export {Container,CardTest,Testimonial,Name}