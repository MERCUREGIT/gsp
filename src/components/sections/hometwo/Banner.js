import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import img1 from '../../../assets/img/banner/01.jpg'
import img2 from '../../../assets/img/banner/02.jpg'
import img3 from '../../../assets/img/banner/03.jpg'
import img4 from '../../../assets/img/banner/04.jpg'
import img5 from '../../../assets/img/banner/05.jpg'
import img6 from '../../../assets/img/banner/06.jpg'

const bannerslide = [
    { img: img1, title: "A better society is a healthy society", text: 'We enforce the fight against COVID 19 as well as making sure that we provide maximum support to orphans.', btntext: 'Get it Now', btntext1: 'Our Services' },
    { img: img2, title: "Education for all with GSP", text: 'Online classes on the global scope for all, we make sure that you learn from wherever you are in the world with no limitations.', btntext: 'Get it Now', btntext1: 'Our Services' },
    { img: img3, title: "Get raw materials you need ", text: 'Create and innovate without being affected by the probability of not finding the appropriate raw materials  in the appropriate time and quality. We are here to watch your back with the provision of Gold, Timber, Diamond', btntext: 'Get it Now', btntext1: 'Our Products' },
    { img: img4, title: "We consult you for a better result", text: 'We are here to provide you with the best when it comes to consultancy. With us, nothing Consulted goes without a concrete result', btntext: 'Get it Now', btntext1: 'Our Services' },
    { img: img5, title: "Information and Technology(IT) Web consulting", text: 'We offer you great consultancy services and make sure that whatever web project you involve us in not only fully integrates well but also permits you to attain the envisaged objectives.', btntext: 'Get it Now', btntext1: 'Our Services' },
    { img: img6, title: "we print at your demand", text: 'If you think of it, we print it for you. We put at your disposal high-quality print for all your varying needs ranging from the printing of textbooks, calendars, exercise books, posters etc…. as well as editing', btntext: 'Get it Now', btntext1: 'Our Services' },
]
const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <button className="slick-arrow next-arrow" onClick={onClick}><i className="fal fa-long-arrow-right" /></button>
    )
}

const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <button className="slick-arrow prev-arrow" onClick={onClick}><i className="fal fa-long-arrow-left" /></button>
    )
}



export default () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        arrows: true,
        fade: false,
        dots: false,
        swipe: true,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }],
    }

    return (
        <section className="banner-section banner-section-two">
            <Slider className="banner-slider" id="bannerSlider" {...settings}>
                {bannerslide.map((item, i) => (
                    <div key={i}>
                        <div className="single-banner" style={{ backgroundImage: "url(" + item.img + ")" }}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="banner-content text-center">
                                            <h1 data-animation="fadeInDown" data-delay="0.8s">{item.title}</h1>
                                            <p data-animation="fadeInUp" data-delay="1s">{item.text} </p>
                                            <ul className="btn-wrap">
                                                <li data-animation="fadeInRight" data-delay="1.4s">
                                                    <Link to="/services" className="main-btn main-btn-2">{item.btntext1}</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}