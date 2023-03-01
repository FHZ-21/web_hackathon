import React from 'react'

import imgPdfFile from '../assets/img/pdf-file.png';
import imgDocFile from '../assets/img/doc-file.png';
import imgTxtFile from '../assets/img/txt-file.png';

const ItemFile = ({ filetype = 'pdf' }) => {
    const dictFile = {
        'pdf': { class: 'pdf', src: imgPdfFile },
        'doc': { class: 'doc', src: imgDocFile },
        'txt': { class: 'txt', src: imgTxtFile },
    }

    return (
        <div className={`result__body__item ${filetype}`}>
            <div className="file__icon">
                <img src={dictFile[filetype].src} className="icon" alt="Documents icon" />
            </div>
            <div className="file__info">
                <h3 className="name">file.docx</h3>
                <span className="date">0000-00-00 00:00:00</span>
                <span className="size">10.25Mo</span>
            </div>
        </div>
    )
}

export default ItemFile;