import React from "react";
import '../pages/Partners.css';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import PartnerSection from "./Partners/PartnerSection";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUpLong } from "@fortawesome/free-solid-svg-icons";
// import { Button } from '@chakra-ui/react';
import Footer from '../Footer';


function Partners() {

    return (
        <>
            <div className="contenedor-partner" id="start">
                <Carousel>
                    <Carousel.Item>
                        <img className="image-partner" src="/images/patrocinios/partnership_banner.webp" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <PartnerSection />
            {/* <Button><a href="#start"><FontAwesomeIcon icon={faUpLong} /></a></Button> */}
            <Footer />
        </>
    );
}

export default Partners;