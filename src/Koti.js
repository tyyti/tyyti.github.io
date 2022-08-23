import React, { Component } from "react";
import heroImg from "./img/hero-lappari.png";
import iconJava from "./img/icon-java.svg";
import iconHTML from "./img/icon-html5.svg";
import iconCSS from "./img/icon-css3.svg";
import iconJavaScript from "./img/icon-javascript.svg";
import iconReact from "./img/icon-react.svg";
import iconMySQL from "./img/icon-mysql.svg";
import iconNode from "./img/icon-nodejs.svg";
import Carousel from "./components/Carousel";
import carouselData from "./components/carouselData.js"

class Koti extends Component {
    render() {
        return (
            <div>
                <div className="hero">
                    <div className="row flex container">
                        <div className="hero-content">
                            <h1>Hei olen Tiina</h1>
                            <p>Olen tuore koodaaja animaatio-ohjaaja-taustalla. Olen tehnyt aikaisemmin UI/UX-suunnittelua ja grafiikkaa.</p>
                            <p>Näille sivuille on suunnitelmissa tuoda seuraavaksi CRUD-toimintoja, aiheena matkasuunnittelu.</p>
                        </div>
                        <div className="hero-img row">
                            <img src={heroImg} alt="Hero" />
                        </div>
                    </div>
                </div>
                <div className="osat">
                    <div className="container">
                        <h2>Koodaus-taitojani</h2>
                        <p>Klikkaamalla alla olevia painikkeita pääset listatun kielen omalle wikipedia-sivulle.</p>
                        <div className="osat-kortit column">
                            <a href="https://fi.wikipedia.org/wiki/Java" target="_blank" rel="noreferrer">
                                <div className="osa-kortti">
                                    <img src={iconJava} alt="Java logo" />
                                    <h3>Java</h3>
                                </div>
                            </a>
                            <a href="https://fi.wikipedia.org/wiki/HTML" target="_blank" rel="noreferrer">
                                <div className="osa-kortti">
                                    <img src={iconHTML} alt="HTML logo" />
                                    <h3>HTML</h3>
                                </div>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noreferrer">
                                <div className="osa-kortti">
                                    <img src={iconCSS} alt="CSS logo" />
                                    <h3>CSS</h3>
                                </div>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer">
                                <div className="osa-kortti">
                                    <img src={iconJavaScript} alt="JavaScript logo" />
                                    <h3>JavaScript</h3>
                                </div>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noreferrer">
                                <div className="osa-kortti">
                                    <img src={iconReact} alt="React logo" />
                                    <h3>React</h3>
                                </div>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noreferrer">
                                <div className="osa-kortti">
                                    <img src={iconNode} alt="Node.js logo" />
                                    <h3>Node.js</h3>
                                </div>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/MySQL" target="_blank" rel="noreferrer">
                                <div className="osa-kortti">
                                    <img src={iconMySQL} alt="MySQL logo" />
                                    <h3>MySQL</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="carousel-container">
                    <div className="carousel">
                        <Carousel images={carouselData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Koti;
