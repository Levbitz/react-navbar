import React, { useState } from "react";
import styled from "styled-components";

import RightNav from "./RightNav";

const StyledBuger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;

  z-index: 20;
  display: none;

  @media (max-width: 780px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#ccc" : " #333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translate(100%)" : "translate(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

function Burger() {
  const [open, setopen] = useState(false);

  return (
    <>
      <StyledBuger open={open} onClick={() => setopen(!open)}>
        <div />

        <div />

        <div />
      </StyledBuger>
      <RightNav open={open} />
    </>
  );
}

export default Burger;
