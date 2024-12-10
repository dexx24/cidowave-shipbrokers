import React from "react"
import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <div className="footer bg-dark py-5 mt-auto">
                <div className="footer-container container text-light ">
                    <div className="row links mb-4">
                        <div className="col-4 d-flex flex-column text-start">
                        <Link to="/">Home</Link>
                            <Link to="about">About</Link>
                            <Link to="services">Service</Link>
                            <Link to="contact">Contants</Link>
                        </div>
                        <div className="col-4 text-end">
                            <p>Our Socails</p>
                        </div>
                    </div>
                    <div className="row text-white-50 text-center">
                        <p>Legal disclaimers and copyright information.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}