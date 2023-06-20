import React, { useEffect, useRef ,useState} from 'react';
import { constants } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { MotionPathPlugin } from "gsap/all";
import css from "../styles/LandingPage.module.css"

import heroRightBanner from "../Assets/heroBannerRight.jpg"
import heroLeftBanner from "../Assets/heroLeftBanner.png"
import benefitIcon1 from "../Assets/bestdeals.png";
import benefitIcon2 from "../Assets/fastDelivery.png";
import benefitIcon3 from "../Assets/fresh.png";
import YourOrder from "../Assets/YourOrder.png";

import ExtraCheeze from "../Assets/Features/Feature1/Extra Cheeze.png";
import backCard from "../Assets/Features/Feature1/backCard.png";
import orderCard from "../Assets/Features/Feature1/OrderCard.png"

import addSpices from "../Assets/Features/Feature2/addSpices.png"
import OrderRecieved from "../Assets/Features/Feature2/OrderReceived.png"
import wokhei from "../Assets/Features/Feature2/wokhei.png"

import ArrivingSoon from "../Assets/Features/Feature3/ArrivinSoon.png"
import PickedUp from "../Assets/Features/Feature3/PickedUp.png"
import TrackMap from "../Assets/Features/Feature3/map.png"

import ratings from "../Assets/Features/Feature4/ratings.png"
import Package from "../Assets/Features/Feature4/package.png"
import payments from "../Assets/Features/Feature4/payments.png"
import Delivered from "../Assets/Features/Feature4/Delivered.png"



import Feature from './Feature';
import Benefits from './Benefits';
import BrandAnimation from '../Animations/BrandAnimation';
import RestaurantsCarousal from '../Animations/RestaurantsCarousal';
import TestimonialCard from './TestimonialCard';

// Register plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(MotionPathPlugin)

