import axios from "axios";
import React, { useState, useEffect } from "react";
import Allitems from "./Allitems";

import ItemFile from "./ItemFile";
import PaginateNew from "./PaginateNew";

import imgSearch from '../assets/img/search.png';
import imgSparkle from '../assets/img/sparkle.png';
import imgFolder from '../assets/img/folder.png';
import imgFolder2 from '../assets/img/folder2.png';
import imgInformation from '../assets/img/information.png';
import imgSierlyMedia from '../assets/img/sincerely-media-DgQf1dUKUTM-unsplash.jpg';
import imgMonkey from '../assets/img/monkey.png';


function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pagetotal, setPagetotal] = useState(0);

  // const prevPage = () => {
  //   setPage(page - 1);
  //   document.querySelector("#next").disabled = false;
  // };
  // const nextPage = () => {
  //   setPage(page + 1);
  //   document.querySelector("#prev").disabled = false;
  // };

  const getPages = async () => {
    try {
      //   const res = await axios.get(`http://192.168.8.103:3000/data?page=${page}`);
      let res = await axios.get('http://localhost:3000/data/data.json')
      console.log(res)

      setData(res.data)
      setPagetotal(res.data.page_count);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    // fetchText();
    getPages();
  }, []);

  useEffect(() => {
    // if (page === 1) {
    //   document.querySelector("#prev").disabled = true;
    // } else if (page === pagetotal) {
    //   document.querySelector("#next").disabled = true;
    // }
    getPages();
  }, [page]);

  return (
    <section>
      <div className="search">
        <form>
          <input type="search" name className="search__input" placeholder="Entrer un mot clé pour rechercher des documents ..." />
          <button type="submit" className="search__button">
            <img className="icon" src={imgSearch}/>
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
            <PaginateNew/>
          </div>
        </div>
        <div className="result__body">
          <ItemFile filetype='doc'/>
          <ItemFile filetype='txt'/>
          <ItemFile filetype='pdf'/>
          <ItemFile filetype='doc'/>
          <ItemFile filetype='txt'/>
          <ItemFile filetype='pdf'/>
          <ItemFile filetype='doc'/>
          <ItemFile filetype='txt'/>
          <ItemFile filetype='pdf'/>
        </div>
      </div>
    </section>

  )

  // return (
  //   <div>

  //     <Allitems data={data} />

  //     <button onClick={prevPage} id="prev">
  //       Prev
  //     </button>
  //     {page} <br />
  //     {pagetotal}
  //     <button onClick={nextPage} id="next">
  //       Next
  //     </button>
  //   </div>
  // );
}

export default Home;
