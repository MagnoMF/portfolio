import React from "react";
import fotoPerfil from "../img/foto-perfil.svg";
import "../style/sobre.css";

export default function Sobre() {
  return (
    <React.Fragment>
      <div className="wrapp">
        <div className="wrapp-image">
          <img className="avatar-image" src={fotoPerfil} alt="foto-perfil" />
        </div>
        <div className="wrapp-text">
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit est
            harum suscipit hic. Eaque voluptatum, aliquid molestiae iure tempore
            sed consectetur repudiandae alias commodi at odit asperiores
            deleniti atque odio! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Mollitia neque ea quos natus. Totam, quaerat?
            Quasi odio fugiat magnam quas debitis reprehenderit, assumenda eum,
            commodi nam illum velit, rem corrupti! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Sit est harum suscipit hic. Eaque
            voluptatum, aliquid molestiae iure tempore sed consectetur
            repudiandae alias commodi at odit asperiores deleniti atque odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            neque ea quos natus. Totam, quaerat? Quasi odio fugiat magnam quas
            debitis reprehenderit, assumenda eum, commodi nam illum velit, rem
            corrupti!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
