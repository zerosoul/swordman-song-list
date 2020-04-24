/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 1rem 0;
  color: #ccc;
  text-align: center;
  .link {
    padding: 0 0.4rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      Created By
      <a className="link" target="_blank" href="//yangerxiao.com">
        Tristan
      </a>
    </StyledFooter>
  );
}
