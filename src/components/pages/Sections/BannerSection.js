import React from "react";
import './BannerSection.css';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function BannerSection() {

    return (
        <>
            <div className='hero-container'>
                <Carousel className="seccion-video" >
                    <Carousel.Item>
                        <img className="video-home" src="/images/principal/banner-2.webp" autoPlay loop muted />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="video-home" src="/images/principal/banner-1.webp" autoPlay loop muted />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="video-home" src="/images/principal/banner-3.webp" autoPlay loop muted />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="video-home" src="/images/principal/banner-4.webp" autoPlay loop muted />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default BannerSection;