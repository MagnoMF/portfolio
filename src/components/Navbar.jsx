import React from "react";
import papper from "../img/papper.svg";
import code from "../img/code.svg";
import book from "../img/book.svg";
import fotoPerfil from "../img/foto-perfil.svg";
import "../style/navbar.css";

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <div id="foto">
          <img className="foto--img" src={fotoPerfil} alt="foto-perfil" />
        </div>
        <div className="nome">
          <h1>Magno de Miranda</h1>
          <h4>Programador Jr.</h4>
        </div>
        <div className="midia-social">
          <div className="wrapp-btns">
            <button className="wrapp-btns__btn btn--linkedin" />
            <button className="wrapp-btns__btn btn--github" />
          </div>
          <div className="btns-nav">
            <ul>
              <li>
                <button
                  style={{ backgroundImage: `url(${papper})` }}
                  className="btns-nav__btn clicked btn--sobre"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  style={{ backgroundImage: `url(${book})` }}
                  className="btns-nav__btn unclicked"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  className="btns-nav__btn unclicked"
                  style={{ backgroundImage: `url(${code})` }}
                >
                  Projetos
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
