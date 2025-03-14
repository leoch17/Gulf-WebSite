import React from "react";
import './Truck.css';
import Footer from '../../Footer';

function Truck() {

    return (
        <>

            <div className="truck-general">
                <main className="main">
                    <section className="second-split left-truck" />

                    <section className="second-split central-truck" />

                    <section className="second-split right-truck" />
                </main>
            </div>

            {/* Segundo Producto */}

            <div className="truck-general">
                <main className="second-main">
                    <section className="second-split second-left-truck" />

                    <section className="second-split second-central-truck" />

                    <section className="second-split second-right-truck" />
                </main>
            </div>

            {/* Tercer Producto */}

            <div className="truck-general">
                <main className="second-main">
                    <section className="second-split third-left-truck" />

                    <section className="second-split third-central-truck" />

                    <section className="second-split third-right-truck" />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Truck;