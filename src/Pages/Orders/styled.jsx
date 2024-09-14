import styled from "styled-components";

export const OrdersContainer = styled.main`
padding: 2rem 6rem 10rem 6rem;
display:flex;
min-height:100vh;
`
export const ContainerTabs = styled.div`
width:65%;
height:max-content;
border:2px solid #1976d2;
border-radius:5px;
`
export const OrderSummary = styled.h4`
padding:1rem;
border-bottom:2px solid gray;`
export const Aside = styled.aside`
width:35%;
background-color:#e6e9ee;
height:max-content;
padding:1rem;
border-radius:5px;
`
export const Texts = styled.h4`
padding: 0.4rem 0;`
export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;`

export const Total = styled.div`
    padding: 0.3rem 0;
    display: flex;
    justify-content: space-between;`

export const Input = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.4rem;`

export const InputSize = styled.select`
    border: none;
    background-color: lightgray;
    padding: 0.3rem;
    outline:none;
    border-radius: 5px;`

export const InputSelf = styled.input`
    border: none;
    outline: none;
    padding: 0.4rem;
    border-radius: 5px;
    font-size: 1rem;`
export const Btn = styled.button`
    padding: 0.3rem;
    background-color: orange;
    border: none;
    border-radius: 5px;
    color: white;
    cursor:pointer;`
export const ButtonSubmit = styled(Btn)`
    background-color:#232323;
    padding:0.5rem;
    width:100%;`

export const NotReachable = styled.p`
    text-align:center;
    margin-top:40px;
    min-height:80vh;`