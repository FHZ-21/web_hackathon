import React, { useEffect, useState } from "react";

function Allitems({ data }) {
    
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
