import React from 'react'
// import { Accordion, Card, Button } from 'react-bootstrap'
import Sidebar from '../../layouts/Servicesidebar'

// import print from '../../../assets/img/details/service-01-print.jpg'
// import servicebanner from ''
// import servicesmallbanner from '../../../assets/img/details/service-02.jpg'





const service = {
    "printing": {
        img : require("../../../assets/img/details/service-01-print.jpg"),
        mainDescription: " GSP Systems is one of the pioneering and progressive prepress companies in India with a wide range of experience in providing cross-media and digital prepress services offering in press-ready versions to its global clientele. Our services are designed on strong foundations of cost-effectiveness, innovativeness, practicality, timely project delivery, and subject matter expertise of our employees and this has given us our present-day identity as one of the most prominent service providers in the print layout creation domain. Most of the materials that are provided for prepress printing require a considerable review course by an expert service-providing company. Exclusively dedicated to the same, we have a group of professionals like typesetters, copy editors, proofreaders etc. with years of industry knowledge and troubleshooting skills. ",
        pointList: ["Everything from small format (business cards, flyers, presentations, brochures, etc) to large format (banners, decals, aluminum signs, foam, signs and more)! Whether you need design, or already have final art, we are happy to assist you with getting your materials and projects printed.",
        "Providing publishers with the highest quality, most reliable and cost-effective editorial and composition services for 50 years"
],
    },
    "Websites": {
        img : require("../../../assets/img/details/service-01-web.jpg"),
        mainDescription: " Global services and printing (GSP) have the best website designers. A business website is another marketing channel that gives you an automatic internet presence. You have another chance to introduce people to your products and services, as well as making it easy for people to find you. An IT consultant is an individual that provides advice, guidelines and a road map for sourcing, utilizing and managing IT assets and resources. An IT consultant provides organizations with best practices for using IT solutions and services for their business objectives and in solving their problems.  Our role as an IT consultant will be to work in partnership with clients, advising them how to use information technology to meet their business objectives or overcome problems. You'll work to improve the structure and efficiency of IT systems in various organizations.",
 pointList: [
     "project management, mobile application designing, wireless networks designing and optimization (2G,3G,4G and 5G), BULK SMS services, BULK Email services, Video Production, Video Security surveillance systems, Design of information systems, electrical and chemicals. Engineering consulting",
        "Combining your website with marketing tools, like email marketing helps you reach new customers and generate repeat business ",
        "Businesses & Organizations of all industries and sizes rely on Global services and Printing for our expertise and creativity to increase their visibility on the internet",
        "Increasing your visibility on the internet leads to more sales and an increase in profits"
        ]
    },
    "building": {
        img : require("../../../assets/img/details/service-01-building.jpg"),
        mainDescription: "Global Services and Printing handles construction contracts for you. Construction contracts and services related to the building of homes, commercial centers and other infrastructural developmental buildings all on GSP",
        pointList: []
    },
    "energy": {
        img : require("../../../assets/img/details/service-01-energy.jpg"),
        mainDescription: "",
        pointList: []
    },
    "education": {
        img : require("../../../assets/img/details/service-01-education.jpg"),
        mainDescription: "",
        pointList: []
    },
    "material": {
        img : require("../../../assets/img/details/service-01-material.jpg"),
        mainDescription: "",
        pointList: []
    },
    "": {
        img : require("../../../assets/img/details/service-01-print.jpg"),
        mainDescription: "",
        pointList: []
    },

}











export default ({ page }) => {

    return (
        <section className="service-details section-gap">
            <div className="container">
                <div className="row">
                    {/* Dettails Content */}
                    <div className="col-lg-8">
                        <div className="service-details-content">
                            <div className="main-thumb mb-40">
                                <img src={service[page].img} alt="" />
                            </div>
                            <h2 className="title">{page.toUpperCase()}</h2>
                            <p>
                                {service[page || "" ].mainDescription}
                            </p>
                            {service[page].pointList && <ul className="circle-check-list mt-50 mb-50">

                                {service[page || "" ].pointList.map(item =>
                                     <li> <i className="fas fa-check" />{item} </li>)} 

                            </ul>
                            }
                            {/* <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6">
                                    <div className="image text-center mb-40">
                                        <img src={servicesmallbanner} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h3 className="sub-title">How To Buildup Buisnes</h3>
                                    <p>
                                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                                        because it is pain, but because occasionally circumstances occur in which toil and
                                        pain can procure him some great pleasure.
              </p>
                                    <ul className="check-list mt-30 mb-40">
                                        <li><i className="fas fa-check" />Business &amp; Consulting Agency</li>
                                        <li><i className="fas fa-check" />Awards Winning Business Comapny</li>
                                        <li><i className="fas fa-check" />Complete Guide To Mechanical</li>
                                        <li><i className="fas fa-check" />Firebase Authentication &amp; Database</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="faq-section mt-40">
                           
                            <Accordion defaultActiveKey="1" className="faq-loop border-style" id="faqAccordion">
                                <Card>
                                    <Accordion.Collapse eventKey="0" className="collapseparent">
                                        <Card.Body>
                                            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some
                                            </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            How To Create A Mobile App In Expo And Firebase
                                                <span className="icons">
                                                <i className="far fa-plus" />
                                            </span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="1" className="collapseparent">
                                        <Card.Body>
                                            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some
                                            </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            Smashing Podcast Episode With Ben How ?
                                                <span className="icons">
                                                <i className="far fa-plus" />
                                            </span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="2" className="collapseparent">
                                        <Card.Body>
                                            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some
                                            </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            Learning Resources Challenging Workshops ?
                                                <span className="icons">
                                                <i className="far fa-plus" />
                                            </span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="3" className="collapseparent">
                                        <Card.Body>
                                            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some
                                            </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                            Micro-Typography: How To Space Kern ?
                                                <span className="icons">
                                                <i className="far fa-plus" />
                                            </span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                            </Accordion>
                           
                        </div> */}
                    </div>
                    {/* Sidebar */}
                    <div className="col-lg-4 col-md-8">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}