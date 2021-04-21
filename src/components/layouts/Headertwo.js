import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navmenu from './Navmenu'
import OffCanvas from './Offcanvas'
import classNames from 'classnames'
import { connect } from "react-redux";
import { changeLanguage } from "redux-multilanguage";
import logo from '../../assets/img/logo-2.png'


const Header = ({  currentLanguageCode, dispatch}) => {
    const [classmethod, setClassmethod] = useState(false)
    const [togglemethod, setTogglemethod] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isTop, setIsTop] = useState(false)

    const changeLanguageTrigger = e => {
        const languageCode = e;
        dispatch(changeLanguage(languageCode));
      };

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 991)
        }, false)
        window.addEventListener('load', () => {
            setIsMobile(window.innerWidth < 991)
        }, false)
        // Sticky header
        window.addEventListener('scroll', () => {
            setIsTop(window.scrollY > 110)
        }, false)
    }, [])

    const addClass = () => {
        setClassmethod(true)
    }

    const removeClass = () => {
        setClassmethod(false)
    }

    const toggleClass = () => {
        setTogglemethod(!togglemethod)
    }

    const mobileactive = isMobile ? 'breakpoint-on' : ''
    const stickyheader = isTop ? 'sticky-on' : ''


    return (
        <Fragment>
            <header className={`header-two sticky-header ${stickyheader}`}>
                {/* Header Topbar */}
                <div className="header-topbar">
                    <div className="container-fluid container-1600">
                        <div className="header-topbar-inner d-md-flex align-items-center justify-content-between">
                            {/* Contact Info */}
                            <ul className="contact-info">
                                <li>
                                    <Link to="#"><i className="far fa-phone" />+237-674-629 / 242-721-707 </Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="far fa-envelope-open" />globalservicesandprinting@gmail.com</Link>
                                </li>
                                <li>
                                    <i className="far fa-map-marker-alt" />India
                                </li>
                            </ul>
                            {/* Social Links */}
                            <ul className="social-links">
                                <li>
                                    <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fab fa-twitter" /></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fab fa-instagram" /></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fab fa-behance" /></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fab fa-dribbble" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Header Menu  */}
                <div className="header-nav sticky-nav">
                    <div className="container-fluid container-1600">
                        <div className={`nav-container ${mobileactive}`}>
                            {/* Site Logo */}
                            <div className="site-logo">
                                <Link to="/hometwo"><img src={logo} alt="Logo" /></Link>
                            </div>
                            {/* Main Menu */}
                            <div className={classNames("nav-menu d-lg-flex align-items-center", { "menu-on": togglemethod })}>
                                {/* Navbar Close Icon */}
                                <div className="navbar-close" onClick={toggleClass}>
                                    <div className="cross-wrap"><span /><span /></div>
                                </div>
                                {/* Mneu Items */}
                                <div className="menu-items">
                                    <Navmenu />
                                </div>
                                {/* Pushed Item */}
                                <div className="nav-pushed-item" />
                            </div>
                            {/* Navbar Extra  */}
                            <div className="navbar-extra d-flex align-items-center">
                                {/* language selection */}
                                <div className="language-selection">
                                    <Link className="language-btn" to="#">
                                        {currentLanguageCode === "fr"
                                        ? "French"
                                        : currentLanguageCode === "en"
                                        ? "English"
                                        : currentLanguageCode === "tk"
                                        ? "Turkish"
                                        : currentLanguageCode === "sp"
                                        ? "Spanish"
                                        : currentLanguageCode === "po"
                                        ? "Portuguesse"
                                        : currentLanguageCode === "ch"
                                        ? "Chinesse"
                                        : ""}
                            <i className="far fa-angle-down" /></Link>
                                    <ul className="language-list">
                                        <li><Link to="#" onClick={() => changeLanguageTrigger("fr")}>French</Link></li>
                                        <li><Link to="#" onClick={() => changeLanguageTrigger("en")}>English</Link></li>
                                        <li><Link to="#" onClick={() => changeLanguageTrigger("tk")}>Turkish</Link></li>
                                        <li><Link to="#" onClick={() => changeLanguageTrigger("sp")}>Spanish</Link></li>
                                        <li><Link to="#" onClick={() => changeLanguageTrigger("po")}>Portuguese</Link></li>
                                        <li><Link to="#" onClick={() => changeLanguageTrigger("ch")}>Chinesse</Link></li>
                                    </ul>
                                </div>
                                {/* off canvas menu toggler*/}
                                <div className="offcanvas-toggler" onClick={addClass}>
                                    <span><span /><span /><span /></span>
                                </div>
                                {/* Navbar Toggler */}
                                <div className={classNames("navbar-toggler", { "active": togglemethod })} onClick={toggleClass}>
                                    <span /><span /><span />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={classNames("offcanvas-wrapper", { "show-offcanvas": classmethod })}>
                <div className={classNames("offcanvas-overly", { "show-overly": classmethod })} onClick={removeClass} />
                <div className="offcanvas-widget">
                    <Link to="#" className="offcanvas-close" onClick={removeClass} ><i className="fal fa-times" /></Link>
                    <OffCanvas />
                </div >
            </div >
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        currentLanguageCode: state.multilanguage.currentLanguageCode
    };
  };

export default connect(mapStateToProps)(Header);