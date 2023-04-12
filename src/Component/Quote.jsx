import React from "react";

// Style
import "../style/_quote.scss";

// Img
import jeremy_mobile from "../../public/assets/image-jeremy-small.webp";
import jeremy_mobile_2x from "../../public/assets/image-jeremy-small@2x.webp";
import jeremy_desktop from "../../public/assets/image-jeremy-large.webp";
import jeremy_desktop_2x from "../../public/assets/image-jeremy-large@2x.webp";

import curved_line_2 from "../../public/assets/pattern-curved-line-2.svg"

export default function Quote() {
    return (
        <div className="quote">
            <picture role="figure" aria-labelledby="jeremy" className="quote__jeremy">
                <source srcSet={`${jeremy_desktop}, ${jeremy_desktop_2x} 2x`} media="(min-width: 67.5em)" />
                <source srcSet={`${jeremy_mobile_2x} 2x`} />
                <img src={jeremy_mobile} alt="Jeremy" className="quote__img" />
            </picture>
            <img src={curved_line_2} alt="Decoration: curved line" aria-hidden="true" className="quote__decoration center" />
            <div className="quote__text center">
                <h2 className="quote__text__title">It just <strong>works.</strong></h2>
                <blockquote className="quote__text__paragraph">“I really like how it is an all-in-one solution that handle many of
                    the tasks that you would normally need separate tools to do the same
                    job. This thing is a miracle worker.”</blockquote>
                <p id="jeremy" className="quote__text__author">Jeremy Robinson</p>
                <p className="quote__text__job">CMO, Fylo</p>
            </div>
        </div>
    )
}