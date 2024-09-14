import styled from "styled-components";

export const Aside = styled.aside`
width: 17%;
    border:1px solid lightgray;
    border-radius:10px;
    padding:15px;
    height: max-content;
`
export const Span = styled.span`
font-family: 'satoshi';
display: flex;
 align-items: center;
  `
export const Padding = styled.div`
     font-size: 0.95rem;
    padding: 10px 0px 10px 0px;
    display: flex;
    align-items: center;`
export const Containerr = styled.div`
 padding:2rem 6rem 10rem 6rem;
 display:flex;`
export const H2 = styled.h2`
 padding: 1rem;
    font-size: 1rem;
    border-bottom: 1px solid lightgray;`
export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;`
export const Image = styled.img`
          min-width: 200px;
    border-radius: 50%;
    position: relative;
    width: 200px;
    height: 200px;
    object-fit: cover;
}`
export const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;`
export const Input = styled.div`
        font-family: 'satoshi';
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;`
    export const InputType = styled.input`
        padding: 0.3rem;
    font-size: 1rem;
    width:200px;
    color: black;
    font-family: 'satoshi';`

export const ContainerPhoto = styled.div`
position:relative;
display:flex;
align-items:center;
    `
export const SetPhoto = styled.div`
position:relative;
display: flex;
    flex-direction: column;
    align-items: center;
    `

export const Div = styled.div`
        width: 200px;
    height: 200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border-radius: 50%;
    overflow: hidden;
    
    `
export const ButtonSetPhoto = styled.button`
    padding:1.5rem;
    border:none;
    background-color: lavender;
    color:black;
    font-weight:600;
    cursor:pointer;
    `
export const ButtonUpload = styled.button`
    padding: 0.5rem;
    width: 200px;
    border-radius: 20px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    background-color: lightgray;
    transition:0.3s all;
    &:hover{
    background-color:gray;
    color:white;
    }`
export const SubmitButton = styled.input`
        padding: 0.5rem;
    width: 200px;
    border-radius: 20px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    color:white;
    font-weight: 600;
    background-color: #2d79f3;
    transition: 0.3s all;`

    