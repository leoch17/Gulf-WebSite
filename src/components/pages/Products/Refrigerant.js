import React from "react";
import './Refrigerant.css';
import Footer from '../../Footer';

function refrigerant() {

    return (
        <>

            <div className="refrigerant-general">
                <main className="main">
                    <section className="second-split left-refrigerant" />

                    <section className="second-split central-refrigerant" />

                    <section className="second-split right-refrigerant" />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default refrigerant;