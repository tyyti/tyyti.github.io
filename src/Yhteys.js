import React, { Component } from "react";

class Yhteys extends Component {
    render() {
        return (
            <div className="yhteys-sivu">
                <h1>Ota yhteyttä</h1>
                <div className="yhteys-lomake">
                    <form action="#" method="post" id="contact_form">
                        <label for="name">Nimesi</label>
                        <input type="text" id="name_input" name="name" placeholder="Kirjoita nimesi tänne..." required />

                        <label for="email">Sähköpostisi</label>
                        <input type="text" id="email_input" name="email" placeholder="Miten saan sinuun takaisin yhteyttä?" required />

                        <label for="message">Viestisi</label>
                        <textarea id="message_input" name="message" placeholder="Mitä haluaisit kertoa minulle?" required></textarea>

                        <button id="sendMessage">Lähetä</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Yhteys;


