import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 5000;
  background-color: #f4f4f4;
  padding: 20px;
`;

const GoToPages = styled.div`
  color: #5a5a5a;
  text-decoration: none;
  padding-right: 20px;
  &:hover {
    color: #3b6caa;
    text-decoration: underline;
  }
`;

const footerData = [
  {
    id: 1,
    value: "İletişim Sorumlusu"
  },
  {
    id: 2,
    value: "Gizlilik İlkeleri"
  },
  {
    id: 3,
    value: "Kullanım Koşulları"
  },
  {
    id: 4,
    value: "Erişilebilirlik"
  },
  {
    id: 5,
    value: "Tanımlama bilgisi tercihleri"
  }
];

export default () => (
  <FooterContainer>
    <div style={{ display: "flex" }}>
      {footerData.map(i => {
        return (
          <GoToPages key={i.id} to="/" href="/">
            {i.value}
          </GoToPages>
        );
      })}
    </div>
  </FooterContainer>
);
