import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'

import img1 from '../../../assets/img/video-bg/poster-1.jpg'
import img2 from '../../../assets/img/video-bg/poster-2.jpg'

export default () => {
    const [openVideo, setOpenVideo] = useState(false)


    const openVideoModal = () => {
        setOpenVideo(true)
    }


    return (
        <section className="about-section section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-video">
                            <div className="video-poster-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms" style={{ backgroundImage: "url(" + img1 + ")" }}>
                            </div>
                            <div className="video-poster-two wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms" style={{ backgroundImage: "url(" + img2 + ")" }}>
                                <span onClick={openVideoModal} className="video-play-icon popup-video" role="button">
                                    <i className="fas fa-play" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="about-text-two">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">About Us</span>
                                <h2 className="title">Professional Business Guidance Agency </h2>
                            </div>
                            <p>
                            Global Services and Printing (GSP) located in Cameroon and founded in the 2000s is a consulting firm that offers its clients outstanding consulting experience in building, renewable energies and web development and maintenance. Apart from that GSP equally offers to its clients a diverse range of products and expert services such as printing, raw material provider, and education. At GSP;
          </p>
                            <ul className="about-list">
                                <li> <i className="fas fa-check" />We create a long-term collaborative relationship with our customers and ensure the best quality of service for all clients with no discrimination.</li>
                                <li> <i className="fas fa-check" />Through the expertise of our team of professionals, we assure you of the best services and products. There is no way you regret working with GSP.</li>
                                <li> <i className="fas fa-check" />GSP is there at all times around, just to satisfy you. Our customers are our priority.</li>
                            </ul>
                            {/* <Link to="/about" className="main-btn">Learn More</Link> */}
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo channel="youtube" autoplay isOpen={openVideo} videoId="fEErySYqItI" onClose={() => setOpenVideo(false)} />
        </section>
    )
}