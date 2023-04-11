import React from "react";

export default function Insight(props) {
    return (
        <div className={`insights__data ${props.utilityClass}`}>
            <p className="insights__data__n">{props.n}</p>
            <p className="insights__data__title">{props.title}</p>
        </div>
    )
}