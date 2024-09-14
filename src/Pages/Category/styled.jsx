import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";

const Container = styled.div`
padding:0rem 6rem 10rem 6rem;
min-height:200vh;
`
const Aside = styled.aside`
    width: 17%;
    border:1px solid lightgray;
    border-radius:10px;
    padding:15px;
    height: max-content;
    `
const Filter = styled.h5`
    font-family: 'satoshi';
    font-weight: 900;
    font-size: 1.1rem;
    padding: 10px 0;
    `
const Filters = styled.div`
display:flex;
justify-content:space-between;
border-bottom:1px solid lightgray;
padding-bottom:10px;
margin-bottom:10px;

`
const Text = styled.p`
font-family: 'satoshi';
    color: gray;
    font-weight:500;
    `
const Group = styled.div`
cursor:pointer;
padding:0.5rem 0rem;
display:flex;
justify-content:space-between;
`
const Icon = styled(FaChevronRight)`
color:gray;
`
const Size = styled.span`
    padding: 0.4rem;
    background-color: lightgray;
    border-radius: 30px;
    font-size: 0.8rem;
    font-family: 'satoshi';
    color: gray;
    cursor:pointer;`
const Sizes = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:0.4rem;
    padding-bottom: 20px;
    border-bottom: 1px solid lightgray;`
const Styles = styled.div`
    display: flex;
    flex-direction: column;`
const Styler = styled.span`
    font-family: 'satoshi';
    display: flex;
    justify-content: space-between;
    color: gray;
    padding: 0.4rem 0;
    cursor: pointer;`
const ButtonFilter = styled.button`
    width: 100%;
    padding: 0.7rem;
    border-radius: 20px;
    border:none;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-top:10px;
    transition:0.3s background-color;
    &:hover{
        background-color: gray;
    }`
const Main = styled.main`
    width:100%;
    padding-left:2rem;`
const TextCenter = styled.h4`
    font-size: 2rem;
    font-family: 'satoshi';
    font-weight: 900;
    text-align:center;
    padding: 0 0 1rem 2rem;`
const Products = styled.div`
display: flex;
    flex-wrap: wrap;
    justify-content:center;
    gap: 5rem;`
export{Container,Aside,Filter,Filters,Text,Group,Icon,Size,Sizes,Styles,Styler,ButtonFilter,Main,TextCenter,Products}