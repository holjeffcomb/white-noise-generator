import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  p {
    font-size: 0.5em;
    margin: 80px;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <p>&copy; Jeff Holcomb {new Date().getFullYear()}</p>
    </FooterStyle>
  );
}