function LandingPage() {

    const yourOrderRef = useRef(null);
    const pathOrderRef = useRef(null);
    const sectionOneRef = useRef(null);

  useEffect(()=>{
    // hero section animations
    const Dish = document.getElementById('Dish');
    const rightSlide = document.getElementById('rightSlide');
    const cheezeCard = document.getElementById('ExtraCheezeCard');
    const menuCard = document.getElementById('MenuCard');
    const orderCard = document.getElementById('Ordercard');

    // initial positions
    // hero section
    gsap.set(Dish, {x : '-10%', y: '30%' });
    gsap.set(rightSlide, { y: '40%' });

    // feature 1
    gsap.set(cheezeCard,{x : '-75%',rotate: '0deg'})
    gsap.set(menuCard,{ y: '20%',opacity : '0.2'})

    gsap.to(Dish, {
      y: '0%',
      x: '-30%',
      duration: 1.5,
      ease: 'power1.out',
      delay: 0.4,
      toggleActions : 'play reverse'
    });

    gsap.to(rightSlide, {
        y: '0%',
        duration: 3,
        ease: 'power2.out',
        delay: 0.4,
      });
    // end of the hero section animations

    // this will scroll the dish element to features section
    const cheezeAnim = gsap.to(cheezeCard, {
        x: '0%',
        y: '0%',
        rotate : '15',
        duration: 3,
        ease: 'power2.out',
        delay : 0.4
      });

    const menuAnim = gsap.to(menuCard, {
        y: '0%',
        opacity : 1,
        duration: 2.5,
        ease: 'power2.out',
        delay : 0.4
      });
    
    gsap.to(Dish, {
        y: '142%',
        x: '75%',
        scale: 0.3,
        duration: 3,
        ease : 'power1.out',
        scrollTrigger: {
          trigger: Dish,
          start: 'top 80%',
          end: 'bottom 0%',
          scrub: true,
          markers: true, // for development/debugging purposes
          onLeaveBack : () => {
            gsap.to(Dish, {
                y: '0%',
                x: '-30%',
                duration: 1.5,
                ease: 'power1.out',
              });
          },
        }})
    
    gsap.to(yourOrderRef.current, {
            scrollTrigger : {
                trigger : '#YourOrderElement',
                start: 'top 30%',
                end: 'bottom 0%',
                scrub: true

            },
            duration : 5,
            delay : 0.4,
            ease: "power2.out",
            motionPath: {
                path: pathOrderRef.current.querySelector("path"),
                align: pathOrderRef.current.querySelector("path"),
                alignOrigin: [0.5, 0.5],
                start: 0,
            },
    });
  }); // useEffect close


  return (
    <div className={css.mainContainer}>
        {/* start of the nav bar */}
         <div className={css.NavbarConatainer}>
            <nav className={css.navBarWrap}>
                <div className={css.brandWrap}>
                    <p><span>Bite</span>Now</p>
                </div>
                <div className={css.navItemsWrap}>
                        <div className={css.navItems}>
                            <ul>
                                <li>
                                    How it works
                                </li>
                                <li>
                                    Popular restuarants
                                </li>
                                <li>
                                    Benefits
                                </li>
                                <li>
                                    Testimonials
                                </li>
                                
                            </ul>
                        </div>
                        <div className={css.navCTA}>
                            <button className={css.ctaBtn}>
                                Sign up
                            </button>
                        </div>
                </div>
            </nav>
         </div>
         {/* end of the nav bar */}
         <img src={heroRightBanner}  id='rightSlide' alt="" className={css.heroRightBanner} width={340} height={540}/>
         <img src={heroLeftBanner} id = 'Dish' alt="" className={css.heroLeftBanner} width={440} height={440}/>
         {/* start of the hero section */}
         <div className={css.heroSectionContainer}>
                <div className={css.heroSectionContent}>
                    <p className={css.headline}>
                        {constants.heroSection.headline}
                        <br />
                        {/* <span>
                            {constants.heroSection.headlineSpan}
                        </span> */}
                    </p>
                    <BrandAnimation />
                    <p className={css.subheadline} >
                        {constants.heroSection.subHeadline}
                    </p>
                    <button className={css.heroCTA}>
                        {constants.heroSection.heroCTA}
                    </button>
                    <p className={css.quickLink}>
                        {constants.heroSection.quickLink}
                    </p>
                </div>
         </div>
         {/* end of the hero section */}
         <div className={css.featureContainer}>
             <p className={css.featureHeadline}>
                {constants.featuresSection.headline}
             </p>
             <div className={css.featureWrapper}>
                 <div className={css.featureBanner} ref={sectionOneRef} id='OrderAnimation'>
                    <img src={ExtraCheeze} alt="" className={css.featureExtraCheeze} id = 'ExtraCheezeCard' width={130} />
                    <img src={backCard} alt="" className={css.feactureBackCard} id='MenuCard' width={350}/>
                    <img src={orderCard} alt="" className={css.orderCard} id='Ordercard' width={220}/>
                 </div>
                 <Feature  title = {constants.featuresSection.feature1.headline}
                      description = {constants.featuresSection.feature1.description}
                    />
             </div>
             {/* path from feature 1 to feature 2 */}
             <img src={YourOrder} alt="" className={css.yourOrderElement} id='YourOrderElement' width={40} ref={yourOrderRef}/>
             <svg ref={pathOrderRef} xmlns="http://www.w3.org/2000/svg" className={css.pathf1tof2} id='pathOrder' viewBox="0 0 200 600" width="200" height="600">
                        <path d="M 0 30
                                 C 0 30, 100 20, 100 140
                                 L 100 140
                                 L 100 480
                                 C 100 480, 90 580, 200 580
                                 L 200 580" fill="none" stroke="#B9BDBD" strokeWidth="2.5" strokeDasharray="7 7" />
             </svg>
             <div className={css.featureWrapper}>
                 <Feature title = {constants.featuresSection.feature2.headline}
                      description = {constants.featuresSection.feature2.description}
                    />
                <div className={css.featureBanner}>
                    <img src= {OrderRecieved} alt="" className={css.orderRecieved} width={200}/>
                    <img src={addSpices} alt="" className={css.addSpices} width={100}/>
                    <img src={wokhei} alt="" className={css.cookingWokhei} width={100}/>
                 </div>
             </div>
             {/* path from the feature 2 to feature 3 */}
             <svg xmlns="http://www.w3.org/2000/svg" className={css.pathf2tof3} id='PathF2toF3' viewBox="0 0 800 200" width="800" height="200">
                        <path d="M 800 0
                                 C 800 0 , 800 100 , 700 100
                                 L 700 100
                                 C 100 100 , 50 60 , 50 200
                                 L 50 200
                                 " fill="none" stroke="#B9BDBD" strokeWidth="2.5" strokeDasharray="7 7" />
             </svg>
             <div className={css.featureWrapper}>
                 <div className={css.featureBanner}>
                    <img src={ArrivingSoon} alt="" className={css.arrivingSoon} width={100}/>
                    <img src={PickedUp} alt="" className={css.PickedUp} width={100}/>
                    <img src={TrackMap} alt="" className={css.trackMap} width={320} />
                 </div>
                 <Feature title = {constants.featuresSection.feature3.headline}
                      description = {constants.featuresSection.feature3.description}
                    />
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" className={css.pathf3tof4} id='PathF3tof4' viewBox="0 0 200 600" width="200" height="600">
                        <path d="M 0 30
                                 C 0 30, 100 20, 100 140
                                 L 100 140
                                 L 100 480
                                 C 100 480, 90 580, 200 580
                                 L 200 580" fill="none" stroke="#B9BDBD" strokeWidth="2.5" strokeDasharray="7 7" />
             </svg>
             <div className={css.featureWrapper}>
                 <Feature title = {constants.featuresSection.feature4.headline}
                      description = {constants.featuresSection.feature4.description}
                    />
                <div className={css.featureBanner}>
                    <img src={Package} alt="" className={css.package} width={360}/>
                    <img src={ratings} alt="" className={css.ratings} width={180}/>
                    <img src={payments} alt="" className={css.payments} width={120}/>
                    <img src={Delivered} alt="" className={css.Delivered} width={120}/>
                 </div>
             </div>
             
         </div>
         {/* end of the features sections */}
         <div className={css.restaurantsConatainer}>
                <p className={css.restaurantHeadline}>
                    {constants.restuarants.headline}
                </p>
                <div className={css.restaurantsCarousals}>
                        <div>
                            <RestaurantsCarousal names = {constants.restuarants.names1} speed={1150} slides={7}/>
                        </div>
                        <div>
                            <RestaurantsCarousal names = {constants.restuarants.names2} speed={1300} rtl={true} slides={7}/>
                        </div>
                        <div>
                            <RestaurantsCarousal names = {constants.restuarants.names3} speed={1750} slides={8}/>
                        </div>
                </div>
         </div>
         {/* end of the resturants */}
         <div className={css.benefitsContainer}>
                <p className={css.benefitsHeadline}>
                    {constants.benefits.headline}
                </p>
                <div className={css.benefitsWrapper}>
                    <Benefits src ={benefitIcon1}
                              title = {constants.benefits.benefit1.title}
                              description = {constants.benefits.benefit1.description}
                    />
                    <Benefits src ={benefitIcon2}
                              title = {constants.benefits.benefit2.title}
                              description = {constants.benefits.benefit2.description}
                    />
                    <Benefits src ={benefitIcon3}
                              title = {constants.benefits.benefit1.title}
                              description = {constants.benefits.benefit2.description}
                    />
                </div>
         </div>
         {/* end of the benefits */}
         <div className={css.testimonialsContainer}>
                <p className={css.testimonialsHeadline}>
                    {constants.testimonials.headline}
                </p>
                <div className={css.testimonialWrapper}>
                    <div className={css.gridItem}> {/* Grid Item 1 */}
                        <TestimonialCard  name = {constants.testimonials.review1.name}
                                          review = {constants.testimonials.review1.text}/>
                    </div>
                    <div className={css.gridItem}> {/* Grid Item 2 */}
                        <TestimonialCard  name = {constants.testimonials.review2.name}
                                          review = {constants.testimonials.review2.text}/>
                    </div>
                    <div className={css.gridItem}> {/* Grid Item 3 */}
                        <TestimonialCard  name = {constants.testimonials.review3.name}
                                          review = {constants.testimonials.review3.text}/>
                    </div>
                    <div className={css.gridItem}> {/* Grid Item 4 */}
                        <TestimonialCard  name = {constants.testimonials.review4.name}
                                          review = {constants.testimonials.review4.text}/>
                    </div>
                    <div className={css.gridItem}> {/* Grid Item 5 */}
                        <TestimonialCard  name = {constants.testimonials.review5.name}
                                          review = {constants.testimonials.review5.text}/>
                    </div>
                    <div className={css.gridItem}> {/* Grid Item 6 */}
                        <TestimonialCard  name = {constants.testimonials.review6.name}
                                          review = {constants.testimonials.review6.text}/>
                    </div>
                    <div className={css.gridItem}> {/* Grid Item 6 */}
                        <TestimonialCard  name = {constants.testimonials.review7.name}
                                          review = {constants.testimonials.review7.text}/>  
                    </div>
                </div>
         </div>
         {/* end of the testimonials */}
         <div className={css.finalCTAContainer}>
             <div className={css.ctaWrapper}>
                 <div className={css.ctaContentWrap}>
                        <p className={css.ctaHeadline}>
                            {constants.finalCTA.headline}
                        </p>
                        <p className={css.ctaSubheadline}>
                            {constants.finalCTA.subHeadline}
                        </p>
                        <button className={css.ctaButton}>
                            {constants.finalCTA.ctaButton}
                        </button>
                 </div>
                 <div className = {css.ctaBanner}>
                    {/* Do not remove this this has background image */}
                 </div>
             </div>
         </div>
         {/* end of the footer */}
         <div className={css.footerContainer}>
            <div className={css.footerContentWrap}>
                    <div className={css.brandContentWrap}>
                        <div className={css.footerbrandWrap}>
                            <p><span>Brand</span>Now</p>
                        </div>
                        <p className={css.brandQuote}>
                            {constants.footer.brand.quote}
                        </p>
                    </div>
                    <div className={css.contactWrap}>
                        <p className={css.contactHeadline}>
                            {constants.footer.contact.headline}
                        </p>
                        <p className={css.contactInfo}>
                        {constants.footer.contact.email}
                        </p>
                        <p className={css.contactInfo}>
                        {constants.footer.contact.phone}
                        </p>
                    </div>
                    <div className={css.quiclLinkWrap}>
                            {constants.footer.quickLinks.map((item)=>{
                                return <p> {item}</p>
                            })}
                    </div>
                    <div className={css.newsletterWrap}>
                            <p className={css.nlheadline}>
                                {constants.footer.newsletter.headline}
                            </p>
                            <div className={css.subscribeWrap}>
                                    <input type="text" />
                                    <button>{constants.footer.newsletter.subscribe}</button>
                            </div>
                    </div>
            </div>
            <p className={css.copyright}>
                {constants.footer.copyright}
            </p>
         </div>
    </div>
  )
}

export default LandingPage;