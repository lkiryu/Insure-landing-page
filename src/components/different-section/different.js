import React from "react";
import List from "../list/list";

import './different.css'

const listData = [
    {
        src: "./images/icon-snappy-process.svg",
        title: "Snappy Process",
        description: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    },
    {
        src: "./images/icon-affordable-prices.svg",
        title: "Affordable Prices",
        description: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
        src: "./images/icon-people-first.svg",
        title: "People First",
        description: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
    },
]

const Different = () => {
    return (
        <section className='different'>
            <div className="line"></div>
            <h2 className="title">We’re different</h2>
            <div className="lists">
                {
                    listData.map((item, index)=>{
                        return(
                            <List
                                key={index}
                                src={item.src}
                                title={item.title}
                                description={item.description}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Different