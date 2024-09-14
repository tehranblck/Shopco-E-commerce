import styled from "styled-components";
import { Link } from "react-router-dom";


export const Name = styled.p`
font-family:'satoshi'`

export const Links = styled(Link)`
font-family:'satoshi'
`
export const Profile = styled.div`
transform: ${props => props.$visible ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${props => props.$visible ? "1" : "0"};
  transition: transform 0.3s ease, opacity 0.3s ease;
display:flex;
flex-direction:column;
align-items:center
`