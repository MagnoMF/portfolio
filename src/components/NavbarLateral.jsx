import React, { useEffect } from "react";
import Hamburger from "./Hamburger";
import ButtonHamburger from "./ButtonHamburger";
import "../style/navbarLateral.css";
import iconeSetaParaCima from "../img/iconeSetaParaCima.svg";
import iconeProjetosHamburger from "../img/iconeProjetosHamburger.svg";
import iconeSkillsHamburger from "../img/iconeSkillsHamburger.svg";
import iconeSobreHamburger from "../img/iconeSobreHamburger.svg";
import ContexNavbarLateralProvider from "../contexts/ContextNavbarLateral";
import { ContexNavbarLateral } from "../contexts/ContextNavbarLateral";

function NavbarLateral() {
  return (
    <React.Fragment>
      <ContexNavbarLateralProvider>
        <ContexNavbarLateral.Consumer>
          {(value) =>
            value.visibilidadeHamburger ? (
              <ul className="wrappHamburger">
                <li className="wrappHamburger__item btn--align">
                  <ButtonHamburger
                    redirect="#_sobre"
                    img={iconeSobreHamburger}
                  />
                </li>
                <li className="wrappHamburger__item btn--align">
                  <ButtonHamburger
                    redirect="#_projetos"
                    img={iconeProjetosHamburger}
                  />
                </li>
                <li className="wrappHamburger__item btn--align">
                  <ButtonHamburger
                    redirect="#_skills"
                    img={iconeSkillsHamburger}
                  />
                </li>
                <li className="wrappHamburger__item btn--align">
                  <ButtonHamburger
                    redirect="#_navbar"
                    img={iconeSetaParaCima}
                  />
                </li>
                <li className="wrappHamburger__item">
                  <Hamburger />
                </li>
              </ul>
            ) : null
          }
        </ContexNavbarLateral.Consumer>
      </ContexNavbarLateralProvider>
    </React.Fragment>
  );
}

export default NavbarLateral;
