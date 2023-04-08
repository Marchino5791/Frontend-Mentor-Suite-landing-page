import React from "react";

// Style
import "../style/_quote.scss";

// Img
import jeremy_mobile from "../../public/assets/image-jeremy-small.png"
import curved_line_2 from "../../public/assets/pattern-curved-line-2.svg"

export default function Quote() {
    return (
        <div className="quote">
            <picture>
                <img src={jeremy_mobile} alt="Jeremy" className="quote__img" />
            </picture>
            <img src={curved_line_2} aria-hidden="true" className="quote__decoration" />
            <section className="quote__text">
                <h2 className="quote__text__title">It just <strong>works.</strong></h2>
                <p className="quote__text__paragraph">“I really like how it is an all-in-one solution that handle many of
                    the tasks that you would normally need separate tools to do the same
                    job. This thing is a miracle worker.”</p>
                <p className="quote__text__author">Jeremy Robinson</p>
                <p className="quote__text__job">CMO, Fylo</p>
            </section>
        </div>
    )
}