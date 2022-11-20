import React, { useEffect } from "react";
import "../style/mouse.css";

export default function MouseAnimation() {
  useEffect(() => {
    const mouse = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      mouse.style.left = e.pageX + "px";
      mouse.style.top = e.pageY + "px";
    });
  }, []);

  return (
    <React.Fragment>
      <div className="cursor" />
    </React.Fragment>
  );
}
