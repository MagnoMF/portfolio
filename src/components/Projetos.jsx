import React, { useEffect } from "react";
import Card from "./Card";

export default function Projetos() {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    carousel.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        e.target.scrollBy(270, 0);
      } else {
        e.target.scrollBy(-270, 0);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div
        className="carousel"
        style={{
          overflowX: "auto",
          scrollBehavior: "smooth",
          boxSizing: "border-box",
          width: "85%",
          display: "flex",
          margin: "0 auto",
        }}
      >
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
