import React from "react";
import ChangeFileButton from "./ChangeFileButton";
import { useStore } from "./State";

export default function Main() {
  const { fileDataURL } = useStore();
  return (
    <main
      style={{
        backgroundImage: `url(${fileDataURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "64vw",
      }}
    >
      <ChangeFileButton id="change-image" style={{ margin: "auto" }} />

      <h1
        style={{
          fontFamily: "Gill Sans Display MT Pro",
          textAlign: "center",
          margin: "auto 0 0 0",
          color: "yellow",
          fontSize: "10vw",
          lineHeight: "1",
          WebkitTextStroke: "0.2vw black",
        }}
      >
        <span contentEditable="true" spellCheck="false" suppressContentEditableWarning={true}>
          Un nuevo generador de noticias falsas se suma a la lista
        </span>
      </h1>
    </main>
  );
}
