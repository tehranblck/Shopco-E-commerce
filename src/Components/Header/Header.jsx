import React from 'react';
import Nav from './nav/Nav';
import Icons from './Icons/Icons';
import Search from './Search/Search';
import Logo from './Logo/Logo';
import { Divider, HeaderStyled } from './styled';
import { useLocation } from 'react-router-dom';
import Container from '../Container';

function Header() {

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <Container >
      <HeaderStyled>
        <Logo  />
        <Nav />
        <Search />
        <Icons  />
      </HeaderStyled>
      {!isHomePage && <Divider />}
    </Container>
  );
}

export default Header;
