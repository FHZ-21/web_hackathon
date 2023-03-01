import React from "react";
import imgMonkey from "../assets/img/monkey.png";
import imgFolder2 from "../assets/img/folder2.png";
import imgFolder from "../assets/img/folder.png";
import imgInformation from "../assets/img/information.png";
import { Link } from "react-router-dom";

function Header() {
  return (
   
      <header>
        <div className="logo">
          <img
            className="logo__image"
            src={imgMonkey}
            alt="Verbum CLAVES Logo"
          />
          <div className="logo__text">
            <span className="primo">Verbum</span>
            <span className="second">Claves</span>
          </div>
        </div>
        <div className="menu">
          <div className="menu__item">
            <img className="image" src={imgFolder2} alt="Documents icon" />
            <span className="text">
              <Link to="/">Document disponible</Link>
            </span>
          </div>
          <div className="menu__item">
            <img className="image" src={imgFolder} alt="Files icon" />
            <span className="text">
              <Link to="/custom">Telecharger mon fichier</Link>
            </span>
          </div>
          <div className="menu__item">
            <img className="image" src={imgInformation} alt="About icon" />
            <span className="text">
              <Link to="/about">A propos</Link>
            </span>
          </div>
        </div>
      </header>
    
  );
}

export default Header;
