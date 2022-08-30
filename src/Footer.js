import React from "react";
import footerIconLinkedin from "./img/icon-linkedin.svg";
import footerIconGitHub from "./img/icon-github.svg";


const Footer = () => {
    return (
        <div id="footer">
            <a href="https://www.linkedin.com/in/tiina-tyyti-r%C3%A4s%C3%A4nen/" target="_blank" rel="noreferrer"><img src={footerIconLinkedin} alt="LinkedIn" /></a>
            <a href="https://github.com/tyyti" target="_blank" rel="noreferrer"><img src={footerIconGitHub} alt="GitHub" /></a>
        </div>
    )
}

export default Footer;