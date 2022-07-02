import React from "react";
import barCode from "../images/barcode.svg";
import { day, number, month, year } from "./Date";

export default function Header() {
  return (
    <header>
      <h1
        style={{
          borderTop: "2vw solid #ff001c",
          background: "#31006f",
          color: "white",
          fontFamily: "Gill Sans Display MT Pro",
          textAlign: "center",
          paddingTop: "3vw",
          fontSize: "8vw",
          lineHeight: "8vw",
          margin: 0,
        }}
      >
        <span contentEditable="true" spellCheck="false" suppressContentEditableWarning={true}>
          Las Últimas Noticias
        </span>
      </h1>
      <div style={{ display: "flex", padding: "0.2vw 0" }}>
        <p style={{ fontSize: "2vw", margin: "auto" }}>
          <strong>cyberpun.ga/lun</strong>
        </p>
        <p style={{ fontSize: "2vw", margin: "auto" }}>
          $500 • Año CXX • N° 40.330 • {day} {number} de {month} {year}
        </p>
        <img
          alt="cyberpunga barcode"
          style={{
            height: "2.4vw",
            padding: "0.5vw 0.5vw",
            border: "0.1vw solid darkgray",
            borderRadius: "0.5vw",
            margin: "auto 0",
          }}
          src={barCode}
        />
      </div>
    </header>
  );
}
