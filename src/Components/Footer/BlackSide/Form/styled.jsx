import styled from "styled-components";

const ContainerInput = styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;`


const InputText = styled.input`
padding: 0.6rem;
    width: 70%;
    font-size: 1rem;
    border-radius: 100px;
    border: none;
    outline: none;
    color: gray;`
const Button = styled.input`
    padding: 0.6rem;
    width: 70%;
    font-size: 1rem;
    border-radius: 100px;
    border: none;
    outline: none;
    margin-top:10px;
    color: black;`
    export {ContainerInput,InputText,Button}