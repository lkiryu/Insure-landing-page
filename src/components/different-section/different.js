import React from "react";
import snappy from '../../images/icon-snappy-process.svg'
import affordable from '../../images/icon-affordable-prices.svg'
import people from '../../images/icon-people-first.svg'

import './different.css'

const Different = () => {
    return (
        <section className='different'>
            <div className="line"></div>
            <h2 className="title">We’re different</h2>
            <div className="lists">
                <ul>
                    <li><img src={snappy} alt="snappy process"></img></li>
                    <li><h3 className="list-title">Snappy Process</h3></li>
                    <li><p className="list-description">Our application process can be completed in minutes, not hours. Don’t get
                        stuck filling in tedious forms.</p></li>
                </ul>
                <ul>
                    <li><img src={affordable} alt="affordable prices"></img></li>
                    <li><h3 className="list-title">Affordable Prices</h3></li>
                    <li><p className="list-description">We don’t want you worrying about high monthly costs. Our prices may be low,
                        but we still offer the best coverage possible.</p></li>
                </ul>
                <ul>
                    <li><img src={people} alt="people first"></img></li>
                    <li><h3 className="list-title">People First</h3></li>
                    <li><p className="list-description">Our plans aren’t full of conditions and clauses to prevent payouts. We make
                        sure you’re covered when you need it.</p></li>
                </ul>
            </div>
        </section>
    )
}

export default Different