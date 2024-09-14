import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const Head = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:1rem;
position:fixed;
top:0;
background-color:white;
z-index:9;
width:100%;
`
export const BasketText = styled.h3`
`
export const Image = styled.img`
    width: 60px;
    height: 80px;
    object-fit:cover;`
export const Li = styled.li`
        display: flex;
    flex-wrap: nowrap;
    padding:1rem 0rem 1rem 0rem;
    align-items: center;
    border-bottom:1px solid gray;
    position:relative;`
export const Name = styled.p`
font-weight:600;
padding:0.5rem;
font-family:'satoshi';
    `
export const Size = styled.p`
font-family:'satoshi';
font-weight:400;
color:gray;
padding:0.5rem;
padding-top:0rem;
    `
export const Price = styled.p`
font-family:'satoshi';
font-weight:400;
font-size:0.8rem;
color:gray;
padding:0.5rem;
padding-top:0rem;
    `
export const Xclose = styled(IoIosCloseCircleOutline)`
    font-size: 1.4rem;
    cursor: pointer;
    color: gray;
    position:absolute;
    bottom:50px;
    right:10px;
}`

export const BottomSide = styled.div`
display:flex;
justify-content:space-between;
position:relative;

`
export const Container123 = styled.div`
    display: flex;
    flex-direction: column;
    padding:1rem 0rem;
    gap: 0.5rem;`

export const BottomText = styled.p`
    font-size: 1.3rem;
    font-family: 'satoshi';`
export const Display = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    `
export const Button = styled.button`
        padding: 0.8rem 1.7rem;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: green;
    color: white;
    cursor:pointer;
    transition:0.3s all;
    &:hover{
    background-color:gray;
    color:white;}`

export const RemoveButton = styled(Button)`
background-color: red;
    `