import React, { useEffect } from "react";
import "../style/mouse.css";

export default function MouseAnimation() {
  useEffect(() => {
    const mouse = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      mouse.style.left = e.pageX + 1 + "px";
      mouse.style.top = e.pageY + 1 + "px";
    });
  }, []);

  return (
    <React.Fragment>
      <div className="cursor" />
    </React.Fragment>
  );
}
