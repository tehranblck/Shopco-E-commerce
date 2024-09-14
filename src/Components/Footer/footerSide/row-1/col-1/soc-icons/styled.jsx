import styled from "styled-components";
const Container = styled.div`
display:flex;
gap:5px;
`
const Item = styled.div`
    padding: 0.4rem;
    border-radius: 50%;
    border: 2px solid gray;
    cursor: pointer;
    transition:0.4s background-color;
    &:hover{
    background-color:gray;
    }
`
export {Item,Container}