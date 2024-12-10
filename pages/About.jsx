import React from "react"
import { Link,  } from "react-router-dom"
import {getVessels} from "../components/api"

// export async function loader() {
//     const vesselProm = getVessels()
//     return defer({vessels: vesselProm})
// }

export default function About(){
    return (
        <div className="about-page">
            <div className="container-fluid pt-5 pb-5 h-100 w-100" style={{background:"url(assets/images/pexels-julien-goettelmann-44396125-28966473.jpg)no-repeat center/cover"}}>
                <div className="about-us-row p-4 text-white ms-4 me-4">
                    <h1 className="fs-5 mb-4 " style={{color:"#c4a121"}}>ABOUT CIDOWAVE SHIPBROKERS</h1>
                    <p>Here at CidoWave, we understand that the world of shipbroking can be complex.
                        That's why we made it our goal to make shipping easier, more transparent, 
                        and more dependable for our clients.</p>
                    <p>At the heart of Cidowave is a commitment to integrity, customer satisfaction, 
                        and innovation. We stay ahead of market trends, leveraging our expertise to deliver 
                        customized solutions that meet your unique maritime needs.
                    </p>
                    <p>For us, trust is the foundation of every relationship. 
                        We pride ourselves on our integrity and honesty, always putting your best 
                        interests at the forefront of everything we do. Whether you're a first-time client 
                        or a long-term partner, we are here to earn and maintain your trust through clear 
                        communication, expert advice, and consistent results.  
                    </p>
                    <h2 className="fs-4 " style={{color:"#c4a121"}}>Our Promise to You</h2>
                    <p>When you choose CidoWave Shipbrokers, you're not just choosing a service provider—you’re 
                        choosing a trusted partner who will always have your back. 
                        We're here to help you navigate the complexities of the shipping world, 
                        with a simple, transparent, and reliable approach.
                    </p>
                    <p>Thank you for considering CidoWave Shipbrokers. We look forward to working with you 
                        and building a long-lasting relationship based on trust, simplicity, and reliability.
                    </p>
                </div>
            </div>
        </div>
    );
}



