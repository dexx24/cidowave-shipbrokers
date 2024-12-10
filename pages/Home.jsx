import React, { Suspense } from "react"
import { useState } from "react"
import { Await, defer, Link, useLoaderData } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas } from '@fortawesome/free-solid-svg-icons'
import {getVessels} from "../components/api"
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(fas)

export async function loader(){
   
   return defer({vessels: getVessels()})
}


export default function Home() {

    const dataPromise = useLoaderData()

    const cardStyle = {
        height:"100%",
        background: "rgba(0, 0, 0, 0.2)",
        backdropFilter:  "blur(2px)"
        }

    function renderedListing(vessels){
        const displayedVessels = [vessels.slice(-3)]
        console.log(displayedVessels)
        const listingsDisplayedElement = displayedVessels[0].map(listing=>(
            <div className="card-container cardcol-12 col-md-12 col-lg-4">
                <div className="listing-card w-100 h-100 card d-flex flex-column">
                    <img src={listing.image}/>
                    <div className="card-body justify-content-between d-flex flex-row">
                        <div className="text-section">
                            <h4 className="card-title">{listing.type}</h4>
                            <p className="card-text">{listing.description}</p>
                        </div>
                        <div className="cta-section">
                            <p>{listing.location}</p>
                            <p>${listing.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))
        return(
            <div className="row h-100 g-6 mb-4 mt-3">
                {listingsDisplayedElement}
            </div>
        )
    }


    return (
        <div className="home-page">
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false">
                <div className="carousel-indicators">
                    <button data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" ></button>
                    <button data-bs-target="#myCarousel" data-bs-slide-to="1" ></button>
                    <button data-bs-target="#myCarousel" data-bs-slide-to="2" ></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active"  >   
                        <div className="overlay-image" style={{background:"url(assets/images/pexels-introspectivedsgn-4700583.jpg) no-repeat center/cover"}}></div>
                        <div className="carousel-container">
                            <h1>Where ships meet their next journey</h1>
                            <h5>Connecting buyers, sellers, and charters in the global maritime market.</h5>
                            <Link to="listings" className="btn shadow-none border-0" 
                                style={{
                                    background: "#c4a121",
                                    maxWidth: "20em"
                                }}
                            >
                                <h2>Expore Listings</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <div className="overlay-image" style={{background:"url(assets/images/pexels-tomfisk-4094018.jpg) no-repeat center/cover"}}></div>
                        <div className="carousel-container"  >
                            <h1>Where ships meet their next journey</h1>
                            <h5>Connecting buyers, sellers, and charters in the global maritime market.</h5>
                            <Link to="listings" className="btn shadow-none border-0"
                                style={{
                                    background: "#c4a121",
                                    maxWidth: "20em"
                                }}
                             >
                                <h2>Expore Listings</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <div className="overlay-image" style={{background:"url(assets/images/pexels-lio-voo-262755153-14810112.jpg) no-repeat center/cover"}}></div>
                        <div className="carousel-container"  >
                            <h1>Where ships meet their next journey</h1>
                            <h5>Connecting buyers, sellers, and charters in the global maritime market.</h5>
                            <Link to="listings" className="btn shadow-none border-0"
                                style={{
                                    background: "#c4a121",
                                    maxWidth: "20em"
                                }}
                            >
                                <h2>Expore Listings</h2>
                            </Link>
                        </div>
                    </div>
                </div>
                <Link to="#myCarousel"
                    className="carousel-control-prev" role="button" data-bs-slide="prev" 
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                </Link>
                <Link to="#myCarousel"
                    className="carousel-control-next" role="button" data-bs-slide="next" 
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                </Link>
            </div>
            <div className="our-services container-fluid text-black text-center mb-4"id="ourServices">
                <h2 className="mt-5 ">WHAT WE PROVIDE</h2>
                
                <div className="card-row row row-cols-1 row-cols-md-3 m-5 ">
                    <div className="col">
                        <div className="service-card card pt-5">
                            <FontAwesomeIcon className="mt-3 mb-2" icon="fa-solid fa-ship" bounce size="5x" style={{color: "#c4a121",}}/>
                            <div className="card-body text">
                                <h4 className="card-title fs-5 fw-semibold text-capitalize">Vessel for sell</h4>
                                <p className="card-text">With a global network of ship sellers, we offer various options from around the world, to allow you compare range of vessels and prices,
                                    to ensure you find the most suitable vessel at the best price.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service-card card  pt-5">
                            <FontAwesomeIcon className="mt-3 mb-2" icon="fa-solid fa-water" bounce size="5x" style={{color: "#c4a121",}} />
                            <div className="card-body text">
                                <h4 className="card-title fs-5 fw-semibold text-capitalize">Vessel for charter</h4>
                                <p className="card-text">Our database of shipowners makes it possible to connect you with any suitable vessel for your cargoes, providing contracting and operational support through it all.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service-card card pt-5">
                            <FontAwesomeIcon className="mt-3 mb-2" icon="fa-solid fa-anchor-circle-check" bounce size="5x" style={{color: "#c4a121",}} />
                            <div className="card-body text">
                                <h4 className="card-title fs-5 fw-semibold text-capitalize">Sell with us</h4>
                                <p className="card-text">Let us send your vessels on it's next journey, by connecting your ships to potential buyers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-services mt-5 mb-5 container text-start">
                <div className="row">
                    <div className="featured-services-col col-12 col-md-6  col-lg-6">
                        <h3 className="fs-5 fw-semibold mb-3 text-center">OUR SERVICES</h3>
                        <ul>                           
                            <li><p><span className="fw-semibold">Buying & Selling:</span> Expert market analysis to maximize value.</p></li>
                            <li><p><span className="fw-semibold">Chartering:</span> Flexible options for commercial and private needs.</p></li>
                            <li><p><span className="fw-semibold">Valuation & Appraisal:</span> Trusted evaluations you can depend on.</p></li>
                        </ul> 
                        <Link to="listings" className="btn btn-primary mt-3 align-self-end">Get started today</Link>
                    </div>
                    <div className="featured-services-img col-12 col-md-6 col-lg-6 mt-3">
                        <img src="assets\images\pexels-kelly-1179532-12464223.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="why-us container-fluid p-5" 
                style={{background: "url(assets/images/pexels-tomfisk-4094018.jpg) no-repeat center/cover"}}
            >
                <div className="row text-white align-self-center">
                    <div className="col-sm-9">
                        <h3 style={{color: "#c4a121"}}>Why choose us</h3>
                        <p className="text-white">at Cidowave shipbrokers, we strive to simplify every ship transactions for our clients, 
                        making sure every transaction is smooth, transparent and aligned with your goals
                        we see each transaction as an opportunity to forge partnerships built on customer satisfaction, 
                        trust, and integrity.</p>
                    </div>
                    <div className="col-12 align-self-end">
                        <a  href="#contactForm" className="why-us-btn btn border-0 text-center" style={{
                                                                                                        background: "#c4a121",
                                                                                                        minWidth: "25%"
                                                                                                        }}>contact us</a>
                    </div>
                </div>
            </div>
            <div className="featured-listings container-fluid p-5 mt-5 mb-0 bg-dark text-white " data-bs-theme="dark" >
                <h3>Discover Our Latest Vessel Opportunities</h3>
                <h5>Browse a curated selection of ships for sale and charter</h5>
                <Suspense fallback={ <h3>getting featured lisitngs...</h3> } >
                    <Await resolve={dataPromise.vessels}>
                        {renderedListing}
                    </Await>
                    <Link to="listings" className="btn">View All Listings</Link>
                </Suspense>
            </div>
            <div className="form-container container-fluid d-flex
                    align-items-center justify-content-center min-height-100vh"
                id="contactForm">
                <div className="row form-area-overlay g-0" style={{background:"url(assets/images/pexels-kelly-1179532-12464223.jpg)no-repeat center/cover"}}
               ></div>
                <div className="form-area row rounded-2 p-3 bg-transparent text-white" data-bs-theme="dark">
                    <div className="form-left col-sm-12 col-lg-6 rounded-3 d-flex flex-column align-items-center justify-content-start">
                        <p className=" text-wrap text-center text-white"style={{width:"17rem"}}><span>A brief invitation to get in touch for inquiries or consultations</span></p>
                        <h3 className=" fs-2 text-wrap text-center"><span>Contact us for<br />Business Enquiries</span>
                        </h3>
                    </div>
                    <div className="form-right col-sm-12 col-lg-6">
                        <form className=""> 
                            <div class="mb-3">
                                <label htmlFor="formName" class="form-label">Name</label>
                                <input type="text" class="form-control" id="formName"/>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="formEmail" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="formEmail" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="formNumber" class="form-label">Phone Number</label>
                                <input type="text" class="form-control" id="formNumber"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="textArea" className="form-label">message</label>
                                <textarea id="textArea" className="form-control"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    )
};


/* 
    <div>
            <section className="landingPage-content">
                <h1>Where Ships Meet Their Next Journey</h1>
                <h3>
                    the ultimate blablabla...
                </h3>
            </section>
            <section className="landingPage-contentPar">
                <p>
                    WHAT ARE YOU LOOKING FOR
                </p>
                <div className="landingPage-content-buttons">    
                    <button className="landingPage-content-button-buy"><h3>Buy</h3></button>
                    <button className="landingPage-content-button-chatter"><h3>Chatter</h3></button>
                    <button className="landingPage-content-button-sell"><h3>Sell</h3></button>
                </div>
                <section className="home-about-section">
                    <div className="about-page-container">
                        <h1>What we provide</h1>
                        <br></br>
                        <h2>VESSELS FOR SALE:</h2>
                        <p>With a global network of ship sellers we offer various options from around the world to allow you compare range of vessels and prices to ensure you find the most suitable vessel at the best price</p>
                        <br></br>
                        <h2>VESSELS FOR CHARTER:</h2>
                        <p>With a global network of ship sellers we offer various options from around the world to allow you compare range of vessels and prices to ensure you find the most suitable vessel at the best price</p>
                        <br/>
                        <h2>SELL WITH US:</h2>
                        <p>With a global network of ship sellers we offer various options from around the world to allow you compare range of vessels and prices to ensure you find the most suitable vessel at the best price</p>
                    </div>
                </section>
                
            </section>
            
        </div>
        */