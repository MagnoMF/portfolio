import React from "react";
import "../style/navbar.css";
import { ContextBotoesNavbar } from "../contexts/ContextBotoesNavbar";

function BotaoNavbar({ id, iconeAtivado, iconeDesativado, texto }) {
  return (
    <React.Fragment>
      <ContextBotoesNavbar.Consumer>
        {(value) => (
          <button
            onClick={value.ativarBotao}
            id={id}
            style={{
              backgroundImage: `url(${
                value.styleBotoes[id]["ativo"] ? iconeAtivado : iconeDesativado
              })`,
            }}
            className={`btns-nav__btn ${value.styleBotoes[id]["class"]}`}
          >
            {texto}
          </button>
        )}
      </ContextBotoesNavbar.Consumer>
    </React.Fragment>
  );
}

export default BotaoNavbar;
