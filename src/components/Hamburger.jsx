import React, { useEffect, useState } from "react";
import "../style/menuBurger.css";
import { ContexNavbarLateral } from "../contexts/ContextNavbarLateral";

function Hamburger() {
  return (
    <React.Fragment>
      <ContexNavbarLateral.Consumer>
        {(value) => (
          <div
            onClick={() => {
              value.HamburgerAnimation();
            }}
            className="menu-btn"
          >
            <div className="menu-btn__burger"></div>
          </div>
        )}
      </ContexNavbarLateral.Consumer>
    </React.Fragment>
  );
}

export default Hamburger;
