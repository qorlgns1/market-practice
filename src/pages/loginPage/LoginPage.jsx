import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputBox from "../../components/input/InputBox";

const Wrapper = styled.section`
  padding: 30px 34px 0;
  width: 322px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  margin-top: 30px;
  height: 44px;
  border-radius: 44px;
  background-color: var(--main-disabled-color);
  width: 100%;
  border: 0;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`;

const SignUpLink = styled(Link)`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
  text-decoration: none;
`;

export default function Login() {
  return (
    <Wrapper>
      <Title>로그인</Title>
      <form action="" method="post">
        <InputBox
          id="emailInput"
          type="email"
          labelText="이메일"
          placeholder="이메일 주소를 입력해 주세요."
        />
        <InputBox
          id="pwInput"
          type="password"
          labelText="비밀번호"
          placeholder="비밀번호를 설정해 주세요."
        />
        <Button>로그인</Button>
      </form>
      <SignUpLink to="/signup">이메일로 회원가입</SignUpLink>
    </Wrapper>
  );
}
