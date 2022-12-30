import React from "react";
import Navbar from "./components/Navbar";
import MouseAnimation from "./components/MouseAnimation";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Skills from "./components/Skills";
import NavbarLateral from "./components/NavbarLateral";

function App() {
  return (
    <React.Fragment>
      <MouseAnimation/>
      <Navbar/>
      <Sobre/>
      <Projetos/>
      <Skills/>
      <NavbarLateral/>
    </React.Fragment>
  );
}

export default App;
