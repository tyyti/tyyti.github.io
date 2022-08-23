import React, { Component } from "react";
import kuva1 from "./img/kuva-1.png";
import kuva2 from "./img/kuva-2.png";
import kuva3 from "./img/kuva-3.png";
import kuva4 from "./img/kuva-4.png";
import kuva5 from "./img/kuva-5.png";
import kuva6 from "./img/kuva-6.png";
import kuva7 from "./img/kuva-7.gif";
import kuva8 from "./img/kuva-8.png";
import kuva9 from "./img/kuva-9.png";
import kuva10 from "./img/kuva-10.png";
import kuva11 from "./img/kuva-11.gif";
import kuva12 from "./img/kuva-12.png";
import { opening, closing } from "./components/Modal"

class Kuvat extends Component {
    render() {
        return (
            <div className="kuvat">
                <div className="kuvat-teksti">
                    <h1>Kuvia</h1>
                    <p>Tällä sivulla on kuvia muista töistä, joita olen tehnyt ohjelmoinnin lisäksi.</p>
                </div>
                <div className="kuvat-row">
                    <div className="kuvat-column">
                        <img id="modalImg" className="modalImages" src={kuva1} onClick={event => opening()} alt="UI/UX-konseptikuva CV-peli-idealle" />
                        <img id="modalImg" className="modalImages" src={kuva9} onClick={event => opening()} alt="Konseptikuva Instagram-peli-ideaa varten" />
                    </div>
                    <div className="kuvat-column">
                        <img id="modalImg" className="modalImages" src={kuva6} onClick={event => opening()} alt="Markkinointia varten tehty sarjakuva" />
                    </div>
                    <div className="kuvat-column">
                        <img id="modalImg" className="modalImages" src={kuva3} onClick={event => opening()} alt="Toimiston esittelykuva" />
                        <img id="modalImg" className="modalImages" src={kuva2} onClick={event => opening()} alt="Toimiston esittelykuva" />
                        <img id="modalImg" className="modalImages" src={kuva7} onClick={event => opening()} alt="Global Game Jam -peliin grafiikkaa ja animaatiota" />
                        <img id="modalImg" className="modalImages" src={kuva12} onClick={event => opening()} alt="UI/UX-konseptikuva CV-peli-idealle" />
                    </div>
                    <div className="kuvat-column">
                        <img id="modalImg" className="modalImages" src={kuva4} onClick={event => opening()} alt="Grafiikka ja UI/UX-suunnittelu Turvakamu-sovellukselle" />
                        <img id="modalImg" className="modalImages" src={kuva5} onClick={event => opening()} alt="Hahmosuunnittelu Turvakamu-sovellukselle" />
                        <img id="modalImg" className="modalImages" src={kuva8} onClick={event => opening()} alt="UI-konseptikuvaa mobiilisovelluksen markkinointia varten" />
                        <img id="modalImg" className="modalImages" src={kuva10} onClick={event => opening()} alt="Kuvitus" />
                        <img id="modalImg" className="modalImages" src={kuva11} onClick={event => opening()} alt="Animaatio" />
                    </div>
                </div>
                <div id="kuvatModal" className="modal" onClick={event => closing()}>
                    <span className="close">&times;</span>
                    <img className="modal-content" id="modalFocusImg" alt="modaalikuva" />
                    <div id="modalCaption"></div>
                </div>
            </div>
        );
    }
}

export default Kuvat;

