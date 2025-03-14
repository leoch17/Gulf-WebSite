import React from "react";
import '../pages/Information.css';
import Footer from "../Footer";
import $ from 'jquery';
import ScrollReveal from 'scrollreveal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Information() {
    $(function () {

        var sr = ScrollReveal();

        if ($(window).width() < 768) {

            if ($('.timeline-content').hasClass('js--fadeInLeft')) {
                $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
            }

            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });

        } else {

            sr.reveal('.js--fadeInLeft', {
                origin: 'left',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });

            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });

        }

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });


    });

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

            <div className="informacion">
                <section className="timeline">
                    <div className="container">
                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInRight">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>El comienzo</h2>
                                </div>
                                <div className="date">1901</div>
                                <p>Nace Gulf Oil Corporation y se instala el primer pozo de petróleo sobre el agua en Ferry Lake, Lousiana, Estados Unidos.</p><br />
                                {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInLeft">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-2.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>Primera estación en el mundo</h2>
                                </div>
                                <div className="date">1913</div>
                                <p>Gulf inagura la primera estación de servicio en Pittsburgh, Estados Unidos.</p><br />
                                {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInRight">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-12.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2 style={{ color: "#002777" }}>Hola Gulf!</h2>
                                </div>
                                <div className="date">1920</div>
                                <p>Hace su aparición por primera vez el famoso logo naranja y azul de Gulf.</p><br />
                                {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInLeft">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-13.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>Bye bye Barco</h2>
                                </div>
                                <div className="date">1936</div>
                                <p>Gulf vende la conseción de Barco a Texaco.</p><br />
                                {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInRight">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-3.webp)", backgroundSize: "cover", backgroundPositionX: "50%" }}>
                                    <h2 style={{ color: "#FF6318" }}>Aventura en Venezuela</h2>
                                </div>
                                <div className="date">1943</div>
                                <p>Gulf establece su presencia en los pozos petroleros de Venzuela.</p><br />
                                {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInLeft">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-4.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2 >Naranja y Celeste</h2>
                                </div>
                                <div className="date">1967</div>
                                <p>Debutan los famosos colores de Gulf Racing.</p><br />
                                {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInRight">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-14.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>Nuevas alturas</h2>
                                </div>
                                <div className="date">1970</div>
                                <p>Gulf alcanza su máxima producción, procesando 1,3 millones de barriles dairios.</p><br />
                                {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInLeft">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-15.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2 style={{ color: "#002777" }}>El hombre de "Le Mans"</h2>
                                </div>
                                <div className="date">1971</div>
                                <p>La película "Le Mans" de Steve McQueen le otorga un prestigio a la marca.</p><br />
                                {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInRight">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-5.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>Victoria</h2>
                                </div>
                                <div className="date">1971</div>
                                <p>Gulf logra el bicampeonato en las miticas 24 horas de Le Mans junto al equipo JW Automotive.</p><br />
                                {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInLeft">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-6.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>The Hinduja Group</h2>
                                </div>
                                <div className="date">1975</div>
                                <p>The Hinduja Group adquiere la marca Gulf y se convierte en Gulf Oil International.</p><br />
                            </div>
                        </div>
                        {/* <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInRight">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-16.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>Hola Medio Oriente</h2>
                                </div>
                                <div className="date">1993</div>
                                <p>La planta mezcladora de Gulf Oil Middle East comienza a producir en Jebel Ali, Emiratos Árabes Unidos.</p><br />
                            </div>
                        </div> */}

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInRight"><br />
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-7.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>Patentados</h2>
                                </div>
                                <div className="date">2004</div>
                                <p>Gulf se convierte en la primer compañia de lubricantes de la historia en patentar sus colores de competición.</p><br />
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInLeft">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-10.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>Justo a tiempo</h2>
                                </div>
                                <div className="date">2007</div>
                                <p>Gulf se asocia conTag Heuer.</p><br />
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInRight">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-8.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>Mundo acuático</h2>
                                </div>
                                <div className="date">2008</div>
                                <p>Se establece Gulf Oil Marine, que presta servicios a más de 400 puertos en todo el mundo.</p><br />
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInLeft">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-21.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>Cielo alto</h2>
                                </div>
                                <div className="date">2008</div>
                                <p>Se establece Gulf Aviation UK.</p><br />
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInRight">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-24.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>Premiado</h2>
                                </div>
                                <div className="date">2016</div>
                                <p>Gulf gana el premio a la Empresa Downstream del año.</p><br />
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInLeft">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-26.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>McLaren se une al equipo</h2>
                                </div>
                                <div className="date">2020</div>
                                <p>Gulf sale a la carretera como socio estratégico de McLaren Racing y McLaren Automotive.</p><br />
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInRight">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-27.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>#SingapurFuerte</h2>
                                </div>
                                <div className="date">2021</div>
                                <p>Gulf amplía sus operaciones en Singapur con la adquisición de una planta de mezcla de lubricantes, un parque de tanques de almacenamiento y una terminal.</p><br />
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInLeft">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-28.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>Lubricantes Gulf llega a Venezuela</h2>
                                </div>
                                <div className="date">2022</div>
                                <p>Gracias a Lubricantes La Mundial se establece una alianza estratégica de distribución exclusiva en el país.</p><br />
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img" />
                            <div className="timeline-content timeline-card js--fadeInRight">
                                <div className="timeline-img-header" style={{ backgroundImage: "url(./images/historia/history-29.webp)", backgroundSize: "cover", backgroundPositionY: "50%" }}>
                                    <h2>Gulf Venezuela se posiciona en todo el país</h2>
                                </div>
                                <div className="date">2023</div>
                                <p>Se logra la presencia del catálogo de productos Gulf en todo el país, un trabajo arduo de posicionamiento y ventas.</p><br />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Information;