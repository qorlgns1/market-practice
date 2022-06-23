import React from "react";
import styled from "styled-components";
import logo from "../assets/logo/symbol-logo-white.svg";
import emailIcon from "../assets/icon-email.svg";
import signupIcon from "../assets/icon-signup.svg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--main-color);
  position: relative;
`;

const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 700px;
`;

const Logo = styled.img`
  width: 144px;
  height: 144px;
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginBox = styled.ul`
  width: 290px;
  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 150px;
`;

const EmailLoginLink = styled(Link)`
  display: block;
  font-family: "Spoqa Han Sans Neo";
  font-weight: bold;
  font-size: 12px;
  line-height: 44px;
  color: #767676;
  text-align: center;
  margin-bottom: 20px;
  height: 44px;
  border-radius: 44px;
  background-color: white;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 20px;
    background-image: url(${emailIcon});
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const SignUpLink = styled(EmailLoginLink)`
  &::before {
    background-image: url(${signupIcon});
  }
`;

export default function InitialLoginPage() {
  return (
    <Wrapper>
      <LoginWrapper>
        <Logo src={logo} />
        <LoginBox>
          <EmailLoginLink to="/login">이메일로 로그인</EmailLoginLink>
          <SignUpLink to="/signup">회원가입</SignUpLink>
        </LoginBox>
      </LoginWrapper>
    </Wrapper>
  );
}
