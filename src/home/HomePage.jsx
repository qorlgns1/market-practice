import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import LodingPage from "./LodingPage";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const HomePage = () => {
  const [isLoding, setIsLoding] = useState(false);
  setTimeout(() => {
    setIsLoding(true);
  }, 1000);
  return (
    <>
      <GlobalStyle />
      {!isLoding ? <LodingPage /> : <div>12345</div>}
    </>
  );
};

export default HomePage;
