import React from "react";
import html2canvas from "html2canvas";
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

  const printRef = React.useRef();
  const [file, setFile] = React.useState(null);
  const [fileDataURL, setFileDataURL] = React.useState("/lun/placeholder.jpg");

  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontFamily: "monospace" }}>Este es el primer hacedor de noticias de cyberpunga.</h1>
        <h2 style={{ fontFamily: "monospace" }}>Puedes empezar por:</h2>
        <ChangeFileButton file={file} setFile={setFile} setFileDataURL={setFileDataURL} />
        <h2 style={{ fontFamily: "monospace" }}>
          Luego <span style={{ textDecoration: "underline" }}>edita los titulares</span> y dale a:
        </h2>
        <SaveButton element={printRef} />
        {/* <h2 style={{ fontFamily: "monospace" }}>
          Comparte tus noticias con el mundo{" "}
          <span style={{ fontSize: "xxx-large", verticalAlign: "text-top" }}>🥳🤮</span>
        </h2> */}
      </div>
      <div ref={printRef} style={{ margin: "24px 0" }}>
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
        <main
          style={{
            backgroundImage: `url(${fileDataURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            height: "100vw",
          }}
        >
          <ChangeFileButton
            file={file}
            setFile={setFile}
            setFileDataURL={setFileDataURL}
            id="change-image"
            style={{ margin: "auto" }}
          />

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
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SaveButton element={printRef} />
      </div>
    </React.Fragment>
  );
}

function ChangeFileButton({ file, setFile, setFileDataURL, ...props }) {
  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.match(/image\/(png|jpg|jpeg)/i)) {
      alert("Image mime type is not valid");
      return;
    }
    document.querySelector("#change-image").style.display = "none";
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
      <label htmlFor="file" style={{ cursor: "pointer", width: "fit-content" }} {...props}>
        <h1
          style={{
            fontFamily: "monospace",
            border: "2px dashed #ff001c",
            color: "#ff001c",
            padding: "1vw",
            margin: "0",
          }}
        >
          Cambiar imagen
        </h1>
      </label>
      <input type="file" accept="image/*" onChange={onFileChange} id="file" hidden />
    </React.Fragment>
  );
}

function SaveButton({ element }) {
  const handleDownloadImage = async () => {
    const canvas = await html2canvas(element.current);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  return (
    <h1
      style={{
        fontFamily: "monospace",
        cursor: "pointer",
        border: "2px dashed black",
        color: "black",
        padding: "1vw",
        width: "fit-content",
        margin: "0",
      }}
      onClick={handleDownloadImage}
    >
      💾 Guardar
    </h1>
  );
}
