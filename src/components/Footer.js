import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#ff001c",
        color: "white",
        borderTop: "0.1vw solid white",
        borderRadius: "0.5vw 0.5vw 0 0",
        display: "flex",
        alignItems: "center",
        padding: "4vw",
      }}
    >
      <p
        style={{
          fontFamily: "Gill Sans Display MT Pro",
          fontSize: "4vw",
          margin: 0,
          lineHeight: "4vw",
        }}
      >
        <span contentEditable="true" spellCheck="false" suppressContentEditableWarning={true}>
          Si estás leyendo esto, significa que sigues con vida y nos alegra muchísimo
        </span>
        <span>4️⃣</span>
      </p>
      <div
        style={{
          borderLeft: "0.1vw solid white",
          height: "16vw",
          margin: "0 4vw",
        }}
      ></div>
      <p
        style={{
          fontFamily: "Gill Sans Display MT Pro",
          fontSize: "4vw",
          margin: 0,
          lineHeight: "4vw",
        }}
      >
        <span contentEditable="true" spellCheck="false" suppressContentEditableWarning={true}>
          Estos textos son editables: así se recupera de cirugía a las cuerdas vocales
        </span>
        <span>8️⃣</span>
      </p>
    </footer>
  );
}
