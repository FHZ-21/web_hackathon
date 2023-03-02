import React, { useEffect, useState } from "react";
import axios from "axios";
import imgFolder from "../assets/img/folder.png";
import imgRightarrow from "../assets/img/right-arrow.png";
import imgTriangle from "../assets/img/Triangles-1s-512px.gif";

function Custom() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [alltext, setAlltext] = useState(null);
  const [motcles, setMotcles] = useState([
    "Mot clé 1",
    "Mot clé 2",
    "Mot clé 3",
    "Mot clé 4",
    "Mot clé 5",
  ]);

  const fileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setAlltext(null);
    setMotcles([]);
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://192.168.8.101:3000/upload",
        formData
      );
      console.log(res.data[0][0]);
      setAlltext(res.data[0][0].contenu_fichier);
      setMotcles(res.data[0][0].cle);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  const textwindow = {
    marginLeft: 5 * 3,
    marginRight: 5 * 3,
    textAlign: "justify",
    textJustify: "inter-word",
  };
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${imgTriangle})`,
            backgroundRepeat: "no-repeat",
            width: "250px",
            height: "250px",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    );
  }

  return (
    <>
      <input
        type="file"
        onChange={fileChange}
        id="input"
        style={{ display: "none" }}
        accept="text/plain,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />

      <section>
        <div className="uploader">
          <div className="upload__result">
            <p>
              Cliquer sur le bouton "Telecharger un fichier" pour telechager un
              fichier et essayer le service.
            </p>
            <p>(Format prisent en charge .docx, .doc, .pdf, .txt)</p>
            <h3 style={{ textAlign: "center" }}>{fileName}</h3>

            <div style={textwindow}>{alltext}</div>
          </div>

          <div style={{ display: "flex" }}>
            <p style={{ fontWeight: "bold" }}>Mots clés: </p>
            {motcles.map((mot) => {
              return (
                <div key={mot} style={{ margin: 5, display:'flex', alignItems:'center' }}>
                  {mot}
                </div>
              );
            })}
          </div>

          <button
            className="uploader__button"
            onClick={() => document.querySelector("#input").click()}
          >
            <img src={imgFolder} className="icon" />
            <span className="text">Telecharger un fichier</span>
          </button>
          <button className="uploader__button" onClick={uploadFile}>
            <img src={imgRightarrow} className="icon" />
            <span className="text">Envoyer le fichier</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Custom;
