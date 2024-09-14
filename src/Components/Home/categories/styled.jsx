import styled from "styled-components";

const Container = styled.div`
padding:2rem 6rem;
`

const Gray = styled.div`
background-color:lightgray;
border-radius:30px;
padding:2rem;
display:flex;
flex-direction:column;
gap:1rem;
`
const Flex = styled.div`
width:100%;
 display:flex;
 gap:1rem;
 

`
const Image1 = styled.div`
width:40%;
position:relative;
cursor:pointer;`
const Image2 = styled.div`
width:60%;
position:relative;
cursor:pointer;`
const Image = styled.img`
border-radius:10px;
width:100%;
max-height:270px;

`


const Text = styled.p`
font-size:2rem;
position:absolute;
padding:2rem;
top:0;
`


export {Container,Gray,Flex,Image,Image1,Image2,Text}