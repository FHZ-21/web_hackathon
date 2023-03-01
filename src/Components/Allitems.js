import React, { useEffect, useState } from "react";

function Allitems({ data }) {
    const [file_type, setFile_type] = useState('invalid-file')
    
    useEffect(() => {

    },[data])
  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>
          {item.nom_fichier}
          {item.date_ajout}
          {item.type_fichier}
        </div>;
      })}
    </div>
  );
}
export default Allitems;
