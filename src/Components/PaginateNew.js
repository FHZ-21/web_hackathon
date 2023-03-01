import React from 'react'

import imgRightArrow from '../assets/img/right-arrow.png';
import imgLeftArrow from '../assets/img/left-arrow.png';

const PaginateNew = () => {
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
                <button className="page__indicator__previous" title="Page précédente">
                    <img className="page__icon" src={imgLeftArrow} alt="Previous page" />
                </button>
                <span className="page__indicator__begin">1</span>
                <button className="page__indicator__next" title="Page suivante">
                    <img className="page__icon" src={imgRightArrow} alt="Next page" />
                </button>
                <span>sur</span>
                <span className="dpage__indicator__end">10</span>
            </div>
        </>
    )
}

export default PaginateNew;