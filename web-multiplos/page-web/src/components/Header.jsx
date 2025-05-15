// import { Link } from "react-router-dom";
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #004aad;
  color: white;
  padding: 0 60px;
  text-align: center;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  & h1{
    color: #ffffff;
  }
  `;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const StyledLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  &:hover,
  &.active {
    color: white;
    text-decoration: overline;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <h1>Logo!</h1>
      <nav>
        <StyledLink to='/' exact activeClassName="active">Home | </StyledLink>
        <StyledLink to='/about' exact activeClassName="active">About | </StyledLink>
        <StyledLink to='/contacts' exact activeClassName="active">Contacts | </StyledLink>
      </nav>
     
    </HeaderContainer>
  );
};

export default Header;
