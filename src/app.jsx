import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageRoute from "./pages/PageRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PageRoute />
      </BrowserRouter>
    </>
  );
};

export default App;