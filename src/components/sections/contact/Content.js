import React from 'react'
import { Link } from 'react-router-dom'

import illustration from '../../../assets/img/illustration/man-with-earth-02.png'

export default () => {

    return (
        <section className="contact-section contact-page section-gap-top">
            <div className="container">
                <div className="contact-info">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="illustration-img text-center">
                                <img src={illustration} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                            <div className="contact-info-content">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">Get In Touch</span>
                                    <h2 className="title">Need Any Help For Business &amp; Consulting</h2>
                                </div>
                                <p>
                                Global Service and Printing is a consultancy and printing company based in Cameroon. We offer a wide range of services in the domain of engineering and printing. In the engineering sector, we offer radio frequency engineering consultancy. In the printing domain, we offer all the services of a printing press: printing, editing, colour separation and publishing 
            </p>
                                <ul>
                                    <li className="phone">
                                        <Link to="tel:+0123456789"><i className="far fa-phone" />+237-674-629 / 242-721-707</Link>
                                    </li>
                                    <li><i className="far fa-envelope-open" /><Link to="globalservicesandprinting@gmail.com ">globalservicesandprinting@gmail.com </Link></li>
                                    <li><i className="far fa-map-marker-alt" />India</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form grey-bg">
                    <div className="row no-gutters justify-content-center">
                        <div className="col-10">
                            <div className="section-title text-center mb-40">
                                <h2 className="title">Don’t Hesited To Contact Us</h2>
                            </div>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="input-group mb-30">
                                            <input type="text" placeholder="Your Full Name" />
                                            <span className="icon"><i className="far fa-user-circle" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="input-group mb-30">
                                            <input type="email" placeholder="Your Email Address" />
                                            <span className="icon"><i className="far fa-envelope-open" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="input-group mb-30">
                                            <input type="text" placeholder="Your Phone" />
                                            <span className="icon"><i className="far fa-phone" /></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group textarea mb-30">
                                            <textarea placeholder="Write Message" defaultValue={""} />
                                            <span className="icon"><i className="far fa-pencil" /></span>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="main-btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid container-1600">
                <div className="contact-map">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7960.651231760249!2d11.518636!3d3.9531400000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42cdb742c77af0f9!2sICT%20University!5e0!3m2!1sen!2sus!4v1619101129924!5m2!1sen!2sus"  style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
            </div>
        </section>
    )
}