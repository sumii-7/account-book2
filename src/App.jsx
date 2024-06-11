import React from "react";
import Router from "./shared/Router";
import GlobalStyle from "./components/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />;
    </>
  );
};

export default App;
