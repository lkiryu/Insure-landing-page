import React from "react";
import logo from '../../images/logo.svg'
import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <a href="/">
                <img src={logo} alt='logo'></img>
            </a>

            <div class="mobile-menu">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>

            <nav>
                <ul>
                    <li><a href="/">How we work</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Account</a></li>
                    <li><a href="/">View plans</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header