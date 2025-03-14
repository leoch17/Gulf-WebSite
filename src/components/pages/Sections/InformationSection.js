import React from "react";
import "./InformationSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function InformationSection() {

    return (
        <>
            <div className="contenedor-information">
                <div className="row">
                    <div className="col-md-11 offset-md-1">
                        <div className="justify-content-lg-between align-items-lg-center">
                            <div>
                                <h2 className="slogan-1">Juntos, <span className="slogan-2">SOMOS IMPARABLES</span></h2>
                            </div>
                            <div>
                                <p className="info-section">Ser uno de los principales proveedores de combustible en estaciones de servicio, lubricantes y servicio de cambio de aceite es lo que mejor hacemos, pero en esencia, somos una marca que se basa en mucho más. Cuando reflexionamos sobre nuestra rica historia que se remonta a 1901, sentimos un profundo orgullo por todo lo que hemos logrado; Las alianzas que hemos construido, los obstáculos que hemos superado y los hitos que hemos celebrado juntos, como un equipo imparable.</p>
                                <Link className="btn-more btn-15" to="/products" >Leer más</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default InformationSection;