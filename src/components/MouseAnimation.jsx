import React, { useEffect } from "react";
import "../style/mouse.css";

export default function MouseAnimation() {
  useEffect(() => {
    const mouse = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      mouse.style.left = e.clientX+'px'
      mouse.style.top = e.clientY+'px'
    });
  }, []);

  return (
    <React.Fragment>
      <div className="cursor" />
    </React.Fragment>
  );
}
