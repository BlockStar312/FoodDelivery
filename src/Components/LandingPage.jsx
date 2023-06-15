import React from 'react';
import css from "../styles/LandingPage.module.css"

function LandingPage() {
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

         {/* start of the hero section */}
         <div className={css.heroSectionContainer}>
                <div className={css.heroSectionContent}>
                    <p className={css.headline}>Head line</p>
                    <p className={css.subheadline} >Sub headline</p>
                    <button className={css.heroCTA}>
                        Try it out
                    </button>
                    <p className={css.quickLink}>
                        Learn more
                    </p>
                </div>
         </div>
         {/* end of the hero section */}
    </div>
  )
}

export default LandingPage;