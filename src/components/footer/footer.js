import React from "react";
import logo from '../../images/logo.svg'

import './footer.css'

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
                    <ul>
                        <li>Our company</li>
                        <li><a href="/">How we work</a></li>
                        <li><a href="/">Why Insure?</a></li>
                        <li><a href="/">View plans</a></li>
                        <li><a href="/">Reviews</a></li>
                    </ul>
                    <ul>
                        <li>Help me</li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Terms of use</a></li>
                        <li><a href="/">Privacy policy</a></li>
                        <li><a href="/">Cookies</a></li>
                    </ul>
                    <ul>
                        <li>Contact</li>
                        <li><a href="/">Sales</a></li>
                        <li><a href="/">Support</a></li>
                        <li><a href="/">Live chat</a></li>
                    </ul>
                    <ul>
                        <li>Others</li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Press</a></li>
                        <li><a href="/">Licenses</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer