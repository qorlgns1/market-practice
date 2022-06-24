import React, { useState } from "react";
import LodingPage from "./LodingPage";
import InitialLoginPage from "./InitialLoginPage";

const HomePage = () => {
  const [isLoding, setIsLoding] = useState(false);
  setTimeout(() => {
    setIsLoding(true);
  }, 300);
  return <>{!isLoding ? <LodingPage /> : <InitialLoginPage />}</>;
};

export default HomePage;
