import React from "react";
import Line from "./Line";

export default function LineSkill({ image, text, title }) {
  return (
    <React.Fragment>
      <div style={{marginTop: '.5em'}}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {image}
          <h3 style={{ margin: "auto .5em" }}>{title}</h3>
        </div>
        <Line/>
        <p style={{ margin: "auto .5em ", padding: '0 .5em' }}>
          {text}
        </p>
      </div>
    </React.Fragment>
  );
}
