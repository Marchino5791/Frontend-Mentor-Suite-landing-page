import React from "react";

// Components
import Header from "./Component/Header"
import Main from "./Component/Main"
import Quote from "./Component/Quote"
import Footer from "./Component/Footer"

// Style
import "./style/_base.scss"

export default function App() {
    return (
        <div>
            <Header />
            <Main />
            <Quote />
            <Footer />
        </div>
    )
}