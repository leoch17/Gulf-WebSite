import React from "react";
import '../Commerces/css commerces/comercio.css';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../Footer";

function Comercio_zulia() {
    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="titulo-h2">Redes de Distribución del Zulia</h2>

                            {/* ZONA NORTE */}
                            <Accordion style={{ width: '55%' }}>
                                <Card>
                                    <Card.Header style={{ backgroundColor: "#FF6318", color: "#002777", fontWeight: "bold" }}>ZONA NORTE</Card.Header>
                                </Card>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">RUEDAS LA MUNDIAL 72, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 72 GILBERTO CORREA, ENTRE AV. 13 Y AV. 12 AL LADO DE FARMACIA FARMAEXPRESS.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaslamundial/?hl=en" target="_blank">@ruedaslamundial</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584122618392" target="_blank"> +58 412-2618392</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.2100799929663!2d-71.61596608000409!3d10.669499683865592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999d446d6317d%3A0x6b5846a8095c79d5!2sRuedas%20La%20Mundial%2072%2C%20C.A.!5e0!3m2!1ses!2sve!4v1685629178927!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">RUEDAS LA MUNDIAL CECILIO ACOSTA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. 9B CON CALLE 67 CECILIO ACOSTA.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaslamundial/?hl=en" target="_blank">@ruedaslamundial</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584122618392" target="_blank">+58 412-2618392</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.234247697298!2d-71.61340748604994!3d10.677206251225455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89994e59916691%3A0xfe5933d950b31512!2sRuedas%20La%20Mundial!5e0!3m2!1sen!2sve!4v1685476320688!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">RUEDAS LA MUNDIAL DELICIAS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AVENIDA 15 DELICIAS CON CALLE 82.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaslamundial/?hl=en" target="_blank">@ruedaslamundial</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584122618392" target="_blank">+58 412-2618392</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5206.440594963709!2d-71.6217506944527!3d10.660315176613349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999b1109655b3%3A0x7f9b178f3de214ff!2sRuedas%20La%20Mundial%20Delicias!5e0!3m2!1sen!2sve!4v1698269483184!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">PULILAVADO LA 11, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV 11 CALLE 66 A LOCAL PULILAVADO 11 MARACAIBO ZULIA ZONA POSTAL 4001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/pulilavadolaonce/" target="_blank">@pulilavadolaonce</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146149072" target="_blank">+58 414-6149072</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.7279795192712!2d-71.61782452933241!3d10.678209761006602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89995fded3701f%3A0xdc48193b54e56186!2sPulilavado%20La%2011!5e0!3m2!1sen!2sve!4v1698422272265!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header">XTREME LUBRICANTES, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV 28 LA LIMPIA CC BONAIRE NIVEL PB LOCAL 6 Y 7 SECTOR LA FUSTA MARACAIBO ZULIA ZONA POSTAL 4001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/xtremelubricantesmcbo/" target="_blank">@xtremelubricantesmcbo</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584126866925" target="_blank">+58 412-6866925</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1783.6556636431258!2d-71.63742625472442!3d10.661520814933532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89993803055589%3A0x11d8fd0210a84e6e!2sXtremelubricantes!5e0!3m2!1sen!2sve!4v1698422410804!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header class="acordion-header">TECNOLUBRICANTES, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV 16 C/C 79 LOCAL 15-99 LAS DELICIAS MARACAIBO ZULIA.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/tecnolubricantes_/" target="_blank">@tecnolubricantes_</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246234426" target="_blank">+58 424-6234426</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1783.6559890238948!2d-71.6207121617707!3d10.661465294266957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89991d62cf295f%3A0xf94f7ece02a714e4!2sTecnolubricantes!5e0!3m2!1sen!2sve!4v1698422679577!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <Accordion.Header class="acordion-header">ELMOCA LUBRICACIÓN, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 67 ENTRE AVENIDAS 12 Y 13 LOCAL NRO 12-53 SECTOR TIERRA NEGRA MARACAIBO ZULIA ZONA POSTAL 4004.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/elmocataller/" target="_blank">@elmocataller</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246094927" target="_blank">+58 424-6094927</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584128667182" target="_blank">+58 412-8667182</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1301.5377734186072!2d-71.61834679421811!3d10.677227067781118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e899920f262a577%3A0xfe23d647715da190!2sGRUPO%20ELMOCA!5e0!3m2!1sen!2sve!4v1698422925300!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7">
                                    <Accordion.Header class="acordion-header">DISTRIBUIDORA-IMPORTADORA OILUB, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> DF AV 48 VIA LA CAÑADA CASA NRO 177A ZONA VISTA EL SOL EL SILENCIO ZULIA ZONA POSTAL 4005.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubricantesoilub/" target="_blank">@lubricantesoilub</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584127505381" target="_blank">+58 412-7505381</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.12507764775!2d-71.64788345007642!3d10.550023158220327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e899783601842e1%3A0x4b3717d19c6ee868!2sLubricantes%20oilub%20ca!5e0!3m2!1sen!2sve!4v1698423208895!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="8">
                                    <Accordion.Header class="acordion-header">LUBRICENTER LA 10, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 60 CON AVENIDA 10 CASA NRO 9B-199 SECTOR PUEBLO NUEVO MARACAIBO ZULIA ZONA  POSTAL 4001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubricenterla10/" target="_blank">@lubricenterla10</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146319539" target="_blank">+58 414-6319539</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.630356421666!2d-71.61689412933225!3d10.685773060868213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8998d6aeadac7b%3A0xb57cf3924b4260c4!2sThe%20Lubricenter%2010%20C.A.!5e0!3m2!1sen!2sve!4v1698423364292!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="9">
                                    <Accordion.Header class="acordion-header">LUBRITODO LA 10, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV 10 ENTRE CALLE 59 Y 60 CASA NRO 3969 SECTOR PUEBLO NUEVO MARACAIBO ZONA POSTAL 4001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubritodola10ca/" target="_blank">@lubritodola10ca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146465954" target="_blank">+58 414-6465954</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.5598040482744!2d-71.61506732754484!3d10.686442896274785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999a3c5c99659%3A0xd9ef8815ef8bc68!2sLubritodo%20la%2010%20c.a!5e0!3m2!1sen!2sve!4v1698423485238!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion><br /><br />



                            {/* ZONA SUR */}
                            <Accordion style={{ width: '55%' }}>
                                <Card>
                                    <Card.Header style={{ backgroundColor: "#FF6318", color: "#002777", fontWeight: "bold" }}>ZONA SUR</Card.Header>
                                </Card>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">RUEDAS LA MUNDIAL SUR, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> UBICADA A 200 METROS DE LA ESCUELA DE POLICÍAS DE SAN FRANCÍSCO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaslamundial/?hl=en" target="_blank">@ruedaslamundial</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584122618392" target="_blank">+58 412-2618392</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2332.1889969281747!2d-71.62410179458313!3d10.558915070637386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89979e7bbb8271%3A0xd9b6b8ffb13d653a!2sRuedas%20La%20Mundial%20Sur!5e0!3m2!1sen!2sve!4v1685476539488!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">LUBRYKARS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 158 CON AVENIDA 35 LOCAL 1 URB SAN FRANCISCO ZULIA ZONA POSTAL 4004.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubrykars/?hl=en" target="_blank">@lubrykars</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584125800998" target="_blank">+58 412-5800998</a><br /><br />
                                        <br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">LUBRISERVICIOS BAMBAM, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 31A CASA NRO 3-51 BARRIO NEGRO RPIMERO SAN FRANCISCO ZULIA ZONA POSTAL 4004.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubriservicios.bambam/?hl=en" target="_blank">@lubriservicios.bambam</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246762175" target="_blank">+58 424-6762175</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1301.9808290653887!2d-71.64856728258918!3d10.573279429313859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8997236c3cfa41%3A0x379fd33ec3648235!2sLubriservicios%20BamBam%2C%20c.a.!5e0!3m2!1sen!2sve!4v1698430712808!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">INVERSURCA MJ, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 18 CON AV. 11 Y 12 EDIF. I.C.T. PISO 2 LOCAL 12 BARRIO SIERRA MAESTRA ZULIA ZONA POSTAL 4004.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/inversurca.mj/?hl=en" target="_blank">@inversurca.mj</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146617601" target="_blank">+58 414-6617601</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.8786767096744!2d-71.63900983837843!3d10.58097996958335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89974e70a3f60f%3A0x4c48a18d085ffeee!2sInversurca%20MJ!5e0!3m2!1sen!2sve!4v1698432069629!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header">COMERCIALIZADORA LOS PARRA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. 7 CASA NRO 17-136 BARRIO EL PERU SAN FRANCISCO ZULIA ZONA POSTAL 4004.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/comercializadoralosparras/?hl=en" target="_blank">@comercializadoralosparras</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246421556" target="_blank">+58 424-6421556</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146926234" target="_blank">+58 414-6926234</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1302.0258092662225!2d-71.62238591010406!3d10.562669844635378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8997140837f0b9%3A0x93572589d04b44d1!2sComercializadora%20los%20Parras%20ca!5e0!3m2!1sen!2sve!4v1698432243229!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header class="acordion-header">INVERSIONES M.A 2017, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CTRA VIA A PERIJA CON ESQUINA AV 59 LOCAL NRO S/N BARRIO 2 DE FEBRERO LOS CORTIJOS ZULIA ZONA POSTAL 4004.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/inversionesm.a2017/?hl=en" target="_blank">@inversionesm.a2017</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246838415" target="_blank">+58 424-6838415</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1784.1791685233093!2d-71.66303617713247!3d10.571820871816527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e899742b6b55c17%3A0xdef462a9a295656d!2sINVERSIONES%20M.A%202017!5e0!3m2!1sen!2sve!4v1698432414140!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <Accordion.Header class="acordion-header">CAR WASH EL VALLE, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV 16 (ADOLFO LOPEZ) CON ESQUINA CALLE 14 (EL VALLE) LOCAL NRO S/N SECTOR EL VALLE LA VILLA DEL ROSARIO ZULIA ZONA POSTAL 4047.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/carwashelvalle/?hl=en" target="_blank">@carwashelvalle</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584127863489" target="_blank">+58 412-7863489</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7">
                                    <Accordion.Header class="acordion-header">AGROTIRES VE, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV DERECHA CC LOCAL COMERCIAL NIVEL S/N LOCAL OFICINA SECTOR JALISCO LA VILLA DEL ROSARIO ZULIA ZONA 4047.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/agrotires/?hl=en" target="_blank">@agrotires</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146416431" target="_blank">+58 414-6416431</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146888805" target="_blank">+58 414-6888805</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1113.141269546391!2d-72.33761922956968!3d10.314470027693545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8a6d49eca17667%3A0xe15798a396169160!2sAgrotires%20Ve%2C%20C.A.!5e0!3m2!1sen!2sve!4v1698432698320!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion><br></br><br></br>

                            {/* ZONA NORESTE */}
                            <Accordion style={{ width: '55%' }}>
                                <Card>
                                    <Card.Header style={{ backgroundColor: "#FF6318", color: "#002777", fontWeight: "bold" }}>ZONA NORESTE</Card.Header>
                                </Card>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">RUEDAS LA MUNDIAL SABANETA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> SECTOR SABANETA, DIAGONAL AL MONUMENTO LA CHINITA DE LA C1.<br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaslamundial/?hl=en" target="_blank">@ruedaslamundial</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584122618392" target="_blank">+58 412-2618392</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.8260344166465!2d-71.64203876495948!3d10.628478416304889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999beca66dc79%3A0x36e5800889123875!2sRuedas%20La%20Mundial%20Sabaneta!5e0!3m2!1sen!2sve!4v1685476457134!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">RUEDAS LA MUNDIAL VERITAS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 90, CON AV. 8 (DIAGONAL A LA ESTACIÓN DE SERVICIO NUEVO CIRCO), LAS VERITAS, MARACAIBO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaslamundial/?hl=en" target="_blank">@ruedaslamundial</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584122618392" target="_blank">+58 412-2618392</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960.5559377343!2d-71.61050540879857!3d10.64841612360719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999e5e16eec79%3A0xcafe6474ff2d41b3!2sRuedas%20la%20Mundial%20Veritas!5e0!3m2!1sen!2sve!4v1685476504545!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">DISTRIBUIDORA SUAREZ PENA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 71 CASA NRO 75-51 BARRIO PANAMERICANO MARACAIBO ZULIA ZONA POSTAL 4001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146691511" target="_blank">+58 414-6691511</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">DISLUVIRCA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV 63A LOCAL NRO 8 SECTOR PRC LOMAS DEL VALLE II MARACAIBO ZULIA ZONA POSTAL 4001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/disluvirca/?hl=en" target="_blank">@disluvirca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146496833" target="_blank">+58 414-6496833</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d949.908252425991!2d-71.6740254243497!3d10.637479694990935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e899be42b491dd5%3A0x30f366543f194ee7!2sDisluvirca%20C3!5e0!3m2!1sen!2sve!4v1698430105364!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header">LUBRICAUCHOS LA LIMPIA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV 25 LA LIMPIA CON CALLE 85 LOCAL NRO 79-16 SECTOR LA LIMPIA MARACAIBO ZULIA, ZONA POSTAL 4005.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubricauchoslalimpia/?hl=en" target="_blank">@lubricauchoslalimpia</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246299149" target="_blank">+58 424-6299149</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion><br></br><br></br>

                            {/* ZONA C.O.L. */}
                            <Accordion style={{ width: '55%' }}>
                                <Card>
                                    <Card.Header style={{ backgroundColor: "#FF6318", color: "#002777", fontWeight: "bold" }}>ZONA C.O.L.</Card.Header>
                                </Card>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">LUBRITODO C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV BOLIVAR EDIF SAFADI PISO 1 LOCAL 112.<br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubritodo.ca/" target="_blank">@lubritodo.ca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146769605" target="_blank">+58 414-6769605</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1303.5601358265794!2d-71.31898517940255!3d10.19422957285537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89d105a77c50e9%3A0xdf70658d22e5005c!2sLUBRITODO%20CA!5e0!3m2!1sen!2sve!4v1698682343660!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                            <br /> <br />

                        </div>
                    </center>
                </div>
            </body>
            <Footer />
        </>);
}

export default Comercio_zulia;
