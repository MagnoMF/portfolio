import React, { createContext, useState, useEffect } from "react";

export const ContexNavbarLateral = createContext({
  menuOpen: true,
  visibilidadeHamburger: false,
});

const ContexNavbarLateralProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibilidadeHamburger, setVisibilidadeHamburger] = useState(false);

  //Animação hamburger aberto ou fechado
  function HamburgerAnimation() {
    const menuBtn = document.querySelector(".menu-btn");
    if (!menuOpen) {
      menuBtn.classList.add("open");
      setMenuOpen(true);
    } else {
      menuBtn.classList.remove("open");
      setMenuOpen(false);
    }
  }
  //Visibilidade do botão por posição do scroll
  function visibilidadeNavbarLateral() {
    window.addEventListener("scroll", (e) => {
      const YScrollPage = window.pageYOffset;
      if (YScrollPage > 200) {
        setVisibilidadeHamburger(true);
      } else {
        setVisibilidadeHamburger(false);
        setMenuOpen(false);
      }
    });
  }
  //Exibir botões do menu
  function snMenuAtivo() {
    const stringSelecionarBotoes = {
      true: "ativado",
      false: "desativado",
    };

    const botoesNavbarLateral = document.querySelectorAll(
      `.wrappHamburger__btn--${stringSelecionarBotoes[!menuOpen]}`
    );
    botoesNavbarLateral.forEach((botao) => {
      botao.classList.replace(
        `wrappHamburger__btn--${stringSelecionarBotoes[!menuOpen]}`,
        `wrappHamburger__btn--${stringSelecionarBotoes[menuOpen]}`
      );
    });
  }

  useEffect(() => {
    visibilidadeNavbarLateral();
  }, []);

  useEffect(() => {
    snMenuAtivo();
  }, [menuOpen]);

  return (
    <ContexNavbarLateral.Provider
      value={{ menuOpen, visibilidadeHamburger, HamburgerAnimation }}
    >
      {children}
    </ContexNavbarLateral.Provider>
  );
};

export default ContexNavbarLateralProvider;
