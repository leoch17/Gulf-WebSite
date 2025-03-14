import React from 'react';
import "./Motorcycle.css";
import Footer from '../../Footer';

function Motorcycle() {
    return (
        <>
            {/* Primer Producto */}

            <div className="motorcycle-general">
                <main className="main">
                    <section className="second-split left-motorcycle" />

                    <section className="second-split central-motorcycle" />

                    <section className="second-split right-motorcycle" />
                </main>
            </div>

            {/* Segundo Producto */}

            <div className="motorcycle-general">
                <main className="main">
                    <section className="second-split second-left-motorcycle" />

                    <section className="second-split second-central-motorcycle" />

                    <section className="second-split second-right-motorcycle" />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Motorcycle;