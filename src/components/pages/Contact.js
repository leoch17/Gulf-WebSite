import React from "react";
import '../pages/Contact.css';
import Footer from '../Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMap } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {



    return (
        <>
            <br />
            <div className="contactos">
                <main className="page-content">
                    <div className="tarjeta">
                        <div className="content">
                            <h2 className="title">Whatsapp</h2>
                            <a className="enlace-contacto" href="https://wa.link/byj1si" target="_blank"><FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "100px" }} /></a>
                        </div>
                    </div>
                    <div className="tarjeta">
                        <div className="content">
                            <h2 className="title">Teléfono</h2>
                            <a className="enlace-contacto" href="tel:+584246328415" target="_blank"><FontAwesomeIcon icon={faPhone} style={{ fontSize: "100px" }} /></a>
                        </div>
                    </div>
                    <div className="tarjeta">
                        <div className="content">
                            <h2 className="title">Correo Electrónico</h2>
                            <a className="enlace-contacto" href="mailto:info@blmundial.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "100px" }} /></a>
                        </div>
                    </div>
                    <div className="tarjeta">
                        <div className="content">
                            <h2 className="title">Ubicación</h2>
                            <a className="enlace-contacto" href="https://maps.app.goo.gl/uh13j4AatmTGZA7v9" target="_blank"><FontAwesomeIcon icon={faMap} style={{ fontSize: "100px" }} /></a>
                        </div>
                    </div>
                </main>
            </div>
            <br />
            <Footer />
        </>
    );
}

export default Contact;