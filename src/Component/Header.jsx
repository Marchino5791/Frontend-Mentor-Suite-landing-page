import React from "react";

// Style
import "../style/_header.scss"

// img
import logo from "../../public/assets/logo.svg"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="suite's logo" />
            <button class="CTA">Request Beta Access</button>
        </header>
    )
}