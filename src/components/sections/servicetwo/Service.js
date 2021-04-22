import React from 'react'
import { Link } from 'react-router-dom'

import line1 from '../../../assets/img/lines/12.png'
import line2 from '../../../assets/img/lines/11.png'

const serviceblock = [
    { icon: 'flaticon-teamwork-1', title: 'Education' , link :"services/education" },
    { icon: 'flaticon-chart', title: 'Printing', link: 'services/printing' },
    // { icon: 'flaticon-graph-1', title: 'Marketing Strategy' },
    // { icon: 'flaticon-money', title: 'Financial Plan' },
    { icon: 'flaticon-diamond', title: 'Raw material', link: 'services/material' },
    // { icon: 'flaticon-teamwork-1', title: 'NGO', ink: '/ngo' },
    { icon: 'flaticon-diagram', title: 'Renewable Energy', link: 'services/energy' },
    { icon: 'flaticon-setup', title: 'Building', link: 'services/building'  },
    { icon: 'flaticon-pie-chart', title: 'Website Consulting', link: 'services/Websites'},
]


export default () => {
    return (
        <section className="service-section shape-style-two service-line-shape section-gap grey-bg">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center both-border mb-50">
                    <span className="title-tag">Comany Services</span>
                    <h2 className="title">We Provide Most Exclusive <br /> Service For Business</h2>
                </div>
                {/* Services Boxes */}
                <div className="row service-boxes justify-content-center">
                    {serviceblock.map((item, i) => (
                        <div key={i} className="col-lg-4 col-sm-6 col-10 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1000ms">
                            <div className="service-box-two text-center">
                                <div className="icon">
                                    <i className={item.icon} />
                                </div>
                                <h3><Link to={"/" + item.link}> {item.title}</Link></h3>
                                <Link to={"/" + item.link} className="service-link">
                                    <i className="fal fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="line-one">
                <img src={line1} alt="line-shape" />
            </div>
            <div className="line-two">
                <img src={line2} alt="line-shape" />
            </div>
        </section>
    )
}