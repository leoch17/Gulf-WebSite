import React, { useState, useEffect } from "react";
import '../components/Navbar.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const toggleLinkTarget = (event) => {
        event.preventDefault();
        const link = event.target;
        const currentTarget = link.getAttribute("target");
        const newTarget = currentTarget === "_self" ? "_blank" : "_self";
        link.setAttribute("target", newTarget);
        window.open(link.href, newTarget);
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src="images/gulf-logo.webp" width={80} />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                target="_self"
                                onClick={closeMobileMenu}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/products"
                                className="nav-links"
                                onClick={closeMobileMenu}
                                target="_self"
                            >
                                Productos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/information"
                                className="nav-links"
                                onClick={closeMobileMenu}
                                target="_self"
                            >
                                Historia
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/partners"
                                className="nav-links"
                                onClick={closeMobileMenu}
                                target="_self"
                            >
                                Socios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className="nav-links"
                                onClick={closeMobileMenu}
                                target="_self"
                            >
                                Contactos
                            </Link>
                        </li>
                    </ul>
                    <a href="https://lubricanteslamundial.com.ve/" target="_blank">
                        <img className="navbar-logo-second" src="images/llm-blanco.png" style={{ position: "0" }} />
                    </a>
                </div >
            </nav >
        </>
    );
}

export default Navbar;