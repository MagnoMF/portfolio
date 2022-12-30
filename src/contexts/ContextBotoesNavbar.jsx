import React, { createContext, useState, useEffect } from "react";

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

  function ativarBotoesNavbar() {
    window.addEventListener("scroll", (e) => {
      const YScrollPage = window.pageYOffset;
      if (YScrollPage <= 200) {
        setStyleBotoes({
          sobre: { ativo: true, class: "clicked" },
          skills: { ativo: false, class: "unclicked" },
          projetos: { ativo: false, class: "unclicked" },
        });
      }
      if (YScrollPage >= 200 && YScrollPage <= 648) {
        setStyleBotoes({
          sobre: { ativo: false, class: "unclicked" },
          skills: { ativo: false, class: "unclicked" },
          projetos: { ativo: true, class: "clicked" },
        });
      }
      if (YScrollPage >= 648) {
        setStyleBotoes({
          sobre: { ativo: false, class: "unclicked" },
          skills: { ativo: true, class: "clicked" },
          projetos: { ativo: false, class: "unclicked" },
        });
      }

    });
  }

  useEffect(() => {
    ativarBotoesNavbar();
  }, []);

  return (
    <ContextBotoesNavbar.Provider value={{ styleBotoes }}>
      {children}
    </ContextBotoesNavbar.Provider>
  );
};

export default ContextBotoesNavbarProvider;
