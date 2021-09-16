import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 15px;
  position: fixed;
  width: 100%;
  z-index: 99999;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Title)`
  color: #fff;
  font-size: 25px;
  text-shadow: 1px 1px 1px #000;
`;

const UserStatus = styled.div`
  color: #fff;
  font-size: 12px;
  margin-right: 30px;
  display: flex;
  align-items: center;
`;

const LoginButton = styled.div`
  cursor: pointer;
  margin: 0 5px;
`;

export function Navbar({ login, loggedIn, logout }) {
  return (
    <NavbarStyled>
      <Logo>Pizza Slice 🍕</Logo>
      <UserStatus>
        {loggedIn === "loading" ? (
          "Loading..."
        ) : (
          <>
            👤 {loggedIn ? " Logged in. " : ""}
            {loggedIn ? (
              <LoginButton onClick={logout}> Log Out </LoginButton>
            ) : (
              <LoginButton onClick={login}> Log in / Sign up </LoginButton>
            )}
          </>
        )}
      </UserStatus>
    </NavbarStyled>
  );
}
