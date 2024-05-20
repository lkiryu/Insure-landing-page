import React from "react";
import logo from '../../images/logo.svg'
import Link from "../Link/link";

import './footer.css'

const companyData = [
    {
        href: "/",
        link: "How we work",
    },
    {
        href: "/",
        link: "Why Insure?",
    },
    {
        href: "/",
        link: "View plans",
    },
    {
        href: "/",
        link: "Reviews",
    },
]

const helpData = [
    {
        href: "/",
        link: "FAQ",
    },
    {
        href: "/",
        link: "Terms of use",
    },
    {
        href: "/",
        link: "Privacy policy",
    },
    {
        href: "/",
        link: "Cookies",
    },
]

const contactData = [
    {
        href: "/",
        link: "Sales",
    },
    {
        href: "/",
        link: "Support",
    },
    {
        href: "/",
        link: "Live chat",
    },
]

const othersData = [
    {
        href: "/",
        link: "Careers",
    },
    {
        href: "/",
        link: "Press",
    },
    {
        href: "/",
        link: "Licenses",
    },
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-header">
                    <a href="/">
                        <img src={logo} alt='logo'></img>
                    </a>
                    <ul className="social">
                        <li><a href="/"><i className="fa-brands fa-square-facebook"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-pinterest"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div className="line"></div>
                <div className="links">
                    <Link title="Our company">
                            {
                                companyData.map((item, index) => {
                                    return (
                                        <li key={index}><a href={item.href}>{item.link}</a></li>
                                    )
                                })
                            }
                    </Link>
                    <Link title="Help me">
                            {
                                helpData.map((item, index) => {
                                    return (
                                        <li key={index}><a href={item.href}>{item.link}</a></li>
                                    )
                                })
                            }
                    </Link>
                    <Link title="contact">
                            {
                                contactData.map((item, index) => {
                                    return (
                                        <li key={index}><a href={item.href}>{item.link}</a></li>
                                    )
                                })
                            }
                    </Link>
                    <Link title="Others">
                            {
                                othersData.map((item, index) => {
                                    return (
                                        <li key={index}><a href={item.href}>{item.link}</a></li>
                                    )
                                })
                            }
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer