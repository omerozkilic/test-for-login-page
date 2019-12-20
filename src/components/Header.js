import React from "react";
import styled from "styled-components";
import logo from "../logo.png";

const HaderContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const Logo = styled.div`
  width: 100px;
  height: 30px;
  img {
    width: 100px;
  height: 30px;
  }
`;

export default () => (
  <HaderContainer>
    <Logo>
      <img src={logo} alt="logo" />
    </Logo>
  </HaderContainer>
);
