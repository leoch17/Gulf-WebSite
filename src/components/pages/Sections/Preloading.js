import React from "react";
import '../Sections/Preloading.css';

function Preloading() {

    const [showLoader, setShowLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 4500);
    }, []);

    return (
        <>
            <body className={showLoader ? 'preload-page' : 'preload-page hide'}>
                <div className="preloader text-center">
                    <center>
                        <img src="./images/gulf-compreso.gif" type="video/mp4" width="100%" height="100%" />
                    </center>
                </div>
            </body>
        </>
    );
}

export default Preloading;