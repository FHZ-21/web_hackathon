import React, { useState } from "react";
import axios from "axios";

function Custom() {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
  
    const [alltext, setAlltext] = useState("lorem lorem");
    const [motcles, setMocles] = useState(["lundi", "noir", "guerre"]);
  
    const fileChange = (e) => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    };
  
    const uploadFile = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", fileName);
      try {
        const res = await axios.post(
          "http://192.168.8.103:3000/upload",
          formData
        );
        console.log(res);
      } catch (err) {
        console.log(err.message);
      }
    };
  
  
    return (
      <div>
        <form action="" onSubmit={uploadFile}>
          <input type="file" onChange={fileChange} />
          <button type="submit">Upload</button>
        </form>
        <div className="alltext">{alltext}</div>
        <div className="motcles">
          {motcles.map((mot) => {
            return <div key={mot}>{mot}</div>;
          })}
        </div>
      </div>
    );
}

export default Custom