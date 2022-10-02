import React from "react";
import backgroundProjeto from "../img/backgroundProjetos.svg";

export default function Card() {
  return (
    <div
      style={{
        margin: "15px",
        background: "transparent",
        height: "22rem",
        width: "17rem",
      }}
    >
      <div
        style={{
          borderRadius: "1.5em 1.5em 0  0 ",
          height: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${backgroundProjeto})`,
        }}
      />
      <div
        style={{
          borderRadius: "0 0 1.5em 1.5em",
          height: "50%",
          background: "blue",
          backgroundColor: "#31282E",
          padding: "15px",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ color: "#DC944C", textAlign: "center" }}>Título</h2>
        <p
          style={{
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
