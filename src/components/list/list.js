import React from "react";

import './list.css'

const List = (props) => {
    return (
        <ul>
            <li><img src={props.src} alt={props.title}></img></li>
            <li><h3 className="list-title">{props.title}</h3></li>
            <li><p className="list-description">{props.description}</p></li>
        </ul>
    )
}

export default List