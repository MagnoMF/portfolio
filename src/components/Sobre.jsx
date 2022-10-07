import React from "react";
import fotoPerfil from "../img/foto-perfil.svg";

export default function Sobre() {
  return (
    <React.Fragment>
      <div style={{ display: "flex", margin: "7rem 3em" }}>
        <div
          style={{
            width: "0",
            margin: "0",
            //desktop
            // width: "45%",
            // display: "inline-block",
            // margin: "auto",
          }}
        >
          <img
            style={{
              width: "0",
              margin: "0",
              //desktop
              // display: "flex",
              // height: "10rem",
              // margin: "auto",
            }}
            src={fotoPerfil}
            alt="foto-perfil"
          />
        </div>
        <div
          style={{
            display: "inline-block",
            margin: "auto",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              display: "flex",
              color: "white",
              // textAlign: "right",
              textAlign: "center",
            }}
          >
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
