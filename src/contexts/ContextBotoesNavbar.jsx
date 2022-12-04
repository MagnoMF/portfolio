import React, { createContext, useState } from "react";

export const ContextBotoesNavbar = createContext({
  styleBotoes: {},
  ativarBotao: () => {},
});

const ContextBotoesNavbarProvider = ({ children }) => {
  const [styleBotoes, setStyleBotoes] = useState({
    sobre: { ativo: false, class: "unclicked" },
    skills: { ativo: false, class: "unclicked" },
    projetos: { ativo: false, class: "unclicked" },
  });

  const ativarBotao = (botaoClicado) => {
    const idBotaoClicado = botaoClicado.target.id;
    setStyleBotoes((prevState) => {
      const keys = Object.keys(prevState);
      const newState = keys.map((key) => {
        if (idBotaoClicado === key) {
          if (prevState[idBotaoClicado]["ativo"] === true) {
            return { ativo: false, class: "unclicked" };
          }
          return { ativo: true, class: "clicked" };
        } else {
          return { ativo: false, class: "unclicked" };
        }
      });
      return {
        sobre: newState[0],
        skills: newState[1],
        projetos: newState[2],
      };
    });
  };

  return (
    <ContextBotoesNavbar.Provider value={{ styleBotoes, ativarBotao }}>
      {children}
    </ContextBotoesNavbar.Provider>
  );
};

export default ContextBotoesNavbarProvider;
