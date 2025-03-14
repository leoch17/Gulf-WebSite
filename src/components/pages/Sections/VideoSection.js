import React, { useState } from 'react';
import "./VideoSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VideoSection() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className="commonSection what_wedo">
                <div className="container">
                    <div className="row">
                        <center>
                            <div className="text-center">
                                <h4 className="sub_title">Gulf Oil</h4>
                                <h2 className="sec_title">UN EQUIPO IMPARABLE</h2>
                            </div>
                        </center>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="videoWrap" style={{ position: 'relative' }}>
                                <img src="images/mini-hd.jpg" />
                                <div className="play_video" href style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} >
                                    <a className="video_popup" variant="primary" onClick={handleShow}><center><FontAwesomeIcon icon={faPlay} /></center></a>
                                    <Modal size='xl' centered show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        </Modal.Header>
                                        <Modal.Body className='video-body'>
                                            <video src='/videos/videosection.mp4' autoPlay />
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default VideoSection;