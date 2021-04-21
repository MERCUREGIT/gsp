import React from 'react'
import { Link } from 'react-router-dom'
import { multilanguage } from "redux-multilanguage";

const navigationmenu = [
    {
        id: 1,
        linkText: 'Home',
        link: '/',
    },
    {
        id: 3,
        linkText: 'Services',
        link: '/services',
        child: true,
        submenu:[
            { id: 31,
            linkText: 'printing',
            link: '/services/printing',
           },
            { id: 32,
            linkText: 'IT & Consultancy',
            child: true,
            submenu:[
                { id: 321,
                linkText: 'Websites',
                link: '/services/Websites',
               },
                { id: 322,
                linkText: 'Building',
                link: '/services/building',
            },
                { id: 323,
                linkText: 'Renewable Energy',
                link: '/services/energy',
            }
            ]
        },
            { id: 34,
            linkText: 'Education',
            link: '/services/education',},
        ]
    },
    {
        id: 4,
        linkText: 'Product',
        child: true,
        submenu:[
            { id: 41,
            linkText: 'Raw Material',
            link: '/services/material',
        },
        ]
    },
    {
        id: 5,
        linkText: 'Portfolio',
        link: '/portfolio',
    },
    {
        id: 7,
        linkText: 'Contact',
        link: '/contact'
    },
    {
        id: 21,
        linkText: 'NGO',
        link: '/ngo'
    },
    // {
    //     id: 25,
    //     linkText: 'FAQ',
    //     link: '/faq'
    // }
]


export default multilanguage(({strings}) => {

    const getNextSibling = (elem, selector) => {
        // Get the next sibling element
        var sibling = elem.nextElementSibling
        // If there's no selector, return the first sibling
        if (!selector) return sibling
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling
            sibling = sibling.nextElementSibling
        }
    }

    const triggerChild = (e) => {
        let subMenu = ''
        subMenu = (getNextSibling(e.target, '.submenu') !== undefined) ? getNextSibling(e.target, '.submenu') : null
        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'submenu' : 'submenu d-block'
        }
    }

    return (
        <ul>
            {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                <li key={i} className={`${item.child ? 'has-submemu' : ''} `} onClick={triggerChild}>
                    {item.child ? <Link onClick={e => e.preventDefault()} to={"/" ||  item.link}> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                    {item.child ?
                        <>
                            <ul className="submenu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`${sub_item.child ? 'has-submemu' : ''} `}>
                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                        {sub_item.submenu ?
                                            <ul className="submenu">
                                                {sub_item.submenu.map((third_item, i) => (
                                                    <li key={i}><Link
                                                        to={third_item.link}>{third_item.linkText}</Link>
                                                    </li>
                                                ))}
                                            </ul> : null}
                                    </li>
                                ))}
                            </ul>
                            <span className="dd-trigger"><i className="fal fa-angle-down"></i></span>
                        </>
                        : null
                    }
                </li>
            )) : null}
        </ul>
    )
})