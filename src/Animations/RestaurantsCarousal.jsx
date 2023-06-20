import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/Animations/RestaurantsCarousal.css";


function RestaurantsCarousal({speed,rtl,slides,names}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: speed,
        slidesToShow: slides, // Adjust the number of visible slides as needed
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: speed, // Adjust the autoplay speed as needed
        rtl : rtl,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };
    
      return (
        <Slider {...settings}>
            {names.map((name) => {
                return <div className="brand"> {name} </div>
            })}
        </Slider>
      );
}

export default RestaurantsCarousal;