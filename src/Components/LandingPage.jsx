import React, { useEffect } from 'react';
import { constants } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import css from "../styles/LandingPage.module.css"

import heroRightBanner from "../Assets/heroBannerRight.jpg"
import heroLeftBanner from "../Assets/heroLeftBanner.png"
import benefitIcon1 from "../Assets/bestdeals.png";
import benefitIcon2 from "../Assets/fastDelivery.png";
import benefitIcon3 from "../Assets/fresh.png";

import Feature from './Feature';
import Benefits from './Benefits';
import BrandAnimation from '../Animations/BrandAnimation';
import RestaurantsCarousal from '../Animations/RestaurantsCarousal';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

function LandingPage() {

  useEffect(()=>{
    // hero section animations
    const Dish = document.getElementById('Dish');
    const rightSlide = document.getElementById('rightSlide');

    gsap.set(Dish, {x:'5%', y: '30%' });
    gsap.set(rightSlide, { y: '40%' });
  
    const initialHero = gsap.to(Dish, {
      y: '0%',
      x: '-30%',
      duration: 1,
      ease: 'power1.out',
      delay: 0.5,
      toggleActions : 'play reverse'
    });

    gsap.to(rightSlide, {
        y: '0%',
        duration: 1,
        ease: 'power2.out',
        delay: 0.5,
      });
    // end of the hero section animation

    // sliding image to next section on scroll
    gsap.to(Dish,{
        y : '175%',
        x : '55%',
        scale : 0.4,
        duration : 3,
        scrollTrigger: {
            trigger: Dish,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            markers: true, // for development/debugging purposes
          },

    })
  })
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
                    <div>
                        <BrandAnimation />
                    </div>
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
                 <div className={css.featureBanner} id='OrderAnimation'>
                    <img src="" alt="" />
                 </div>
                 <Feature title = {constants.featuresSection.feature1.headline}
                      description = {constants.featuresSection.feature1.description}
                    />
             </div>
             <div className={css.featureWrapper}>
                 <Feature title = {constants.featuresSection.feature2.headline}
                      description = {constants.featuresSection.feature2.description}
                    />
                <div className={css.featureBanner}>
                    <img src="" alt="" />
                 </div>
             </div>
             <div className={css.featureWrapper}>
                 <div className={css.featureBanner}>
                    <img src="" alt="" />
                 </div>
                 <Feature title = {constants.featuresSection.feature3.headline}
                      description = {constants.featuresSection.feature3.description}
                    />
             </div>
             <div className={css.featureWrapper}>
                 <Feature title = {constants.featuresSection.feature4.headline}
                      description = {constants.featuresSection.feature4.description}
                    />
                <div className={css.featureBanner}>
                    <img src="" alt="" />
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