import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import LodingPage from "./LodingPage";
import reset from "styled-reset";
import InitialLoginPage from "./InitialLoginPage";

const GlobalStyle = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
  }
`;

const HomePage = () => {
  const [isLoding, setIsLoding] = useState(false);
  setTimeout(() => {
    setIsLoding(true);
  }, 300);
  return (
    <>
      <GlobalStyle />
      {!isLoding ? <LodingPage /> : <InitialLoginPage />}
    </>
  );
};

export default HomePage;