/*
<div class="tpslider__area fix">
<div class="hero-wrapp">
<div class="hero-active-2 swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
<div class="swiper-wrapper" id="swiper-wrapper-78b5d838451999a10" aria-live="off" style="transition-duration: 0ms;"><div class="swiper-slide tpslider__item tpslider__height d-flex align-items-center p-relative fix swiper-slide-duplicate swiper-slide-duplicate-next" data-background="assets/img/slider/slider-img-2.3.jpg" data-swiper-slide-index="2" style="background-image: url(&quot;assets/img/slider/slider-img-2.3.jpg&quot;); width: 430px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;" role="group" aria-label="1 / 5">
<div class="tpslider__shap"><img alt="" class="home-2-shap" src="assets/img/slider/slider-shap.png"></div>

<div class="tpslider__shap-2 "><img alt="" class="home-2-shap-2" src="assets/img/slider/slider-shap2.png"></div>

<div class="container">
<div class="row">
<div class="col-xl-7">
<div class="tpslider__wrap">
<div class="tpslider__content"><span class="tpslider__subtitle ">WELCOME TO PORTFLUX CARGO SERVICES</span>

<h1 class="tpslider__title-2">Portflux is Now Ready to Take Off.</h1>
</div>

<div class="tpslider__info d-flex align-items-center">
<div class="tpslider__btn-box mr-30"><a class="thm-btn" href="about.html">EXPLORE MORE</a></div>

<div class="tpslider__video d-flex align-items-center">
<div class="video-one__video-icons icon mr-20"></div>

<div class="text ">
<h3>Watch Our<br>
Showcase</h3>
</div>
</div>

<div class="tpslider__shap-3 ml-30"><img alt="" src="assets/img/slider/slider-shap3.png"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="swiper-slide tpslider__item tpslider__height d-flex align-items-center p-relative fix swiper-slide-prev" data-background="assets/img/slider/slider-img-2.1.jpg" data-swiper-slide-index="0" style="background-image: url(&quot;assets/img/slider/slider-img-2.1.jpg&quot;); width: 430px; opacity: 1; transform: translate3d(-430px, 0px, 0px); transition-duration: 0ms;" role="group" aria-label="2 / 5">
<div class="tpslider__shap"><img alt="" class="home-2-shap" src="assets/img/slider/slider-shap.png"></div>

<div class="tpslider__shap-2 "><img alt="" class="home-2-shap-2" src="assets/img/slider/slider-shap2.png"></div>

<div class="container">
<div class="row">
<div class="col-xl-7">
<div class="tpslider__wrap">
<div class="tpslider__content"><span class="tpslider__subtitle ">WELCOME TO PORTFLUX CARGO SERVICES</span>

<h1 class="tpslider__title-2">Portflux is Now Ready to Take Off.</h1>
</div>

<div class="tpslider__info d-flex align-items-center">
<div class="tpslider__btn-box mr-30"><a class="thm-btn" href="about.html">EXPLORE MORE</a></div>

<div class="tpslider__video d-flex align-items-center">
<div class="video-one__video-icons icon mr-20"></div>

<div class="text ">
<h3>Watch Our<br>
Showcase</h3>
</div>
</div>

<div class="tpslider__shap-3 ml-30"><img alt="" src="assets/img/slider/slider-shap3.png"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="swiper-slide tpslider__item tpslider__height d-flex align-items-center p-relative fix swiper-slide-active" data-background="assets/img/slider/slider-img-2.2.jpg" data-swiper-slide-index="1" role="group" aria-label="3 / 5" style="background-image: url(&quot;assets/img/slider/slider-img-2.2.jpg&quot;); width: 430px; opacity: 1; transform: translate3d(-860px, 0px, 0px); transition-duration: 0ms;">
<div class="tpslider__shap"><img alt="" class="home-2-shap" src="assets/img/slider/slider-shap.png"></div>

<div class="tpslider__shap-2 "><img alt="" class="home-2-shap-2" src="assets/img/slider/slider-shap2.png"></div>

<div class="container">
<div class="row">
<div class="col-xl-7">
<div class="tpslider__wrap">
<div class="tpslider__content"><span class="tpslider__subtitle ">WELCOME PORTFLUX CARGO SERVICES</span>

<h1 class="tpslider__title-2">Portflux is Now Ready to Take Off.</h1>
</div>

<div class="tpslider__info d-flex align-items-center">
<div class="tpslider__btn-box mr-30"><a class="thm-btn" href="about.html">EXPLORE MORE</a></div>

<div class="tpslider__video d-flex align-items-center">
<div class="video-one__video-icons icon mr-20"></div>

<div class="text ">
<h3>Watch Our<br>
Showcase</h3>
</div>
</div>

<div class="tpslider__shap-3 ml-30"><img alt="" src="assets/img/slider/slider-shap3.png"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="swiper-slide tpslider__item tpslider__height d-flex align-items-center p-relative fix swiper-slide-next" data-background="assets/img/slider/slider-img-2.3.jpg" data-swiper-slide-index="2" style="background-image: url(&quot;assets/img/slider/slider-img-2.3.jpg&quot;); width: 430px; opacity: 0; transform: translate3d(-1290px, 0px, 0px); transition-duration: 0ms;" role="group" aria-label="4 / 5">
<div class="tpslider__shap"><img alt="" class="home-2-shap" src="assets/img/slider/slider-shap.png"></div>

<div class="tpslider__shap-2 "><img alt="" class="home-2-shap-2" src="assets/img/slider/slider-shap2.png"></div>

<div class="container">
<div class="row">
<div class="col-xl-7">
<div class="tpslider__wrap">
<div class="tpslider__content"><span class="tpslider__subtitle ">WELCOME TO PORTFLUX CARGO SERVICES</span>

<h1 class="tpslider__title-2">Portflux is Now Ready to Take Off.</h1>
</div>

<div class="tpslider__info d-flex align-items-center">
<div class="tpslider__btn-box mr-30"><a class="thm-btn" href="about.html">EXPLORE MORE</a></div>

<div class="tpslider__video d-flex align-items-center">
<div class="video-one__video-icons icon mr-20"></div>

<div class="text ">
<h3>Watch Our<br>
Showcase</h3>
</div>
</div>

<div class="tpslider__shap-3 ml-30"><img alt="" src="assets/img/slider/slider-shap3.png"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="tpslider__dots text-end swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span></div>
<div class="swiper-slide tpslider__item tpslider__height d-flex align-items-center p-relative fix swiper-slide-duplicate swiper-slide-duplicate-prev" data-background="assets/img/slider/slider-img-2.1.jpg" data-swiper-slide-index="0" style="background-image: url(&quot;assets/img/slider/slider-img-2.1.jpg&quot;); width: 430px; opacity: 0; transform: translate3d(-1720px, 0px, 0px); transition-duration: 0ms;" role="group" aria-label="6 / 5">
<div class="tpslider__shap"><img alt="" class="home-2-shap" src="assets/img/slider/slider-shap.png"></div>

<div class="tpslider__shap-2 "><img alt="" class="home-2-shap-2" src="assets/img/slider/slider-shap2.png"></div>

<div class="container">
<div class="row">
<div class="col-xl-7">
<div class="tpslider__wrap">
<div class="tpslider__content"><span class="tpslider__subtitle ">WELCOME TO PORTFLUX CARGO SERVICES</span>

<h1 class="tpslider__title-2">Portflux is Now Ready to Take Off.</h1>
</div>

<div class="tpslider__info d-flex align-items-center">
<div class="tpslider__btn-box mr-30"><a class="thm-btn" href="about.html">EXPLORE MORE</a></div>

<div class="tpslider__video d-flex align-items-center">
<div class="video-one__video-icons icon mr-20"></div>

<div class="text ">
<h3>Watch Our<br>
Showcase</h3>
</div>
</div>

<div class="tpslider__shap-3 ml-30"><img alt="" src="assets/img/slider/slider-shap3.png"></div>
</div>
</div>
</div>
</div>
</div>
</div></div>
<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
</div>
</div>
*/