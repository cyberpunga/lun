import React from "react";
import SaveButton from "./SaveButton";
import ChangeFileButton from "./ChangeFileButton";

export default function Intro() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ fontFamily: "monospace" }}>Este es el primer hacedor de noticias de cyberpunga</h1>
      <h2 style={{ fontFamily: "monospace" }}>Puedes empezar por:</h2>
      <ChangeFileButton />
      <h2 style={{ fontFamily: "monospace" }}>
        Luego <span style={{ textDecoration: "underline" }}>edita los titulares</span> y dale a:
      </h2>
      <SaveButton />
    </div>
  );
}
