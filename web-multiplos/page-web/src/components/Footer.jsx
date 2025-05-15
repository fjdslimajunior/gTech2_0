import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #004aad;
  color: white;
  /* padding: 0 60px; */
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  & footer {
    height: 25vh;
    align-items: end;
    &footer-content{
      border: 10px solid #0a4 ;
    }
    & a:hover,
    a:visited {
      text-decoration: none;
      color: #ffffff;
    }
    & ul,
    li {
      list-style-type: none;
    }
  }
`;



const Footer = () => {
    return (
      <FooterContainer>
        <footer className='footer-content'>
          <ul>
            <li>
              <a href="#">Organizadores</a>
            </li>
            <li>
              <a href="#">Ajuda</a>
            </li>
            <li>
              <a href="#">Comentários/Elogios</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </footer>
      </FooterContainer>
    );
}
 
export default Footer;