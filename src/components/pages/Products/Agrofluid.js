import React from "react";
import './Agrofluid.css';
import Footer from '../../Footer';

function Agrofluid() {

    return (
        <>

            <div className="agrofluid-general">
                <main className="main">
                    <section className="second-split left-agrofluid" />

                    <section className="second-split central-agrofluid" />

                    <section className="second-split right-agrofluid" />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Agrofluid;