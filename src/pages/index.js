import React from "react";
import barCode from "../images/barcode.svg";

import "../styles.css";

export default function IndexPage() {
  const now = new Date();
  const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const { day, number, month, year } = {
    day: days[now.getDay()],
    number: now.getDate(),
    month: months[now.getMonth()],
    year: now.getFullYear(),
  };

  const [file, setFile] = React.useState(null);
  const [fileDataURL, setFileDataURL] = React.useState(null);

  // const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const onFileChange = (e) => {
    const file = e.target.files[0];
    // if (!file?.type.match(imageMimeType)) {
    //   alert("Image mime type is not valid");
    //   return;
    // }
    setFile(file);
  };

  React.useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);
  return (
    <React.Fragment>
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
          <p
            style={{
              fontSize: "2vw",
              margin: "auto",
            }}
          >
            <strong>cyberpun.ga/lun</strong>
          </p>
          <p
            style={{
              fontSize: "2vw",
              margin: "auto",
            }}
          >
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
      <main
        style={{
          backgroundImage: `url(${
            fileDataURL ? fileDataURL : "https://clipground.com/images/placeholder-clipart-5.jpg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: "100vw",
        }}
      >
        <div style={{ margin: "auto" }}>
          <label
            htmlFor="file"
            style={{ border: "1px dashed black", borderRadius: "4px", padding: "8px", cursor: "pointer" }}
          >
            Cambiar imagen
          </label>
          <input type="file" accept="image/*" onChange={onFileChange} id="file" hidden />
        </div>

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

        <div
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
              Si estás leyendo esto, significa que sigues con{" "}
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
        </div>
      </main>
    </React.Fragment>
  );
}
