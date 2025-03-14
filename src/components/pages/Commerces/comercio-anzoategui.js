import React from "react";
import "./css commerces/comercio.css";
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../Footer";

function Comercio_anzoategui() {

    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="titulo-h2">Redes de Distribución de Anzoategui</h2>
                            <br></br><br></br>

                            <Accordion style={{ width: '55%' }}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header"> SERVICIOS Y SUMINISTROS ORTIZ, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE SUCRE CON CALLE LAS BRISAS LOCAL NRO 2 SECTOR PUEBL A JURO  ANACO ANZOATEGUI ZONA POSTAL 6003.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584121948018" target="_blank">+58 412-1948018</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header"> MULTISERVICIOS Y AUTOPARTES LA MILLA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE CARACAS CREUCE CON CALLEJON CARACAS LOCAL NRO 1 Y 2 SECTOR CENTRO SAN JOSE DE GUANIPA (EL TIGRITO) ANZOATEGUI.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584148476201" target="_blank">+58 414-8476201</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2099.1493155139597!2d-64.17026702927116!3d8.887748826929645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcd83c17f1ced6f%3A0xefbe16fd62e0253b!2sMULTISERVICIOS%20Y%20AUTOPARTES%20LA%20MILLA%2C%20C.A.!5e0!3m2!1sen!2sve!4v1698679500628!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header"> NEUMATICOS D´AUTOS & STORE 4X4, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV 5 DE JULIO CON CALLE 34 LA MORAERA LOCAL PB NRO 2 URB NUEVA BARCELONA BARCELONA ANZOATEGUI ZONA POSTAL 6001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/neumaticos_dautos/" target="_blank">@neumaticos_dautos</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584248937278" target="_blank">+58 424-8937278</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.3911045322275!2d-64.69619152934489!3d10.148829470465055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d734a228a3e45%3A0xa6088476eaa3230c!2sNEUMATICOS%20D%60%20AUTOS%20%26%20STORE%204X4%2C%20C.A.!5e0!3m2!1sen!2sve!4v1698679666448!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header"> SUMINISTROS Y SERVICIOS SUSELP, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV MERIDA CASA NRO 4-73-C SECTOR PUEBLO NUEVO ANACO ANZOATEGUI  ZONA POSTAL 6003.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584124472692" target="_blank">+58 412-4472692</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790.4933056524546!2d-64.4715078354439!3d9.423675449024756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dd2a5c3697bcb2d%3A0x83763a852782bcdf!2sSUMINISTROS%20Y%20SERVICIOS%20SUSELP%2C%20C.A.!5e0!3m2!1sen!2sve!4v1698679766232!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header"> ESTACION DE SERVICIOS AURORA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CTRA BARCELONA MATURIN KM.38 DE LA ALCABALA LOCAL S/N CASERIO LA CEIBA LA CEIBA ANZOATEGUI ZONA POSTAL 6001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584248720270" target="_blank">+58 424-8720270</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header class="acordion-header"> AUTO PERIQUITOS DON JUAN LUBRICAR, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE LAS ACACIAS LOCAL NRO 21-B SECTOR BARRIO SUCRE BARCELONA ANZOATEGUI ZONA POSTAL 6001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/neumaticos_dautos/" target="_blank">@neumaticos_dautos</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147827304" target="_blank">+58 414-7827304</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <Accordion.Header class="acordion-header"> CAUCHOS SORA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV FUERZAS ARMADAS C/C LA FE EDIF D'AMBROSIO PISO P.B LOCAL PLANTA BAJA URB BARRIO COLOMBIA BARCELONA ANZOATEGUI ZONA POSTAL 6001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/cauchossora/" target="_blank">@cauchossora</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584166807814" target="_blank">+58 416-6807814</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1526.3245124246712!2d-64.67897164408357!3d10.120664941730409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d728519efe97f%3A0xbbcd2a7452ac4d8b!2sCauchos%20sora!5e0!3m2!1sen!2sve!4v1698680409884!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7">
                                    <Accordion.Header class="acordion-header"> AUTOMOTRIZ BRAVO 3000, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE SUCRE LOCAL NRO 8-42 BARRIO SUCRE BARCELONA ANZOATEGUI ZONA POSTAL 6001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/automotrizbravo3000/" target="_blank">@automotrizbravo3000</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584126899950" target="_blank">+58 412-6899950</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812.7276798918709!2d-64.67372920876298!3d10.14886213372255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d73fa9614d83b%3A0x26cac6c6048206e4!2sAutomotriz%20Bravo%203000%20C.A!5e0!3m2!1sen!2sve!4v1698680527001!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="8">
                                    <Accordion.Header class="acordion-header"> LUBRITIENDA BONPRIX, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE SUCRE LOCAL NRO 61-38 SECTOR BARRIO SUCRE BARCELONA ANZOATEGUI ZONA POSTAL 6001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubritienda_bonprix/" target="_blank">@lubritienda_bonprix</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584248149122" target="_blank">+58 424-8149122</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="9">
                                    <Accordion.Header class="acordion-header"> LUBRICAR ML ZOILA RODRIGUEZ, F.P.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE LA LINEA LOCAL NRO 04-19 SECTOR BARRIO SUCRE BARCELONA ANZOATEGUI ZONA POSTAL 6001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubricar.ml/" target="_blank">@lubricar.ml</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584121963288" target="_blank">+58 412-1963288</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147972596" target="_blank">+58 414-7972596</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812.7270380989569!2d-64.67057125888111!3d10.149114887015722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d7399217e969b%3A0xa42dd43789ffd1b0!2sLubricar%20ml%20barcelona!5e0!3m2!1sen!2sve!4v1698680794162!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="10">
                                    <Accordion.Header class="acordion-header"> VELASQUEZ DISTRIBUIDORA E IMPORTADORA TRANSCENDER, F.P.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 23 DE ENERO LOCAL NRO 28 SECTOR BARRIO SUCRE BARCELONA ANZOATEGUI ZONA POSTAL 6001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584148368561" target="_blank">+58 414-8368561</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="11">
                                    <Accordion.Header class="acordion-header"> INVERSIONES ORIENTE 20.20, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV PRINCIPAL DE LECHERIA EDIF RIVADEO PISO 4 LOCAL P 4-1 SECTOR PRINCIPAL DE LECHERIA LECHERIAS ANZOATEGUI ZONA POSTAL 6016.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> SIN INFORMACIÓN.<br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="12">
                                    <Accordion.Header class="acordion-header"> INVERSIONES BARCELONA ORIENTE 20.21, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE PRINCIPAL LOCAL NRO 01 ZONA LECHERIA LECHERIAS ANZOATEGUI ZONA POSTAL 6016.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584142630809" target="_blank">+58 414-2630809</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="13">
                                    <Accordion.Header class="acordion-header"> BAR RESTAURANTE GUARAGUAO 1948, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV REDOMA DE GUARAGUAO LOCAL NRO S/N SECTOR GUARAGUAO PUERTO LA CRUZ ANZOATEGUI ZONA POSTAL 6023.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584248903767" target="_blank">+58 424-8903767</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1786.1494414677013!2d-64.62802251399728!3d10.227255287251056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d7506a7797351%3A0x4e5109ffe4f88c61!2sBAR%20RESTAURANTE%20GUARAGUAO%201948!5e0!3m2!1sen!2sve!4v1698681237523!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="14">
                                    <Accordion.Header class="acordion-header"> INVERSIONES BARCELONA ORIENTE 20.22, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV PRINCIPAL DE LECHERIAS CON LEONARDO RUIZ PINEDA EDIF RIBADEO PISO PB LOCAL 07 ZONA LECHERIAS LECHERIAS ANZOATEGUI ZONA POSTAL 6016.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584142630809" target="_blank">+58 414-2630809</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="15">
                                    <Accordion.Header class="acordion-header"> AUTO SPORT LECHERIA, S.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV PRINCIPAL DE LECHERIA CC ESTACION DE SERVICIO CCM NIVEL PB LOCAL PB SECTOR LECHERIA LECHERIAS ANZOATEGUI ZONA POSTAL 6016.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/autosportlecheria/" target="_blank">@autosportlecheria</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584148101807" target="_blank">+58 414-8101807</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="16">
                                    <Accordion.Header class="acordion-header"> NASCAR TYRE CENTER, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV NUEVA ESPARTA LOCAL S/N SECTOR VENECIA PUERTO LA CRUZ ANZOATEGUI ZONA POSTAL 6023.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/nascartyre4x4/" target="_blank">@nascartyre4x4</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584148371283" target="_blank">+58 414-8371283</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1786.3866667584148!2d-64.66043202651838!3d10.184991245927502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d738706db8cb1%3A0x5b576c55e1bbcc8f!2sNASCARTYRE4X4!5e0!3m2!1sen!2sve!4v1698681620378!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="17">
                                    <Accordion.Header class="acordion-header"> AUTOPARTES GIA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV PRINCIPAL DE LECHERIA LOCAL NRO 5-29 SECTOR LECHERIA, LECHERIAS ANZOATEGUI ZONA POSTAL 6016.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/giaautopartes/" target="_blank">@giaautopartes</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584120401174" target="_blank">+58 412-0401174</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584123488458" target="_blank">+58 412-3488458</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1113.5476581043854!2d-64.69339856000327!3d10.198891778425612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d756e6ac3bf03%3A0x7eee9e87f002bca3!2sAutopartes%20Gia%20C.A.!5e0!3m2!1sen!2sve!4v1698681776338!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                            <br /><br />
                        </div>
                    </center>
                </div >
            </body >

            <Footer />
        </>
    );
}

export default Comercio_anzoategui;