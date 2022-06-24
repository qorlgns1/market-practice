import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
  position: absolute;
  top: 0;
  left: 0;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #dbdbdb;
  height: 48px;
  padding-top: 20px;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

export default function InputBox(props) {
  const { id, labelText, type, placeholder } = props;
  return (
    <InputContainer>
      <Label htmlFor={id}>{labelText}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </InputContainer>
  );
}
