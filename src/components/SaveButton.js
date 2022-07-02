import React from "react";
import html2canvas from "html2canvas";

export default function SaveButton() {
  const handleDownloadImage = async () => {
    const canvas = await html2canvas(document.querySelector("#cover"));
    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = data;
      link.download = "cyberpunga-noticias-" + Date.now() + ".png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  return (
    <button onClick={handleDownloadImage} style={{ width: "fit-content", background: "none", border: "none" }}>
      <h1
        style={{
          fontFamily: "monospace",
          cursor: "pointer",
          border: "2px dashed #31006f",
          color: "#31006f",
          padding: "1vw",
          width: "fit-content",
          margin: "0",
        }}
      >
        💾 Guardar
      </h1>
    </button>
  );
}
