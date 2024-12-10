import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="site-wrapper d-flex flex-column min-vh-100">
            <Header/>
            <main className="flex-fill">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}



/*
<div className="row g-5">
                <Header />
                <main className="main-content row">
                    <Outlet />
                </main>
                <Footer />
            </div>
            */