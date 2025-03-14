import React from "react";
import "./css commerces/comercio.css";
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../Footer";

function Comercio_falcon() {

    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="titulo-h2">Redes de Distribución de Falcón</h2>
                            <br></br><br></br>

                            <Accordion style={{ width: '55%' }}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">AUTO RESPUESTOS BUCARAL, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV INDEPENDENCIA ENTRE CALLE SIERRAALTA CON CALLE CRISTAL MPIO MIRANDA  FALCON SANTA ANA ZONA 4101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/bucaral_autorepuestos/" target="_blank">@bucaral_autorepuestos</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584126934466" target="_blank"> +58 412-6934466</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146930915" target="_blank"> +58 414-6930915</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">INVERSIONES DUMAVEN, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CTRA NACIONAL MORON - CORO LOCAL NRO S/N SECTOR BARRIALITO PUERTO CUMAREBO FALCON ZONA POSTAL 4167.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584123150633" target="_blank"> +58 412-3150633</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">SUPER TIRES VALENCIA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV TIRSO SALAVARRIA  EDIF SARTEGA PISO B SECTOR CENTRO SANTA ANA DE CORO FALCON ZONA POSTAL 4101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584144823493" target="_blank"> +58 414-4823493</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2082.82137133863!2d-69.66656874324933!3d11.389332859556832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e842b4c29d10b27%3A0x3aa0f534f101249!2sSuper%20Tires%20Valencia%20C.A!5e0!3m2!1sen!2sve!4v1698672524985!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">INVERSIONES LUGCARS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CTRA VARIANTE NORTE CON AVENIDA LOS MEDANOS SECTOR CONCORDIA SANTA ANA DE CORO FALCON ZONA POSTAL 4101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lugcars_ca/" target="_blank">@lugcars_ca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584142109080" target="_blank"> +58 414-2109080</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2082.82137133863!2d-69.66656874324933!3d11.389332859556832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e842b4c29d10b27%3A0x3aa0f534f101249!2sSuper%20Tires%20Valencia%20C.A!5e0!3m2!1sen!2sve!4v1698672524985!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header">VALERO AUTOMOTIVE, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV LOS MEDANOS CON CALLE POLITA DE LIMA EDF DON VICENSO NR 25 PISO 01 SECTOR SAN BOSCO SANTA ANA CORO Z 4101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/valeroautomotive/" target="_blank">@valeroautomotive</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+582682522055" target="_blank"> +58 268-2522055</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584122403589" target="_blank"> +58 412-2403589</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.3453654205371!2d-69.66816547475506!3d11.4191766358719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e842baeddb698bb%3A0x3c806bc9cbf6c7fb!2sVALERO%20AUTOMOTIVE%2C%20C.A.!5e0!3m2!1sen!2sve!4v1698672981598!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header class="acordion-header">INVERSIONES HANY MOISES, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. AUTOPISTA VARIANTE NORTE, CON AV. CHEMA SAHER FRENTE A LA ESTACION DE SERVICIO KM7 LOCAL NRO 7 SECTOR KM 7 SANTA ANA DE CORO FALCON ZONA POSTAL 4101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146588352" target="_blank"> +58 414-6588352</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <Accordion.Header class="acordion-header">MULTISERVICIOS ANTIGUO AEROPUERTO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> DF PRINCIPAL LOCAL NRO S/N SECTOR ANTIGUO AEROPUERTO  PTO FIJO- EDO FALCON PUNTO FIJO FALCON ZONA POSTAL 4102.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/multiservicios_antiguo_aeropue/" target="_blank">@multiservicios_antiguo_aeropue</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584126676684" target="_blank"> +58 412-6676684</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1518.1360053768883!2d-70.18608236840977!3d11.718159117529645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e85edcda3ea4f61%3A0xd44e88e127e7c9eb!2sMultiservicios%20Antiguo%20Aeropuerto%20C.A!5e0!3m2!1sen!2sve!4v1698673716386!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7">
                                    <Accordion.Header class="acordion-header">MULTISERVICIOS LUBRIVEN PARAGUANA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE AYACUCHO ENTRE CALLE URDANETA Y  MONAGAS LOCAL NRO 30-242 SECTOR CENTRO PUNTO FIJO FALCON ZONA POSTAL 4102.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubrivenparaguana/" target="_blank">@lubrivenparaguana</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584129042085" target="_blank"> +58 412-9042085</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.964975874956!2d-70.2009119683367!3d11.688121917215074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e85ed0467d73b5f%3A0xa34bfa91ffb5cc7c!2sLubriven%20Paraguana!5e0!3m2!1sen!2sve!4v1698673944476!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="8">
                                    <Accordion.Header class="acordion-header">TECNO ESCAPE PROGRESO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> SIN INFORMACIÓN.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/tecnoescapeprogreso/" target="_blank">@tecnoescapeprogreso</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246823293" target="_blank"> +58 424-6823293</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.3818234454753!2d-70.1937302193728!3d11.715979202812559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e85ed29df38890b%3A0x93cd2b453b98d2e0!2sTecno%20Escape%20Progreso!5e0!3m2!1sen!2sve!4v1698674128579!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="9">
                                    <Accordion.Header class="acordion-header">AUTOS Y CAMIONES GUARAN, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> SIN INFORMACIÓN.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246724679" target="_blank"> +58 424-6724679</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d808.470787309426!2d-70.1998589379315!3d11.707166679407878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e85ed6ac82e0421%3A0x119c7ad9d0f4b457!2sAuto%20y%20Camiones%20Guaran!5e0!3m2!1sen!2sve!4v1698674243975!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="10">
                                    <Accordion.Header class="acordion-header">REPUESTOS AUTOMOTRIZ ANNY, F.P.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV DON PABLO SAHER CASA NRO SECTOR LA FLORIDA SANTA CRUZ DE LOS TAQUES FALCON.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584125347282" target="_blank"> +58 412-5347282</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                            <br /><br />
                        </div>
                    </center>
                </div>
            </body>

            <Footer />
        </>
    );
}

export default Comercio_falcon;