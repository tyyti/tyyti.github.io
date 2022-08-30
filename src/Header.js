import React from "react";
import { NavLink } from "react-router-dom";
import { toggleMenu } from "./components/ToggleMenu";

const Header = ({ title }) => {
    return (
        <header className="row container">
            <div className="header-name">
                <h3>{title}</h3>
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
    )
}

export default Header;