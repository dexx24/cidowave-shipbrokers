import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    
    
    return (
         //NAVBAR
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            {/*navbar container */}
            <div class="container">  
                <Link class="navbar-brand" to="/"><img className="logo" src="assets/images/cidowavelogo-2.png"/></Link> {/*navbar logo here */}
                <button class="navbar-toggler shadow-none border-0" 
                        type="button" 
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#offcanvasNavbar" 
                        aria-controls="offcanvasNavbar" 
                        aria-label="Toggle navigation"
                    >
                <span class="navbar-toggler-icon"></span>
                </button>
                {/* sidebar here*/}
                <div class="sidebar offcanvas offcanvas-start bg-transparent" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header text-white border-bottom">
                        <Link class="navbar-brand fs-4" to="/">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                                LOGO HERE {/*navbar logo here */}
                            </h5>
                        </Link>     
                        <button 
                            type="button" 
                            class="btn-close btn-close-white shadow-none" 
                            data-bs-dismiss="offcanvas" 
                            aria-label="Close"
                            ></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end fs-6 flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="about">About</Link>
                            </li>
                            <li class="nav-item dropdown align-self-start">
                                <Link class="nav-link btn dropdown-toggle" 
                                    to="listings" 
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="fasle"
                                    >
                                    Listings
                                </Link>
                                <ul class="dropdown-menu bg-transparent" data-bs-theme="dark" style={{
                                    backdropFilter: "blur(5px)",
                                    
                                }}>
                                    <li><Link to="listings/sell" class="dropdown-item" href="#">Vessel for sale</Link></li>
                                    <li><Link to="listings/charter" class="dropdown-item" href="#">Vessel for charter</Link></li>
                                </ul> 
                            </li>
                            <li class="nav-item">
                                <Link href="/#contactForm" class="nav-link" to="/#contactForm">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="admin">admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> {/*navbar container end here */}
        </nav> 
    )
}






/* <header className="header row-fluid">
<Link className="site-logo col-8" to="/">Bens properties</Link>
<nav className="nav col-4">
    
    
    
    
    
</nav>


</header> */