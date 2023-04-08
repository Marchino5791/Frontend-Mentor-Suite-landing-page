import React from "react";

// Component
import Insight from "./Insight";

// Style
import "../style/_main.scss"

// Img
import curved_line_1 from "../../public/assets/pattern-curved-line-1.svg";
import hero from "../../public/assets/image-hero-landscape.png"


export default function Main() {
    return (
        <main>
            <section className="heading">
                <img src={curved_line_1} aria-hidden="true" className="heading__decoration"/>
                <h1 className="heading__title">A <strong>super solution</strong> for your <strong>business.</strong></h1>
                <p className="heading__subtitle">Our marketing and sales automations help you scale your outreach to
                    get more leads for your company. </p>
                <button className="heading__CTA">Request Beta Access</button>
            </section>

            <picture>
                <img src={hero} alt="Hero image" className="hero" />
            </picture>
            
            <section className="insights">
                <Insight
                    n="2K+"
                    title="Companies"
                />
                <Insight
                    n="8"
                    title="Languages"
                />
                <Insight
                    n="1.2M"
                    title="Leads"
                />
            </section>
        </main>
    )
}