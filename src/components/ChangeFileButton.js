import React from "react";
import { useStore } from "./State";

export default function ChangeFileButton({ ...props }) {
  const { setFileDataURL } = useStore();

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.match(/image\/(png|jpg|jpeg)/i)) {
      alert("Image mime type is not valid");
      return;
    }
    document.querySelector("#change-image").style.display = "none";
    let fileReader;
    let isCancel = false;
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
  };
  return (
    <React.Fragment>
      <label htmlFor="file" style={{ cursor: "pointer", width: "fit-content" }} {...props}>
        <h1
          style={{
            fontFamily: "monospace",
            border: "2px dashed #ff001c",
            color: "#ff001c",
            padding: "1vw",
            cursor: "pointer",
            width: "fit-content",
            margin: 0,
          }}
        >
          Cambiar imagen
        </h1>
      </label>
      <input type="file" accept="image/*" onChange={onFileChange} id="file" hidden />
    </React.Fragment>
  );
}
