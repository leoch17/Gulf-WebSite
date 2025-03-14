import React from "react";
import './Hydraulic.css';
import Footer from '../../Footer';

function Hydraulic() {

    return (
        <>
            <div className="hydraulic-general">
                <main className="main">
                    <section className="second-split left-hydraulic" />

                    <section className="second-split central-hydraulic" />

                    <section className="second-split right-hydraulic" />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Hydraulic;