import React from "react";
import '../Partners/PartnerSection.css';
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function PartnerSection() {
    $(document).ready(function () {
        // Show or hide the sticky footer button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
            }
        });

        // Animate the scroll to top
        $('.go-top').click(function (event) {
            event.preventDefault();

            $('html, body').animate({ scrollTop: 0 }, 300);
        })
    });

    return (
        <>
            <a href="#" class="go-top"><FontAwesomeIcon className="boton-subir" icon={faAngleUp} /></a>

            <div className="patrocinantes">
                <div className="patrocinios">
                    <div className="socios">
                        <article className="grupo-socios" >

                            <figure className="figura-socio">
                                <video className="video-socio" src="./videos/williams.webm" autoPlay muted loop style={{ width: "100%", height: "100%" }} ></video>
                            </figure>
                            <section className="seccion-socio" style={{ backgroundColor: "#002777" }}>
                                <div className="sub-seccion-socio">
                                    <img className="logo-socio williams" src="./images/patrocinios/logo-williams.png" style={{ paddingTop: "10%", paddingBottom: "5%" }} />
                                    <p className="parrafo-socio" style={{ fontSize: "25px", paddingTop: "15px", color: "#fff" }}>Gulf es un orgulloso socio del icónico equipo Williams Racing para la temporada 2023 de Fórmula 1 y más allá. Las dos marcas comparten décadas de conocimiento y experiencia en deportes de motor. Williams Racing es uno de los equipos de F1 más exitosos de todos los tiempos y Gulf tiene más de 85 años de herencia en el automovilismo.</p>
                                </div>
                            </section>

                            <figure className="figura-socio">
                                <video className="video-socio" src="./videos/mclaren.webm" autoPlay muted loop style={{ width: "100%", height: "100%" }} ></video>
                            </figure>
                            <section className="seccion-socio" style={{ backgroundColor: "#fff" }}>
                                <div>
                                    <img className="logo-socio mclaren" src="./images/patrocinios/logo-mclaren.png" style={{ paddingTop: "10%", paddingBottom: "5%" }} />
                                    <p className="parrafo-socio" style={{ fontSize: "25px", color: "#002777" }}>Nuestra asociación con McLaren Automotive nace de una pasión compartida por la excelencia, la innovación y la perfección. Cada automóvil que sale de la línea de producción de McLaren viene lleno del aceite del motor Gulf Formula Elite, ya que McLaren solo recomienda Gulf.</p>
                                </div>
                            </section>

                            <figure className="figura-socio">
                                <video className="rofgo-video" src="./videos/rofgo.webm" autoPlay muted loop style={{ width: "100%", height: "100%" }} ></video>
                            </figure>
                            <section className="seccion-socio" style={{ backgroundColor: "#FF6318" }}>
                                <div>
                                    <center><img className="logo-socio rofgo" src="./images/patrocinios/logo-rofgo.png" style={{ paddingTop: "5%" }} /></center>
                                    <p className="parrafo-socio" style={{ fontSize: "25px", color: "#B8D9EC" }}>La asociación Gulf y ROFGO es una combinación perfecta por un amor incesante por los deportes de motor y un deseo compartido de preservar y proteger la historia de las carreras. La Colección ROFGO Gulf Heritage es una de las mejores colecciones mundiales de autos de carrera de la marca Gulf. Cada vehículo en la colección de ROFGO representa un momento precioso en el legado de carreras del Golfo que los fanáticos pueden revivir con cada visita.</p>
                                </div>
                            </section>

                            <figure className="figura-socio">
                                <video className="video-socio" src="./videos/tag-heuer.webm" autoPlay muted loop style={{ width: "100%", height: "100%" }} ></video>
                            </figure>
                            <section className="seccion-socio" style={{ backgroundColor: "#B8D9EC" }}>
                                <div>
                                    <center><img className="logo-socio tag-heuer" src="./images/patrocinios/logo-tag-heuer.png" style={{ paddingTop: "1%", paddingBottom: "2%" }} /></center>
                                    <p className="parrafo-socio" style={{ fontSize: "25px", color: "#002777" }}>Gulf y TAG Heuer han compartido muchos aspectos históricos que han abarcado más de 50 años. La asociación entre Gulf y TAG Heuer demuestra el compromiso de ambas marcas de superar los límites de excelencia e innovación. Su legado compartido se ejemplifica con los icónicos relojes que han creado para marcar la victoria de Le Mans en 1969 y su asociación continua.</p>
                                </div>
                            </section>

                            <figure className="figura-socio">
                                <video className="video-socio" src="./videos/everratti.webm" autoPlay muted loop style={{ width: "100%", height: "100%" }} ></video>
                            </figure>
                            <section className="seccion-socio" style={{ backgroundColor: "#002777" }}>
                                <div>
                                    <center><img className="logo-socio everratti" src="./images/patrocinios/logo-everratti.png" style={{ paddingTop: "10%", paddingBottom: "3%" }} /></center>
                                    <p className="parrafo-socio" style={{ fontSize: "25px", color: "#fff" }}>Everrati ayuda a los fanáticos de las carreras del Golfo a preparar el futuro de sus autos azul y naranja del Golfo restaurándolos meticulosamente, sacando sus motores y equipándolos con trenes de potencia totalmente eléctricos. La asociación Gulf y Everrati representa la determinación del Golfo de avanzar en una dirección más sostenible, al igual que nuestra gama de fluidos electrónicos para vehículos eléctricos y automóviles híbridos.</p>
                                </div>
                            </section>

                            <figure className="figura-socio">
                                <video className="video-socio" src="./videos/indra.webm" autoPlay muted loop style={{ width: "100%", height: "100%" }} ></video>
                            </figure>
                            <section className="seccion-socio" style={{ backgroundColor: "#fff" }}>
                                <div>
                                    <img className="logo-socio indra" src="./images/patrocinios/logo-indra.png" style={{ paddingTop: "10%", paddingBottom: "5%" }} />
                                    <p className="parrafo-socio" style={{ fontSize: "25px", color: "#002777" }}>Estamos construyendo un marco más sostenible para nuestra marca, socios y clientes. Con este fin, estamos trabajando con Indra, una compañía que ofrece cargadores EV domésticos inteligentes, seguros y confiables a los consumidores junto con el desarrollo de tecnología de carga bidireccional, que admite cero neto.</p>
                                </div>
                            </section>


                            <figure className="figura-socio">
                                <video className="video-socio" src="./videos/old-new.webm" autoPlay muted loop style={{ width: "100%", height: "100%" }} ></video>
                            </figure>
                            <section className="seccion-socio" style={{ backgroundColor: "#002777" }}>
                                <div>
                                    <img className="logo-socio fuel-retail" src="./images/patrocinios/logo-gulf.webp" style={{ paddingTop: "10%", paddingBottom: "5%" }} />
                                    <p className="parrafo-socio" style={{ fontSize: "25px", color: "#FF6318" }}>Ayudamos a nuestros socios minoristas de combustible de Gulf a acelerar el crecimiento en sus mercados al otorgarles derechos de distribución exclusivos sobre los lubricantes de Gulf. Nuestros socios minoristas se benefician de nuestra marca reconocida a nivel mundial y de la orientación, el apoyo y la colaboración continuos que brindamos.</p>
                                </div>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PartnerSection;