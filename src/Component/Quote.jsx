import React from "react";

// Style
import "../style/_quote.scss";

// Img
import jeremy_mobile from "../../public/assets/image-jeremy-small.png"
import curved_line_2 from "../../public/assets/pattern-curved-line-2.svg"

export default function Quote() {
    return (
        <section className="quote">
            <picture>
                <img src={jeremy_mobile} alt="Jeremy" className="quote__img" />
            </picture>
                <img src={curved_line_2} aria-hidden="true" className="quote__decoration" />
        </section>
    )
}