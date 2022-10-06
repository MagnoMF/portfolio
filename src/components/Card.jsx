import React from "react";
import backgroundProjeto from "../img/backgroundProjetos.svg";
import "../style/navbar.css";

export default function Card() {
  return (
    <React.Fragment>
      <div className="card-wrapper">
        <div
          style={{
            borderRadius: "1.5em 1.5em 0  0 ",
            pointerEvents: "none",
            height: "50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(${backgroundProjeto})`,
          }}
        />
        <div className="card-body">
          <h2 className="card-body-title">Título</h2>
          <p className="card-body-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor iste
            assumenda alias temporibus repudiandae officia id! Nam praesentium
            possimus neque!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
