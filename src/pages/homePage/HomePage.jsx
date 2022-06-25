import React, { useState } from "react";
import LodingPage from "../lodingPage/LodingPage";
import InitialLoginPage from "../loginPage/InitialLoginPage";

const HomePage = () => {
  const [isLoding, setIsLoding] = useState(false);
  setTimeout(() => {
    setIsLoding(true);
  }, 300);
  return <>{!isLoding ? <LodingPage /> : <InitialLoginPage />}</>;
};

export default HomePage;
