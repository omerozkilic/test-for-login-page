import React from 'react';
import styled from 'styled-components';

const HaderContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const Logo = styled.div`
  font-size: 25px;
  margin-left: 20px;
`;

export default () => (
  <HaderContainer>
    <Logo>IBM</Logo>
  </HaderContainer>
);
