import React from "react";
import './Transmission.css';
import Footer from '../../Footer';

function Transmission() {

    return (
        <>
            <div className="transmission-general">
                <main className="main">
                    <section className="second-split left-transmission" />

                    <section className="second-split central-transmission" />

                    <section className="second-split right-transmission" />
                </main>
            </div>

            {/* Segundo Producto */}

            <div className="transmission-general">
                <main className="second-main">
                    <section className="second-split second-left-transmission" />

                    <section className="second-split second-central-transmission" />

                    <section className="second-split second-right-transmission" />
                </main>
            </div>

            {/* Tercer Producto */}

            <div className="transmission-general">
                <main className="second-main">
                    <section className="second-split third-left-transmission" />

                    <section className="second-split third-central-transmission" />

                    <section className="second-split third-right-transmission" />
                </main>
            </div>

            {/* Cuarto Producto */}

            <div className="transmission-general">
                <main className="second-main">
                    <section className="second-split fourth-left-transmission" />

                    <section className="second-split fourth-central-transmission" />

                    <section className="second-split fourth-right-transmission" />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Transmission;