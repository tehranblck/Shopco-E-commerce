import styled from "styled-components";
import { Link } from "react-router-dom";
const H2 = styled.h2`
margin-bottom:15px;
font-family:"satoshi";
font-weight:500;
`
const NavLinks = styled.ul`
display: flex;
    flex-direction: column;
    gap: 10px;
    `
const NavA = styled(Link)`
font-family: "satoshi";
    color: gray;`

export {H2,NavLinks,NavA}