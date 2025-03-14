import React from "react";
import "./css commerces/comercio.css";
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../Footer";

function Comercio_lara() {

    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="titulo-h2">Redes de Distribución de Lara</h2>
                            <br></br><br></br>

                            <Accordion style={{ width: '55%' }}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">CENTRO DE LUBRICACIÓN WEISY CAR, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> DOMICILIO FISCAL CALLE 49 ENTRE CARRETERA  24 Y 25 LOCAL NRO 24-58 SECTOR CENTRO BARQUISIMETO LARA ZONA POSTAL 3001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/weisycar_/" target="_blank">@weisycar_</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> SIN INFORMACIÓN.<br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1113.9820513496084!2d-69.31343252556664!3d10.073898451238005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87670ae665da2f%3A0xea29ec89a2390e60!2sWeisy%20Car%20c.a.!5e0!3m2!1sen!2sve!4v1698674744901!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">LUBRICANTES Y ACCESORIOS VIFERGIL, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> DF CR 16 ENTRE CALLES 54 Y 55 SECTOR NRO 54.31 SECTOR OESTE DE BARQUISIMETO  LARA ZONA POSTAL 3001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584166504363" target="_blank"> +58 416-6504363</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812.9499132535585!2d-69.34486533951886!3d10.060963592579856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8766e65e05b4e1%3A0xa5245ef25b62b2de!2sLubricantes%20Y%20Accesorios%20Vifergil!5e0!3m2!1sen!2sve!4v1698674910951!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header"> LUBRICANTES Y REPUESTOS M&A MAMBEL, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> DOMICILIO FISCAL CTRA AUTOPISTA FLORENCIO JIMENEZ VIA QUIBOR KM 9 CASA NRO 245 SECTOR LA CONCORDIA BARQUISIMETO LARA ZONA POSTAL 3001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584126703177" target="_blank"> +58 412-6703177</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1526.7143634492832!2d-69.43343825691817!3d10.038347959876495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8763a94a23132b%3A0x22ef75ac8735a800!2sLubricantes%20y%20Repuestos%20M%26A%2C%20C.A!5e0!3m2!1sen!2sve!4v1698675094045!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header"> MULTISERVICIOS SAN JOSE DEL ESTE, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV VENEZUELA ENTRE AVENIDA BRACAMONTE Y AVENIDA LOS LEONES LOCAL E/S SAN LUIS NRO 03 SECTOR ESTE BARQUISIMETO LARA ZONA POSTAL 3001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584145229270" target="_blank"> +58 414-5229270</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.824977674482!2d-69.29067843798308!3d10.073880192734677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87677f96e99731%3A0xb290f6ad0b288587!2sMultiservicios%20San%20Jose%20del%20Este!5e0!3m2!1sen!2sve!4v1698675269505!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header"> PLUS BATERIAS DEL ESTE, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CR 1 CON CALLE 8 LOCAL CENTRO PROFESIONAL NRO A-01 URB NUEVA SEGOVIA BARQUISIMETO LARA ZONA POSTAL 3001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/plusbateriasdelesteca/" target="_blank">@plusbateriasdelesteca</a>.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584143510774" target="_blank"> +58 414-3510774</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1526.5963011103922!2d-69.29048734244046!3d10.063347150148632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8767b18f78f689%3A0xdc57b726d1417388!2sPlus%20Bater%C3%ADas%20del%20Este!5e0!3m2!1sen!2sve!4v1698675450761!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header class="acordion-header"> INVERSIONES LUBRY K.M., C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> DF AV PRINCIPAL DE ANDRES ELOY BLANCO CARRERA 1 CON CALLE D Y CALLE 4 LOCAL NRO 2 SECTOR EL SISAL BARQUISIMETO LARA ZONA POSTAL 3001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lubrykm/" target="_blank">@lubrykm</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584166574446" target="_blank"> +58 416-6574446</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584167144957" target="_blank"> +58 416-7144957</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1304.096997680515!2d-69.3703521415149!3d10.062161390402927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87675cf196ae89%3A0xf62386232ed66062!2sInversiones%20lubry%20km!5e0!3m2!1sen!2sve!4v1698675633947!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <Accordion.Header class="acordion-header"> PABON INVERSIONES TODO EN GOMAS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CTRA VIA QUIBOR KM 8 CASA NRO 3 SECTOR VILLA DE NAZARENO BARQUISIMETO LARA.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584145106036" target="_blank"> +58 414-5106036</a><br /><br />

                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7">
                                    <Accordion.Header class="acordion-header"> LUBRICANTES GEOVANNY ORTIZ, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV VENEZUELA ESQUINA CALLE 13 LOCAL NRO 2 SECTOR CENTRO BARQUISIMETO LARA.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584245269020" target="_blank"> +58 424-5269020</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1304.0483772440202!2d-69.30498812407386!3d10.074192588110993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8767766d10d789%3A0x648d007aa045a485!2sLubricantes%20Geovanny%20Ortiz%20C%20A!5e0!3m2!1sen!2sve!4v1698675904674!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="8">
                                    <Accordion.Header class="acordion-header"> CORPORACION CAR 2013, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> DF AV INTERCOMUNAL EDIF DARALLO PSO B LOCAL 1 Y 2 SECTOR CABUDARE, CABUDARE LARA ZONA POSTAL 3023.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/corporacioncar2013/" target="_blank">@corporacioncar2013</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584245216385" target="_blank"> +58 424-5216385</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1114.1283612582245!2d-69.25524130294869!3d10.031451943640244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e875dd85f7d56a5%3A0x32a0369f219cbe79!2sRepuestos%20Corporaci%C3%B3n%20Car%202013!5e0!3m2!1sen!2sve!4v1698676056291!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="9">
                                    <Accordion.Header class="acordion-header"> MULTISERVICIOS ARW, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 22 ESQUINA CARRERA 24 LOCAL NRO S/N ZONA CENTRO BARQUISIMETO LARA ZONA POSTAL 3001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584145686668" target="_blank"> +58 414-5686668</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="10">
                                    <Accordion.Header class="acordion-header"> AUTOPARTES LO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 8 ESQUINA CJON 1A CASA NRO 1-30 URB LA MATA CABUDARE LARA ZONA POSTAL 3023.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN.<br />
                                        <FontAwesomeIcon icon={faPhone} /> SIN INFORMACIÓN.<br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1114.1687456161903!2d-69.2596523519738!3d10.01970454795703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e875f4e850a2375%3A0x3e114eb6f33cfcd4!2sAUTOPARTES%20LO!5e0!3m2!1sen!2sve!4v1698676277134!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="11">
                                    <Accordion.Header class="acordion-header"> MULTISERVICIO DOBLE AA EXPRESS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CR 33 ESQUINA CALLE 25 LOCAL 2 NRO 33-21 SECTOR CENTRO BARQUISIMETO LARA ZONA POSTAL 3001.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/multiserviciodobleaa/" target="_blank">@multiserviciodobleaa</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584145485178" target="_blank"> +58 414-5485178</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1113.9607402193994!2d-69.31720681833959!3d10.08006634178961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e876731328d2b29%3A0x7e2a19465b6788d2!2sMultiservicio%20Doble%20AA%20Express%20C.A!5e0!3m2!1sen!2sve!4v1698676476779!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="12">
                                    <Accordion.Header class="acordion-header"> INVERSIONES SUAREZ RP, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV ISAIAS AVILA ENTRE CALLES LIDICE Y EL CARMEN LOCAL NRO S/N SECTOR PUEBLO APARTE CARORA CARORA LARA ZONA POSTAL 3050.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584161056670" target="_blank"> +58 416-1056670</a><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="13">
                                    <Accordion.Header class="acordion-header"> REPUESTOS Y ACCESORIOS COLCA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE CHIQUINQUIRA ENTRE CALLES 19 Y CALLE LA GRETA EDIF COLMENAREZ PISO P/B LOCAL NRO 02 SECTOR LA GREDA CARORA LARA ZONA POSTAL 3050.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN. <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584267092081" target="_blank"> +58 426-7092081</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.0420547152908!2d-70.07561636853164!3d10.17647352325693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87eda76cc7a577%3A0x796a3dc0280828eb!2sRepuestos%20y%20accesorios%20Colca%2C%20C.A!5e0!3m2!1sen!2sve!4v1698677034402!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="14">
                                    <Accordion.Header class="acordion-header"> TOYOSOL, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV FRANCISCO DE MIRANDA CON CALLE 32 LOCAL TOYOSOL C.A NRO S/N URB SANTA RITA CARORA LARA ZONA POSTAL 3050.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/toyosolca/" target="_blank">@toyosolca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584247317799" target="_blank"> +58 424-7317799</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.21929525852!2d-70.07166439747387!3d10.153337953980577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87f2bc52ecea99%3A0xfd0adee7827829f3!2sToyosol%20C.A.!5e0!3m2!1sen!2sve!4v1698677233132!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="15">
                                    <Accordion.Header class="acordion-header"> REPUESTOS Y ACCESORIOS ALMA 8, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 23 ESQUINA CARRERA 7B EDIF XIOHEN PISO PB LOCAL 02 SECTOR SANTO DOMINGO CARORA CARORA LARA ZONA POSTAL 3050.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/alma8ca/" target="_blank">@alma8ca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584141581248" target="_blank"> +58 414-1581248</a><br /><br />
                                        <div className="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.373272497277!2d-70.07065889492284!3d10.155442610039952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87f3d9fcdcc639%3A0xe58a15d93f6de34c!2sRepuestos%20y%20Accesorios%20AlMA%208%2C%20C.A!5e0!3m2!1sen!2sve!4v1698677519124!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="16">
                                    <Accordion.Header class="acordion-header"> PEPE CARS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV FRANCISCO DE MIRANDA, ESQUINA CALLE 29 EDIF DON PEPE PISO P/B LOCAL 02 SECTOR SAN AGUSTIN CARORA LARA ZONA POSTAL 3050.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/pepecarsca/" target="_blank">@pepecarsca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584129520006" target="_blank"> +58 412-9520006</a><br /><br />
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

export default Comercio_lara;