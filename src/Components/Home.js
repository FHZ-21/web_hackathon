import axios from "axios";
import React, { useState, useEffect } from "react";
import Allitems from "./Allitems";
import { useParams, useHistory } from "react-router-dom";

import ItemFile from "./ItemFile";
import PaginateNew from "./PaginateNew";

import imgSearch from "../assets/img/search.png";
import imgSparkle from "../assets/img/sparkle.png";
import imgFolder from "../assets/img/folder.png";
import imgFolder2 from "../assets/img/folder2.png";
import imgInformation from "../assets/img/information.png";
import imgSierlyMedia from "../assets/img/sincerely-media-DgQf1dUKUTM-unsplash.jpg";
import imgMonkey from "../assets/img/monkey.png";

function Home() {
  const { firstpath, secondpath } = useParams();
  const history = useHistory()
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pagetotal, setPagetotal] = useState(10);
  const [motcle, setMotcle] = useState("");

  const getPages = async () => {
    try {
      const res = await axios.get(`http://192.168.8.103:3000/data`, {
        params: { page: page, motcle: motcle },
      });
      // let res = await axios.get('http://localhost:3000/data/data.json')
      console.log(res.data);

      setData(res.data.data);
      setPagetotal(res.data.page_count);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPages();
    console.log(firstpath);
    console.log(secondpath);
    history.replace(String(page))
  }, [page]);

  useEffect(() => {
    // fetchText();
    getPages();
   
  }, []);

  return (
    <section>
      <div className="search">
        <form onSubmit={getPages}>
          <input
            type="search"
            className="search__input"
            placeholder="Entrer un mot clé pour rechercher des documents ..."
            onChange={(e) => setMotcle(e.target.value)}
          />
          <button type="submit" className="search__button">
            <img className="icon" src={imgSearch} />
            <span className="text">Rechercher</span>
          </button>
        </form>
      </div>
      <div className="result">
        <div className="result__header">
          <div className="title">
            <img src={imgSparkle} className="title__icon" alt="Last add" />
            <h2 className="title__text">Ajoutés récemment :</h2>
          </div>
          <div className="control">
            <PaginateNew
              page={page}
              pagetotal={pagetotal}
              data={data}
              setPage={setPage}
            />
          </div>
        </div>
        <div className="result__body">
          {data.map((item) => {
            return(
              <ItemFile
                key={item.id}
                filetype={item.type}
                fileSize={item.size}
                dateCreation={item.date}
                filename={item.name}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
