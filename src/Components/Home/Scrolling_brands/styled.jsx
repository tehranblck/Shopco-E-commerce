import styled, { keyframes } from "styled-components";


const scroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;


const Stripe = styled.div`
  background-color: black;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 25px 0;
`;


const ScrollingText = styled.div`
  display: inline-block;
  color: white;
  font-size: 24px;
  animation: ${scroll} 40s linear infinite;
`;


export{scroll,ScrollingText,Stripe}