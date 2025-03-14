import React from "react";
import Preloading from "./Sections/Preloading";
import BannerSection from './Sections/BannerSection';
import InformationSection from "./Sections/InformationSection";
import MapSection from "./Sections/MapSection";
import VideoSection from "./Sections/VideoSection";
import Footer from "../Footer";

function Home() {

    return (
        <>
            {/* <Preloading /> */}

            <BannerSection />

            <InformationSection />

            <MapSection />

            <VideoSection />

            <Footer />
        </>
    );
}

export default Home;