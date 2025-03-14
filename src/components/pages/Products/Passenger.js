import React from "react";
import '../Products/Passenger.css';
import Footer from '../../Footer';

function Passenger() {

    return (
        <>
            <div className="passenger-general">
                <main className="main">
                    <section className="second-split left-passenger" />

                    <section className="second-split central-passenger" />

                    <section className="second-split right-passenger" />
                </main>
            </div>

            {/* Segundo Producto */}

            <div className="passenger-general">
                <main className="second-main">
                    <section className="second-split second-left-passenger" />

                    <section className="second-split second-central-passenger" />

                    <section className="second-split second-right-passenger" />
                </main>
            </div>

            {/* Tercer Producto */}

            <div className="passenger-general">
                <main className="second-main">
                    <section className="second-split third-left-passenger" />

                    <section className="second-split third-central-passenger" />

                    <section className="second-split third-right-passenger" />
                </main>
            </div>

            {/* Cuarto Producto */}

            <div className="passenger-general">
                <main className="second-main">
                    <section className="second-split fourth-left-passenger" />

                    <section className="second-split fourth-central-passenger" />

                    <section className="second-split fourth-right-passenger" />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Passenger;