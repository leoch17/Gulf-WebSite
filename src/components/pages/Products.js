import React from "react";
import '../pages/Products.css';
import Footer from "../Footer";
import { Link } from 'react-router-dom';

function Products() {

    return (
        <>
            <div className="producto-principal">
                <div className="producto-secundario">
                    <section className="hero-section">
                        <div className="poster-grid">

                            <Link className="poster" to="/passenger">
                                <div id="poster-1" className="poster__background" />
                                <div className="poster__content">
                                    <h3 className="poster__heading">Gasolina Motor Pasajero</h3>
                                </div>
                            </Link>

                            <Link className="poster" to="/motorcycle">
                                <div id="poster-2" className="poster__background" />
                                <div className="poster__content">
                                    <h3 className="poster__heading">Gasolina Motor Moto</h3>
                                </div>
                            </Link>

                            <Link className="poster" to="/truck">
                                <div id="poster-3" className="poster__background" />
                                <div className="poster__content">

                                    <h3 className="poster__heading">Diesel Motores Camion</h3>
                                </div>
                            </Link>

                            <Link className="poster" to="/agrofluid">
                                <div id="poster-4" className="poster__background" />
                                <div className="poster__content">
                                    <h3 className="poster__heading">Agrofluido</h3>
                                </div>
                            </Link>

                            <Link className="poster" to="/transmission">
                                <div id="poster-5" className="poster__background" />
                                <div className="poster__content">
                                    <h3 className="poster__heading">Transmisión</h3>
                                </div>
                            </Link>

                            <Link className="poster" to="/hydraulic">
                                <div id="poster-6" className="poster__background" />
                                <div className="poster__content">
                                    <h3 className="poster__heading">Hidraúlico</h3>
                                </div>
                            </Link>

                            <Link className="poster" to="/refrigerant">
                                <div id="poster-7" className="poster__background" />
                                <div className="poster__content">
                                    <h3 className="poster__heading">Refrigerante</h3>
                                </div>
                            </Link>

                            <a className="poster">
                                <div className="poster__background" id="poster-8" />
                                <div className="poster__content">
                                    <h3 className="poster__heading">Gulf Oil Corporation</h3>
                                </div>
                            </a>

                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Products;