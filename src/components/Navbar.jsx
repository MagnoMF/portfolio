import React from "react";
import iconeProjetosAtivado from "../img/iconeProjetosAtivado.svg";
import iconeProjetosDesativado from "../img/iconeProjetosDesativado.svg";
import iconeSkillsAtivado from "../img/iconeSkillsAtivado.svg";
import iconeSkillsDesativado from "../img/iconeSkillsDesativado.svg";
import iconeSobreAtivado from "../img/iconeSobreAtivado.svg";
import iconeSobreDesativado from "../img/iconeSobreDesativado.svg";
import BotaoNavbar from "./BotaoNavbar";
import ContextBotoesNavbarProvider from "../contexts/ContextBotoesNavbar";
import fotoPerfil from "../img/foto-perfil.svg";
import "../style/navbar.css";

export default function Navbar() {
  return (
    <React.Fragment>
      <div id="_navbar" className="navbar">
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
            <ContextBotoesNavbarProvider>
              <ul>
                <li>
                  <a href="#_sobre">
                    <BotaoNavbar
                      id="sobre"
                      texto="Sobre"
                      iconeAtivado={iconeSobreAtivado}
                      iconeDesativado={iconeSobreDesativado}
                    />
                  </a>
                </li>
                <li>
                  <a href="#_skills">
                    <BotaoNavbar
                      id="skills"
                      texto="Skills"
                      iconeAtivado={iconeSkillsAtivado}
                      iconeDesativado={iconeSkillsDesativado}
                    />
                  </a>
                </li>
                <li>
                  <a href="#_projetos" style={{ transition: "1ms" }}>
                    <BotaoNavbar
                      id="projetos"
                      texto="Projetos"
                      iconeAtivado={iconeProjetosAtivado}
                      iconeDesativado={iconeProjetosDesativado}
                    />
                  </a>
                </li>
              </ul>
            </ContextBotoesNavbarProvider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
