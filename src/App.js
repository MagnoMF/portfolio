import React from "react";
import Navbar from "./components/Navbar";
import MouseAnimation from "./components/MouseAnimation";
import Sobre from "./components/Sobre";

function App() {
  return (
    <React.Fragment>
      <MouseAnimation/>
      <Navbar/>
      <Sobre/>
    </React.Fragment>
  );
}

export default App;
