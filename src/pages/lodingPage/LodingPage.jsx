import React from "react";
import styled from "styled-components";
import fullLogo from "../../assets/logo/full-logo.svg";

const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default function LodingPage() {
  return (
    <LogoWrapper>
      <Logo src={fullLogo}></Logo>
    </LogoWrapper>
  );
}
