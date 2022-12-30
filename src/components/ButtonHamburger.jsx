import React from "react";
import "../style/buttonHamburger.css";

function ButtonHamburger({ img, redirect }) {
  return (
    <React.Fragment>
      <a href={redirect}>
        <button
          className="wrappHamburger__btn--desativado"
          style={{ backgroundImage: `url(${img})` }}
        />
      </a>
    </React.Fragment>
  );
}

export default ButtonHamburger;
