import React, { useEffect } from "react";
import Card from "./Card";
import "../style/projetos.css";

export default function Projetos() {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    carousel.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        e.target.scrollBy(300, 0);
      } else {
        e.target.scrollBy(-300, 0);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div id="_projetos" className="carousel">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </React.Fragment>
  );
}
