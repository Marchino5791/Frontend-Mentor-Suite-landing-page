import React from "react";

// Component
import Insight from "./Insight";

// Style
import "../style/_main.scss"

// Img
import curved_line_1 from "../../public/assets/pattern-curved-line-1.svg";
import hero_land from "../../public/assets/image-hero-landscape.webp";
import hero_land_2x from "../../public/assets/image-hero-landscape@2x.webp";
import hero_port from "../../public/assets/image-hero-portrait.webp";
import hero_port_2x from "../../public/assets/image-hero-portrait@2x.webp";


export default function Main() {
    return (
        <main>
            <section className="heading">
                <img src={curved_line_1} alt="Decoration: curved line" aria-hidden="true" className="heading__decoration"/>
                <h1 className="heading__title">A <strong>super solution</strong> for your <strong>business.</strong></h1>
                <p className="heading__subtitle">Our marketing and sales automations help you scale your outreach to
                    get more leads for your company. </p>
                <button className="heading__CTA">Request Beta Access</button>
            </section>

            <picture>
                <source srcSet={`${hero_port}, ${hero_port_2x} 2x`} media="(min-width: 48em)" /> 
                <source srcSet={`${hero_land_2x} 2x`} />
                <img src={hero_land} alt="Hero image" className="hero" />
            </picture>
            
            <aside className="insights">
                <Insight
                    n="2K+"
                    title="Companies"
                    utilityClass="end"
                />
                <Insight
                    n="8"
                    title="Languages"
                    utilityClass="center"
                />
                <Insight
                    n="1.2M"
                    title="Leads"
                    utilityClass="start"
                />
            </aside>
        </main>
    )
}