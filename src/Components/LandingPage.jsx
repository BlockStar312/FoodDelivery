import React, { useEffect, useRef ,useState} from 'react';
import { constants } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { MotionPathPlugin } from "gsap/all";
import css from "../styles/LandingPage.module.css"

import heroRightBanner from "../Assets/heroBannerRight.jpg"
import heroLeftBanner from "../Assets/heroLeftBanner.png"
import benefitIcon1 from "../Assets/bestdeals.png";
import benefitIcon2 from "../Assets/fastDelivery.png";
import benefitIcon3 from "../Assets/fresh.png";
import YourOrder from "../Assets/YourOrder.png";
import foodPackage from "../Assets/food-pack.png";
import deliveryGuy from '../Assets/deliveryGuy.png'

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
    const pathPackageRef  = useRef(null);
    const deliveryPathRef = useRef(null);
    const sectionOneRef = useRef(null);
    const trackPathRef = useRef(null);

  const dishAnime = () =>{
       return gsap.to('#Dish', {
                        y: '0%',
                        x: '-30%',
                        duration: 1.5,
                        ease: 'power1.out',
                        delay: 0.4,
                        toggleActions : 'play reverse'
                        });
  }

  const foodCardAnime = () =>{
       return gsap.to('#rightSlide', {
                        y: '0%',
                        duration: 3,
                        ease: 'power2.out',
                        delay: 0.4,
                    });
  }

  const featureCheezeAnim = () =>{
        return gsap.to('#ExtraCheezeCard', {
                        x: '0%',
                        y: '0%',
                        opacity : 0.25,
                        opacity : 0.5,
                        opacity : 0.75,
                        opacity : 1.0,
                        rotate : '15',
                        duration: 4,
                        ease: 'power2.out',
                    });
  }

  const featureMenuCardFadeinAnime = () =>{
        return gsap.to('#MenuCard', {
                        y: '0%',
                        opacity : 1,
                        duration: 4,
                        ease: 'power2.out',
                    });
  }

  const featureOrderCard = () =>{
        return gsap.to('#Ordercard', {
                        y: '0%',
                        opacity : 1,
                        duration: 4,
                        ease: 'power2.out',
                    });
  }


  const scrollDishtoFeatureSectionAnime = () =>{
        return gsap.to('#Dish', {
                                y: '142%',
                                x: '75%',
                                rotate : '360',
                                scale: 0.3,
                                duration: 4,
                                ease : 'power1.out',
                                scrollTrigger: {
                                trigger: '#Dish',
                                start: 'top 75%',
                                end: 'bottom 0%',
                                scrub: true,
                                onLeaveBack : () => {
                                    gsap.to('#Dish', {
                                        y: '0%',
                                        x: '-30%',
                                        duration: 1.5,
                                        ease: 'power1.out',
                                    });
                                },
                                }})
  }

  const triggerPath1 = () =>{
        return gsap.to('#YourOrderElement', {
                scrollTrigger : {
                    trigger : '#YourOrderElement',
                    start: 'top 30%',
                    end: 'bottom 0%',
                    scrub: true
                }
            });
  }
  const motionPathFromFeature1  = () =>{
        return gsap.to('#YourOrderElement', {
                        duration : 5,
                        ease: "power1.out",
                        motionPath: {
                            path: pathOrderRef.current.querySelector("path"),
                            align: pathOrderRef.current.querySelector("path"),
                            alignOrigin: [0.5, 0.5],
                            start: 0,
                        },
                    });
  }

  // feature section 2 animation elements

  const addingSpicesCardAnime = () =>{
        return gsap.to('#addingSpicesCard', {
                        x: '0%',
                        y: '0%',
                        opacity : 0.25,
                        opacity : 0.5,
                        opacity : 0.75,
                        opacity : 1.0,
                        rotate : '15',
                        duration: 1,
                        ease: 'power2.out',
                    });
  }
  const wokheiCardAnime = () =>{
        return gsap.to('#wokheiCard',{
                     x : '0%',
                     y : '0%',
                     opacity : 0.25,
                     opacity : 0.5,
                     opacity : 0.75,
                     opacity : 1.0,
                     rotate : '-15',
                     duration: 1,
                     ease: 'power2.out',
        })
  }

  const orderRecievedAnime = () =>{
        const animTimeline = gsap.timeline()
        animTimeline.to("#orderRecievedCard",{
                    y : '0%',
                    opacity : 1,
                    rotateY : '1080',
                    scale : 0.8,
                    duration : 1,
                    ease : 'power2.out'
        });
        animTimeline.to("#orderRecievedCard",{
            y : '-20%',
            opacity : 0,
            duration : 1,
            ease : 'power1.in'
        })
        return animTimeline
  }
  // trigge when scroll is reached
  const triggerPath2 = () =>{
        return gsap.to('#PackageElement', {
            scrollTrigger : {
            trigger : '#PackageElement',
            start: 'top 30%',
            end: 'bottom 0%',
            scrub: true
            }
        });
  }

  const motionPathFromFeature2  = () =>{
    return gsap.to('#PackageElement', {
                    duration : 5,
                    ease: "power1.out",
                    motionPath: {
                        path: pathPackageRef.current.querySelector("path"),
                        align:pathPackageRef.current.querySelector("path"),
                        alignOrigin: [0.5, 0.5],
                        start: 0,
                    },
                });
    }
  const arrivingSoonAnime = () =>{
        return gsap.to('#ArrivingSoon',{
              y : '0%',
              rotate : '-15',
              opacity : 1,
              ease : 'power2.out',
              duration : 1
        })
  }

  const pickedUpAnime = () =>{
        return gsap.to('#pickedUp',{
                x : '0%',
                y : '0%',
                rotate : '15',
                opacity : 1,
                ease : 'power2.out',
                duration : 1
        })
  }

  const showUpTrackMapAnime = () =>{
        return gsap.to('#trackingMap', {
            y: '0%',
            opacity : 1,
            duration: 1.5,
            ease: 'power1.out',
        });
  }

  const deliveryMotionPath = () =>{
        return gsap.to('#deliveryElement', {
                        duration : 5,
                        ease: "power1.out",
                        motionPath: {
                            path: deliveryPathRef.current.querySelector("path"),
                            align: deliveryPathRef.current.querySelector("path"),
                            alignOrigin: [0.5, 0.5],
                            start: 0,
                        },
        });
    }

 // last section animations
  const deliveryPackAnime = () =>{
        return gsap.to("#deliveredPack",{
                x : '0%',
                rotate : '-15',
                opacity : 1,
                duration : 1,
                ease : 'power2.out'
        })
  }

  const paymentsCardAnime = () =>{
        return gsap.to('#paymentsCard',{
                x : '0',
                y: '0',
                rotate : '15',
                opacity : 1,
                duration : 1,
                ease : 'power2.out'
        })
  }

  const packageShowUpAnime = () =>{
      return gsap.to('#package',{
           y : '0',
           opacity : 1,
           duration : 1,
           ease : 'power2.out'
      })
  }
  const ratingsShowUpAnime = () =>{
        return gsap.to('#ratingBar',{
                x : '0',
                opacity : 1,
                duration : 2,
                ease: 'elastic.out(1.5,0.2)'
        })
  }

  const trackingDeliveryAnime = () =>{
        const trackTimeLine = gsap.timeline();
        trackTimeLine.add(gsap.to(trackPathRef.current ,{
             opacity : 1,
             duration : 0.4,
             ease : 'power1.in'
        }))
        trackTimeLine.add(gsap.to('#trackingDeliveryGuy',{
            opacity : 1,
             duration : 0.4,
             ease : 'power1.in'
        }))
        trackTimeLine.add(gsap.to('#trackingDeliveryGuy',{
            duration : 6,
            ease: "power1.out",
            motionPath: {
                path: trackPathRef.current.querySelector("path"),
                align: trackPathRef.current.querySelector("path"),
                alignOrigin: [0.5, 0.5],
                start: 0,
            },
        }))
        return trackTimeLine
  }
  useEffect(()=>{

    const masterTimeline = gsap.timeline();

    const feature1Timeline = gsap.timeline();

    const feature2Timeline = gsap.timeline();

    const feature3Timeline = gsap.timeline();

    const feature4Timeline = gsap.timeline();

    // initiials for the elements for section 2
    feature1Timeline.set('#Dish', {x : '-10%', y: '30%' })
    feature1Timeline.set('#rightSlide',  { y: '40%' })
    feature1Timeline.set('#ExtraCheezeCard', {x : '-75%',rotate: '-15deg',opacity : 0})
    feature1Timeline.set('#MenuCard', { y: '25%',opacity : '0'})
    feature1Timeline.set('#Ordercard',{y : "20%" , opacity : 0.2})

    // initiials for the elements for section 2
    feature2Timeline.set('#addingSpicesCard',{x : '-75%',rotate: '-15deg',opacity : 0})
    feature2Timeline.set('#wokheiCard',{x : '20%',y: '-35%',rotate: '15deg',opacity : 0})
    feature2Timeline.set('#orderRecievedCard',{y: '-25%',opacity : 0})

    // initiials for the elements for section 3
    feature3Timeline.set('#ArrivingSoon',{y:'35%',rotate: '15deg',opacity : 0})
    feature3Timeline.set('#pickedUp',{x : '20%',y:'25%',rotate: '-20deg',opacity : 0})
    feature3Timeline.set('#trackingMap',{y: '20%',opacity : 0})
    feature3Timeline.set('#trackingDeliveryGuy',{opacity: 0})
    feature3Timeline.set(trackPathRef.current,{opacity : 0})

    // initiials for the elements for section 4
    feature4Timeline.set('#deliveredPack',{x : '-20%',rotate : '-30',opacity :0})
    feature4Timeline.set('#paymentsCard',{x: '-20%',y : "30%" , rotate : '-15',opacity : 0})
    feature4Timeline.set('#package',{y:"10%",opacity: 0})
    feature4Timeline.set('#ratingBar',{x : '15%',opacity :0})

    // timeline for section 1
    feature1Timeline.add([dishAnime(),foodCardAnime()],0)
    feature1Timeline.add(scrollDishtoFeatureSectionAnime())
    feature1Timeline.add([featureCheezeAnim(),featureMenuCardFadeinAnime(),featureOrderCard()],'-=0.3')



    // timeline for section 2
    feature2Timeline.add(orderRecievedAnime())

    feature2Timeline.add(addingSpicesCardAnime())

    feature2Timeline.add(wokheiCardAnime() ,'-=0.3')



    // timeline for section 3

    feature3Timeline.add(arrivingSoonAnime())

    feature3Timeline.add(pickedUpAnime(),'-=0.5')

    feature3Timeline.add(showUpTrackMapAnime(),'-=0.4')

    feature3Timeline.add(trackingDeliveryAnime())


    // timeline for section 4
    feature4Timeline.add(deliveryPackAnime())

    feature4Timeline.add(paymentsCardAnime(),'-=1')

    feature4Timeline.add(packageShowUpAnime(),'-=0.5')

    feature4Timeline.add(ratingsShowUpAnime(),'-=0.5')

    // master timeline to link add elements
    masterTimeline.add(feature1Timeline)

    masterTimeline.add(triggerPath1())

    masterTimeline.add(motionPathFromFeature1(),'+=1.5')

    masterTimeline.add(feature2Timeline)

    masterTimeline.add(triggerPath2())

    masterTimeline.add(motionPathFromFeature2(),'+=1.5')

    masterTimeline.add(feature3Timeline)

    masterTimeline.add(deliveryMotionPath(),'+=1.5')

    masterTimeline.add(feature4Timeline)

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
                    <img src= {OrderRecieved} alt="" id='orderRecievedCard' className={css.orderRecieved} width={200}/>
                    <img src={addSpices} alt="" id='addingSpicesCard' className={css.addSpices} width={100}/>
                    <img src={wokhei} alt="" id='wokheiCard' className={css.cookingWokhei} width={100}/>
                 </div>
             </div>
             {/* path from the feature 2 to feature 3 */}
             <img src={foodPackage} alt="" className={css.packageElement} id='PackageElement' width={40}/>
             <svg xmlns="http://www.w3.org/2000/svg" className={css.pathf2tof3} id='PathF2toF3' ref={pathPackageRef} viewBox="0 0 800 200" width="800" height="200">
                        <path d="M 800 0
                                 C 800 0 , 800 100 , 700 100
                                 L 700 100
                                 C 100 100 , 50 60 , 50 200
                                 L 50 200
                                 " fill="none" stroke="#B9BDBD" strokeWidth="2.5" strokeDasharray="7 7" />
             </svg>
             <div className={css.featureWrapper}>
                 <div className={css.featureBanner}>
                    <img src={ArrivingSoon} alt="" className={css.arrivingSoon} id='ArrivingSoon' width={100}/>
                    <img src={PickedUp} alt="" className={css.PickedUp} id='pickedUp' width={100}/>
                    <img src={TrackMap} alt="" className={css.trackMap} id='trackingMap'  width={320} />
                    <img src={deliveryGuy} alt="" className={css.trackDeliveryMan} id='trackingDeliveryGuy'  width={30} />
                    {/* this is the map track anime svg path */}
                    <svg xmlns="http://www.w3.org/2000/svg" ref={trackPathRef} className={css.trackingPath} id='trackPath' viewBox="0 0 200 400" width="200" height="400">
                        <defs>
                            <marker id="ball-marker" viewBox="0 0 10 10" refX="5" refY="5"
                                    markerWidth="3" markerHeight="3">
                                    <circle cx="5" cy="5" r="5" fill="#23CE6B" />
                            </marker>
                        </defs>

                        <path d="M 15 18
                                 L 90 20
                                 L 90 180
                                 L 188 140
                                 L 188 280
                                 L 90 280
                                 L 90 360
                                 " 
                                 fill="none" 
                                 stroke="#23CE6B" 
                                 strokeWidth="2.5" 
                                 marker-start="url(#ball-marker)"
                                 marker-end="url(#ball-marker)"/>
                    </svg>
                 </div>
                 <Feature title = {constants.featuresSection.feature3.headline}
                      description = {constants.featuresSection.feature3.description}
                    />
             </div>
             <img src={deliveryGuy} alt="" className={css.deliveryElement} id='deliveryElement' width={40}/>
             <svg xmlns="http://www.w3.org/2000/svg" className={css.pathf3tof4} id='PathF3tof4' ref={deliveryPathRef} viewBox="0 0 200 600" width="200" height="600">
                        <path d="M 0 30
                                 C 0 30, 100 20, 100 140
                                 L 100 140
                                 L 100 480
                                 C 100 480, 90 580, 200 580
                                 L 200 580" fill="none" stroke="#B9BDBD" strokeWidth="2.5"  strokeDasharray="7 7" />
             </svg>
             <div className={css.featureWrapper}>
                 <Feature title = {constants.featuresSection.feature4.headline}
                      description = {constants.featuresSection.feature4.description}
                    />
                <div className={css.featureBanner}>
                    <img src={Package} alt="" className={css.package} id='package' width={360}/>
                    <img src={ratings} alt="" className={css.ratings} id='ratingBar' width={180}/>
                    <img src={payments} alt="" className={css.payments} id='paymentsCard' width={120}/>
                    <img src={Delivered} alt="" className={css.Delivered} id='deliveredPack' width={120}/>
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