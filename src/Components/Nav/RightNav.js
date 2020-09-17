import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  z-index: 10;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 700px) {
    flex-flow: column nowrap;
    background: #002538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0px;
    right: 0px;
    height: 100vh;
    width: 50%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

function RightNav({ open }) {
  return (
    <Ul open={open}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-us">About</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
      <li>
        <Link to="/our-prices">Pricing</Link>
      </li>
    </Ul>
  );
}

export default RightNav;
