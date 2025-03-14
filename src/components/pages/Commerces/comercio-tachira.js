import React from "react";
import "./css commerces/comercio.css";
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../Footer";

function Comercio_tachira() {

    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="titulo-h2">Redes de Distribución de Táchira</h2>
                            <br></br><br></br>

                            <Accordion style={{ width: '55%' }}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">JHONNY FERRO AUTO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 14 ESQUINA CARRERA 16  CASA NRO 15-57 BARRIO SAN CARLOS  SAN CRISTOBAL TACHIRA  ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/jhonnyferroautovirtual/?hl=en" target="_blank">@jhonnyferroautovirtual</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147214859" target="_blank"> +58 414-7214859</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">SERVICIOS CONSTRUCCIONES Y ASESORIAS ARTURO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV LAS VEGAS DE TARIBA LOCAL GALPON NRO 4-105 SECTOR LAS VEGAS DE TARIBATACHIRA ZONA POSTAL 5017.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} />SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584143769822" target="_blank"> +58 414-3769822</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">LA BOUTIQUE DEL AUTO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV CARABOBO CASA NRO 20-58A SECTOR LA ROMERA SAN CRISTOBAL TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} />SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584247702812" target="_blank"> +58 424-7702812</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">LUBRIBAT TACHIRA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> DF AV 8VA LOCAL NRO 7-187 ZONA LA CONCORDIA SAN CRISTOBAL TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubribatca07/?hl=en" target="_blank">@lubribatca07</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147114083" target="_blank"> +58 414-7114083</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147127125" target="_blank"> +58 414-7127125</a><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1312.3650175740024!2d-72.23561345368783!3d7.751954845013475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666caab8db4271%3A0x9dd18f2bcf041373!2sLUBRIBAT%20TACHIRA%2C%20C.A!5e0!3m2!1sen!2sve!4v1698435469994!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header">BATTERY ANDES, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 02 CASA NRO 14-117 BARRIO LAS DELICIAS, SECTOR LA CONCORDIA SAN CRISTOBAL TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/batteryandes/?hl=en" target="_blank">@batteryandes</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147452105" target="_blank"> +58 414-7452105</a><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.280966724751!2d-72.22710232939201!3d7.759997807569687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666cb01d7f8e5d%3A0x80d30ffc51712fa!2sBattery%20Andes%20C.A!5e0!3m2!1sen!2sve!4v1698435584068!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header class="acordion-header">HIPER CAUCHOS LAS VEGAS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV PRINCIPAL DE LAS VEGAS CON CALLE 0 LOCAL 0-136 GALPON NRO 1 SECTOR LAS VEGAS DE TARIBA TARIBA TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/pirelli.lasvegas/?hl=en" target="_blank">@pirelli.lasvegas</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584140325331" target="_blank"> +58 414-0325331</a><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.5144980629824!2d-72.2109762439074!3d7.8266751793136855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666de826a7fa95%3A0x84ae84b459903372!2sCAUCHOS%20LAS%20VEGAS%20C.%20A.!5e0!3m2!1sen!2sve!4v1698435835449!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <Accordion.Header class="acordion-header">INNOVA STATES, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CR 2 ENTRE CALLE 9 Y 10 LOCAL STARS MOTORS NRO P/B SECTOR LA EMIRITA SAN CRISTOBAL TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/innovastate_sc/?hl=en" target="_blank">@innovastate_sc</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584247329670" target="_blank"> +58 424-7329670</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7">
                                    <Accordion.Header class="acordion-header">K.G MULTISERVICIOS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. LIBERTADOR CASA NRO 60-417 SECTOR LAS LOMAS SAN CRISTOBAL TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/kgmultiservicios/?hl=en" target="_blank">@kgmultiservicios</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147226215" target="_blank"> +58 414-7226215</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="8">
                                    <Accordion.Header class="acordion-header">TIENDA MULTI MARCAS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV LIBERTADOR CC ESTACION DE SERVICIO LAS LOMAS NIVEL A LOCAL 5 SECTOR LAS LOMAS SAN CRISTOBAL TACHIRA.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/tiendamultimarcasca/?hl=en" target="_blank">@tiendamultimarcasca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584121055692" target="_blank"> +58 412-1055692</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="9">
                                    <Accordion.Header class="acordion-header">LUBRICANTES Y ACCESORIOS VIRGEN DEL VALLE, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 2 LOCAL NRO 2-26  BARRIO SUCRE PARTE BAJA SAN CRISTOBAL TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubricantesvirgendelvalle/?hl=en" target="_blank">@lubricantesvirgendelvalle</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147829772" target="_blank"> +58 414-7829772</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="10">
                                    <Accordion.Header class="acordion-header">DEM, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CTRA PRINCIPAL VIA SAN JOAQUIN CASA NRO 0-110 SECTOR EL MORAL SANTA ANA DEL TACHIRA TACHIRA ZONA POSTAL 5051.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/demcalubricantesvzla/?hl=en" target="_blank">@demcalubricantesvzla</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584247322653" target="_blank"> +58 424-7322653</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="11">
                                    <Accordion.Header class="acordion-header">MULTISERVICIOS AUTOMOTRIZ F.C</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CARRETERA 5 CON CALLE 12 Y 13 MONSEÑOR BRICEÑO TARIBA MUNICIPIO CARDENAS CASA NRO 12-02.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+582764237214" target="_blank"> +58 276-4237214</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="12">
                                    <Accordion.Header class="acordion-header">MULTISERVICIOS DKM ROA</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CRA 10 ENTRE CALLE 3 CON AVENIDA 19 DE ABRIL CASA NRO 2-66 SECTOR LA CONCORDIA SAN CRISTOBAL TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584120704672" target="_blank"> +58 412-0704672</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="13">
                                    <Accordion.Header class="acordion-header">AUTO FRENOS JHON</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> VDA PRINCIPAL LOCAL NRO  7-25 SECTOR BARRANCAS PARTE BAJA TARIBA TACHIRA ZONA POSTAL 5017.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/autofrenosjhon/?hl=en" target="_blank">@autofrenosjhon</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584247451706" target="_blank"> +58 424-7451706</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="14">
                                    <Accordion.Header class="acordion-header">AUTOREPUESTOS Y SERVICIOS GARCIA</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> DF. AV PRINCIPAL LA GUAYANA  CASA NRO 25  BARRIO LOS KIOSCOS SAN CRISTOBAL TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584149798581" target="_blank"> +58 414-9798581</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="15">
                                    <Accordion.Header class="acordion-header">LUBRIMAX JC</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> DF. AV PRINCIPAL LA GUAYANA  CASA NRO 25  BARRIO LOS KIOSCOS SAN CRISTOBAL TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubrimaxjc/?hl=en" target="_blank">@lubrimaxjc</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584149798581" target="_blank"> +58 414-9798581</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="16">
                                    <Accordion.Header class="acordion-header">MULTIREPUESTOS SANTA ANA D.J</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CR 3 ENTRE CALLE 10 Y 11 CASA NRO 10-67 SECTOR LAS GOLONDRINAS SANTA ANA DEL TACHIRA TACHIRA ZONA POSTAL5051.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584247322653" target="_blank"> +58 424-7322653</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="17">
                                    <Accordion.Header class="acordion-header">TIRE EXPRESS KIKE</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CR 19 CON CALLE 13 EDIF VICTORIA PISO 1 LOCAL 1 PLANTA BAJA BARRIO BARRIO OBRERO TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/tire_express_kike/?hl=en" target="_blank">@tire_express_kike</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584247254216" target="_blank"> +58 424-7254216</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="18">
                                    <Accordion.Header class="acordion-header">MUNDO FRENOS R.E</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 6 CON OCTAVA AVENIDA CASA 8-35 SECTOR LA CONCORDIA SAN CRISTOBAL TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584142988419" target="_blank"> +58 414-2988419</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="19">
                                    <Accordion.Header class="acordion-header">MOTO REPUESTOS EXPRESS 06</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV PRINCIPAL CALLE 1  CASA NRO 1-14 SECTOR LOS PROCERES BARRANCAS PARTE ALTA  TARIBA TACHIRA  TACHIRA ZONA POSTAL 5017.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584247848263" target="_blank"> +58 424-7848263</a><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="20">
                                    <Accordion.Header class="acordion-header">DOILCAR GUERRERO</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV PRINCIPLAL LOCAL NRO T-39 SECTOR PUEBLO NUEVO SAN CRISTOBAL TACHIRA ZONA POSTAL 5001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147250101" target="_blank"> +58 414-7250101</a><br />
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

export default Comercio_tachira;