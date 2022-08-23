import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Koti from "./Koti";
import Kuvat from "./Kuvat";
import Yhteys from "./Yhteys";
import footerIconLinkedin from "./img/icon-linkedin.svg";
import footerIconGitHub from "./img/icon-github.svg";
import { toggleMenu } from "./components/ToggleMenu";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header className="row container">
            <div className="header-name">
              <h3>Tiinan portfolio</h3>
            </div>
            <div className="header-menu" onClick={toggleMenu}></div>
            <nav className="header-nav">
              <ul className="row">
                <li><NavLink exact to="/">Koti</NavLink></li>
                <li><NavLink to="/kuvat">Kuvia</NavLink></li>
                <li><NavLink to="/yhteys">Yhteys</NavLink></li>
              </ul>
            </nav>
          </header>
          <body>
            <div id="page-container">
              <div id="content-wrap">
                <Routes>
                  <Route path="/" element={<Koti />} />
                  <Route path="/kuvat" element={<Kuvat />} />
                  <Route path="/yhteys" element={<Yhteys />} />
                </Routes>
              </div>
              <div id="footer">
                <a href="https://www.linkedin.com/in/tiina-tyyti-r%C3%A4s%C3%A4nen/" target="_blank" rel="noreferrer"><img src={footerIconLinkedin} alt="LinkedIn" /></a>
                <a href="https://github.com/tyyti" target="_blank" rel="noreferrer"><img src={footerIconGitHub} alt="GitHub" /></a>
              </div>
            </div>
          </body>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
