import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

//import log
import Logo from "../img/log.png";

//css
import "./Nav.css";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 10px 0;
  }
`;

function Navbar() {
  return (
    <Nav className="myNav">
      <div className="logo">
        <img width={100} src={Logo} alt="" />
      </div>

      <Burger />
    </Nav>
  );
}

export default Navbar;
