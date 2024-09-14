import styled from "styled-components";

const IconsContainer = styled.div`
display:flex;
gap:13px;
flex-wrap:wrap;
align-items:center;
`
const Btn = styled.button`
padding: 0.4rem;
    border: 3px solid lightgray;
    color: black;
    cursor: pointer;
    font-family: 'satoshi';
    border-radius: 5px;
    margin-left: 20px;
    transition:0.2s all;
    &:hover{
    background-color:gray;
    border-color:lightgray;
    color:white;
    -webkit-box-shadow: 0px 0px 17px 7px rgba(219,216,216,1);
-moz-box-shadow: 0px 0px 17px 7px rgba(219,216,216,1);
box-shadow: 0px 0px 17px 7px rgba(219,216,216,1);
    }
}`
export const ImgPrev = styled.img`
width: 30px;
height:30px;
    border-radius: 50%;
    cursor:pointer;`

export {IconsContainer,Btn}