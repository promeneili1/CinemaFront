import React from "react";
import "./Header.styled.ts";
import "./Header.styled.ts";
import { Button, HeaderContainer, Nav, Title } from "./Header.styled";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Cinema</Title>
      <Nav>
        <ul>
         <li>
          <Button as="a" href="#">Home</Button>
          </li>
          <li>
          <Button as="a" href="#">Movies</Button>
          </li>
          <li>
          <Button as="a" href="#">About</Button>
          </li>
          <li>
          <Button as="a" href="#">Contact</Button>
         </li>
         
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
