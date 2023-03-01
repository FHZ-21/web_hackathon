import React from "react";

import imgRightArrow from "../assets/img/right-arrow.png";
import imgLeftArrow from "../assets/img/left-arrow.png";

const PaginateNew = ({ page, pagetotal, setPage }) => {
  const prevPage = () => {
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="doc__indicator">
        <span>Documents</span>
        <span className="doc__indicator__begin">1</span>
        <span>-</span>
        <span className="doc__indicator__end">10</span>
      </div>
      <div className="page__indicator">
        <span>Page</span>
        <button className="page__indicator__previous" title="Page précédente"
        disabled={page<=1}
        onClick={prevPage}
        >
          <img className="page__icon" src={imgLeftArrow} alt="Previous page" />
        </button>
        <span className="page__indicator__begin">{page}</span>
        <button className="page__indicator__next" title="Page suivante"
        disabled={page>=pagetotal}
        onClick={nextPage}
        >
          <img className="page__icon" src={imgRightArrow} alt="Next page" />
        </button>
        <span>sur </span>
        <span className="page__indicator__end">{pagetotal}</span>
      </div>
    </>
  );
};

export default PaginateNew;
