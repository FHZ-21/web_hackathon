import React from 'react'

import imgPdfFile from '../assets/img/pdf-file.png';
import imgDocFile from '../assets/img/doc-file.png';
import imgTxtFile from '../assets/img/txt-file.png';

const ItemFile = ({ filetype = 'pdf', filename = 'file.docx', fileSize = '10.25Mo', dateCreation = '0000-00-00 00:00:00'}) => {
    const dictFile = {
        'application/pdf': { class: 'pdf', src: imgPdfFile },
        'application/msword': { class: 'doc', src: imgDocFile },
        'text/plain': { class: 'txt', src: imgTxtFile },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {class: 'doc', src: imgDocFile }
        }
        
    return (
        <div className={`result__body__item ${dictFile[filetype].class}`}>
            <div className="file__icon">
                <img src={dictFile[filetype].src} className="icon" alt="Documents icon" />
            </div>
            <div className="file__info">
                <h3 className="name">{filename}</h3>
                <span className="date">{dateCreation}</span>
                <span className="size">{fileSize}</span>
            </div>
        </div>
    )
}

export default ItemFile;