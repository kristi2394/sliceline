import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 15px;
`;

const Logo = styled(Title)`
  color: #fff;
  font-size: 25px;
  text-shadow: 1px 1px 1px #000;
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>Pizza Slice 🍕</Logo>
    </NavbarStyled>
  );
}
