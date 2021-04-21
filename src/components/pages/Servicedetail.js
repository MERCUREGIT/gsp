import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Headertwo'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
// import Client from '../layouts/Client'
import Content from '../sections/servicedetail/Content'

export default ({page}) => {

    return (
        <Fragment>
            <MetaTags>
                <title>GSP | Service Detail</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumbs breadcrumb={{ pagename: page }} />
            <Content page ={page} />
            {/* <section className="client-section">
                <div className="container">
                    <div className="client-slider section-gap line-top">
                        <Client />
                    </div>
                </div>
            </section> */}
            <Footer />
        </Fragment>
    )
}