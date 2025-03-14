import React from "react";
import '../components/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {

    return (
        <>
            <div className="footer-container">
                <center>
                    <div class="footer-horario">
                        <div class="work-hour">
                            <br />

                            <h4>Horario de Atención:</h4>
                            <p>Lunes – Viernes, 8:00 a.m. – 6:00 p.m.</p>
                        </div>
                    </div>
                </center>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4">
                            <div class="social-icons">
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/gulfoilvenezuela/?hl=en"
                                    aria-label="Instagram"
                                >
                                    <FontAwesomeIcon className="social-icons" icon={faInstagram} />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/gulfoilvenezuela"
                                    aria-label="Facebook"
                                >
                                    <FontAwesomeIcon className="social-icons" icon={faFacebook} />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.youtube.com/channel/UC94o6lorvIT2v98VCnGjL7w"
                                    aria-label="Youtube"
                                >
                                    <FontAwesomeIcon className="social-icons" icon={faYoutube} />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-4"></div>
                    </div>
                </div>
                <br />

                <center>
                    <div class="footer-horario">
                        <a href="/" className="social-logo">
                            <img src="images/gulf-logo.webp" width={75} />
                        </a>
                        &#160;
                        &#160;
                        &#160;
                        &#160;
                        <a
                            className="social-logo"
                            href="https://lubricanteslamundial.com.ve/"
                            target="_blank"
                        >
                            <img src="images/llm-blanco.png" width={200} />
                        </a>
                    </div>
                </center>

                <br />
                <div>
                    <center>
                        <div class="container">
                            <small class="website-rights">
                                ©{" "}
                                <a class="dunlop-ven" href="/">
                                    GULF Venezuela
                                </a>
                                . Todos los derechos reservados. Diseñado por Grupo La Mundial
                                C.A.
                            </small>
                        </div>
                    </center>
                    <br />
                </div>
            </div>
        </>
    );
}

export default Footer;