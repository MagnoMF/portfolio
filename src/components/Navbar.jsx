import React from "react";
import gitImage from "../img/brand-github.svg";
import lnkImage from "../img/brand-linkedin.svg";
import code from "../img/code.svg";
import book from "../img/book.svg";
import papper from "../img/papper.svg";

export default function Navbar() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          background: "#31282E",
          height: "11em",
          marginTop: ".5em",
        }}
      >
        <div
          style={{
            margin: "auto 0 auto 1.5em",
          }}
        >
          <h1
            style={{
              fontSize: "2em",
              color: "#DC944C",
            }}
          >
            Magno de Miranda
          </h1>
          <h4
            style={{
              fontSize: "1em",
              color: "#DC944C",
            }}
          >
            Programador Jr.
          </h4>
        </div>
        <div style={{ margin: "1.5em 1.5em 0 auto", textAlign: "end" }}>
          <div style={{ height: "50%" }}>
            <button
              style={{
                border: "none",
                background: "transparent",
                backgroundImage: `url(${gitImage})`,
                width: "35px",
                height: "35px",
              }}
            />
            <button
              style={{
                border: "none",
                background: "transparent",
                backgroundImage: `url(${lnkImage})`,
                width: "35px",
                height: "35px",
              }}
            />
          </div>
          <div style={{ height: "50%" }}>
            <ul style={{ display: "flex" }}>
              <li style={{ margin: "1em" }}>
                <button
                  style={{
                    background: '#DC944C',
                    fontWeight: "bold",
                    width: "6em",
                    height: "2em",
                    color: "#120C12",
                    backgroundImage: `url(${papper})`,
                    backgroundPositionY: "center",
                    backgroundPositionX: "3px",
                    fontSize: '20px',
                    padding: '0 0 0 15px',
                    backgroundRepeat: "no-repeat",
                    borderRadius: "5px",
                    
                  }}
                >
                  Sobre
                </button>
              </li>
              <li style={{ margin: "1em" }}>
                <button
                  style={{
                    background: 'transparent',
                    fontWeight: "bold",
                    width: "6em",
                    height: "2em",
                    color: '#746D63',
                    backgroundImage: `url(${book})`,
                    backgroundPositionY: "center",
                    backgroundPositionX: "3px",
                    fontSize: '20px',
                    padding: '0 0 0 15px',
                    backgroundRepeat: "no-repeat",
                    borderRadius: "5px",
                    
                  }}
                >
                  Skills
                </button>
              </li>
              <li style={{ margin: "1em" }}>
                <button
                  style={{
                    background: 'transparent',
                    fontWeight: "bold",
                    width: "7em",
                    height: "2em",
                    color: '#746D63',
                    backgroundImage: `url(${code})`,
                    backgroundPositionY: "center",
                    backgroundPositionX: "3px",
                    fontSize: '20px',
                    padding: '0 0 0 15px',
                    backgroundRepeat: "no-repeat",
                    borderRadius: "5px",
                    
                  }}
                >
                  Projetos
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
