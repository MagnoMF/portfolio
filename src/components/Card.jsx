import React from "react";
import backgroundProjeto from "../img/backgroundProjetos.svg";

export default function Card() {
  return (
    <div
      style={{
        pointerEvents: "none",
        flex: "none",
        margin: "15px",
        height: "22rem",
        width: "17em",
      }}
    >
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
      <div
        style={{
          pointerEvents: "none",
          borderRadius: "0 0 1.5em 1.5em",
          height: "50%",
          background: "blue",
          backgroundColor: "#31282E",
          padding: "15px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            pointerEvents: "none",
            color: "#DC944C",
            textAlign: "center",
          }}
        >
          Título
        </h2>
        <p
          style={{
            pointerEvents: "none",
            marginTop: "1em",
            textAlign: "center",
            color: "#746D63",
            display: "flex",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor iste
          assumenda alias temporibus repudiandae officia id! Nam praesentium
          possimus neque!
        </p>
      </div>
    </div>
  );
}
