import React from "react";
import "./css commerces/comercio.css";
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../Footer";

function Comercio_trujillo() {

    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br />
                            <h2 className="titulo-h2">Redes de Distribución de Trujillo</h2>
                            <br /><br />

                            <Accordion style={{ width: '55%' }}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">TOYOANDINA, S.A</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV BOLIVAR EDIF TOYOANDINA PISO PB LOCAL S/N SECTOR EL COUNTRY VALERA TRUJILLO ZONA POSTAL 3101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/toyoandina/?hl=en" target="_blank">@toyoandina</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+582714150200" target="_blank"> +58 271-4150200</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1307.1024859917814!2d-70.62715121826871!3d9.288553610425412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e632621e6a76a15%3A0x1db4397f0397692b!2sToyoandina!5e0!3m2!1sen!2sve!4v1698440511877!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">INVERSIONES VASGRACA, C.A</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CTRA NACIONAL CASA S/N SECTOR LA VEGA ARRIBA BOCONO EDO TRUJILLO BOCONO TRUJILLO ZONA POSTAL 3103.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/inversionesvasgraca/?hl=en" target="_blank">@inversionesvasgraca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584247828524" target="_blank"> +58 424-7828524</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">MULTIREPUESTOS Y ACCESORIOS LA 16, C.A</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 7 E/AVENIDAS 12 Y 13 LOCAL NRO 12-61 SECTOR EL CENTRO VALERA ESTADO TRUJILLO ZONA POSTAL 3101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584247750615" target="_blank"> +58 424-7750615</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.0046590227452!2d-70.60951960823941!3d9.315835045044937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e632864d660ac4b%3A0x7d81f66748d54407!2sRepuestos%20la%2016!5e0!3m2!1sen!2sve!4v1698440803645!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">AUTO SERVICIO EL TRIANGULO, C.A</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV BOLIVAR LOCAL S/N SECTOR LA MARCHANTICA MUNICIPIO VALERA ESTADO TRUJILLO VALERA TRUJILLO ZONA POSTAL 3101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584264494837" target="_blank"> +58 426-4494837</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header">DIESEL BRAKE PART LOS ANDES C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE LA PAZ ENTRE AVENIDA MEXICO Y CARACAS LOCAL NRO S/N URB PLATA I VALERA TRUJILLO ZONA POSTAL 3101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/dieselbrakepart.la/?hl=en" target="_blank">@dieselbrakepart.la</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147303220" target="_blank"> +58 414-7303220</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header class="acordion-header">REPUESTOS HNOS DURAN, C.A</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE PAEZ ENTRE GRAN COLOMBIA Y SUCRE LOCAL NRO 1-27 SECTOR CENTRO DE BOCONO ESTADO TRUJILLO BOCONO TRUJILLO ZONA POSTAL 3103.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/repuestoshnosduran/?hl=en" target="_blank">@repuestoshnosduran</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> SIN INFORMACIÓN<br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <Accordion.Header class="acordion-header">SUPER KAUCHOS GILSA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV BOLIVARIANA C/C 18 LOCAL NRO S/N URB LAS ACACIAS MUNICIPIO VALERA ESTADO TRUJILLO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/superkauchosgilsa/?hl=en" target="_blank">@superkauchosgilsa</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+582712318462" target="_blank"> +58 271-2318462</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7">
                                    <Accordion.Header class="acordion-header">INVERSIONES TODO CAUCHO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CTRA NACIONAL LOCAL ND S/N SECTOR SEGUNDO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/toyoandina/?hl=en" target="_blank">@toyoandina</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584140362985" target="_blank"> +58 414-0362985</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1073.5614680895976!2d-70.23914886067043!3d9.258529771144293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7cd9f8511eb9ab%3A0x7c159199df97e18d!2sInversiones%20Todo%20Caucho%20C.A!5e0!3m2!1sen!2sve!4v1698442062054!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="8">
                                    <Accordion.Header class="acordion-header">REPUESTOS EL TENDAL, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE SUCRE ENTRE CALLES PAEZ Y URDANETA CASA NRO 2-68 SECTOR CENTRO BOCONO TRUJILLO ZONA POSTAL 3103.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584247023021" target="_blank"> +58 424-7023021</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="9">
                                    <Accordion.Header class="acordion-header">LA NUEVA CASA DEL FILTRO 2017, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV BOLIVAR EDIF HERMANOS MONTILLA PISO PB LOCAL S/N SECTOR EL BOLO VALERA TRUJILLO ZOA POSTAL 3101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+5841417786860" target="_blank"> +58 414-1778686</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584127882213" target="_blank"> +58 412-7882213</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+58416676570" target="_blank"> +58 416-676570</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="10">
                                    <Accordion.Header class="acordion-header">NEUMÁTICOS VALERA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV 10 ENTRE CALLE 4 Y 5 CC VICTOR HUGO NIVEL P/B LOCAL 4 SECTOR EL BOLO PQUIA  MERCEDEZ DIAZ VALERA TRUJILLO Z 3101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/neumavalca/?hl=en" target="_blank">@neumalvaca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147098558" target="_blank"> +58 414-7098558</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="11">
                                    <Accordion.Header class="acordion-header">INVERSIONES BRICPARD, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV 9 ENTRE CALLE 4 Y 5 LOCAL NRO S/N SECTOR EL BOLO PRQUIA MERCEDES DIAZ MNCPIO VALERA TRUJILLO ZONA P 3101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/bricpard/" target="_blank">@bricpard</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147309278" target="_blank"> +58 414-7309278</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="12">
                                    <Accordion.Header class="acordion-header">MULTIREPUESTOS EL ATENEO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE PAEZ LOCAL 0-231 NRO 01 SECTOR CENTRO BOCONO TRUJILLO ZONA POSTAL 3103.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/multirelateneo/" target="_blank">@multirelateneo</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147494063" target="_blank"> +58 414-7494063</a><br /><br />                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="13">
                                    <Accordion.Header class="acordion-header">LUBRICAUCHOS EL CESAR, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV 9 LOCAL NRO 35 SECTOR EL BOLO LA PLATA, VALERA EDO, TRUJILLO VALERA TRUJILLO ZONA POSTAL 3101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubricauchos_elcesar/" target="_blank">@lubricauchos_elcesar</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584121733069" target="_blank"> +58 412-1733069</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d953.7484682415542!2d-70.60191813190441!3d9.323958026692214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6329e18bbd32c9%3A0x12600ee9a0771370!2sLubricauchos%20El%20C%C3%A9sar!5e0!3m2!1sen!2sve!4v1698671642603!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="14">
                                    <Accordion.Header class="acordion-header">INVERSIONES ANATECNO DE ANA MARIA TORRES, F.P</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. PRINCIPAL CASA NRO. S/N SECTOR DON ALFREDO MUNICIPIO PAMPAN EDO TRUJILLO MONAY TRUJILLO ZONA POSTA 3151.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584121715284" target="_blank"> +58 412-1715284</a><br /><br />
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

export default Comercio_trujillo;