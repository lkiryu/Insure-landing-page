import React from "react";

import "./link.css"

const Link = (props) => {
    return (
        <div className="link">
            <h2 className="link-title">{props.title}</h2>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export default Link