import React from 'react'
import { Link } from 'react-router-dom'

import breadcrumb from '../../assets/img/breadcrumb-services.jpg'

export default (props) => {
    return (
        <section className="breadcrumb-section bg-img-c" style={{ backgroundImage: "url(" +   breadcrumb + ")" }}>
            <div className="container">
                <div className="breadcrumb-text">
                    <h1 className="page-title">{props.breadcrumb.pagename}</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>{props.breadcrumb.pagename.toLowerCase()}</li>
                    </ul>
                </div>
            </div>
            <div className="breadcrumb-shapes">
                <div className="one" />
                <div className="two" />
                <div className="three" />
            </div>
        </section>
    )
}