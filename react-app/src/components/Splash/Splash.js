import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Slider from "react-slick";


import './Splash.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




import splash1 from '../../assets/gba_photos/gba_splash.jpeg'
import splash2 from '../../assets/gba_photos/gba_splash2.jpeg'
import splash3 from '../../assets/gba_photos/gba_splash4.jpeg'
import tony from '../../assets/gba_photos/tony.jpeg'
import coaches from '../../assets/gba_photos/coaches.JPG'
import tournamentteam from '../../assets/gba_photos/tournamentteam.JPG'
import littlechampion from '../../assets/gba_photos/little_champion2.jpeg'

const images = [
  tournamentteam,
  littlechampion,
  splash1,
  splash2,
  splash3,
  tony,
  coaches
];

const Splash = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpedd: 2000,
      cssEase: "linear",
    };


    return (
        <div className="main-splash">
            {/* <h1 className="splash-header">Welcome to Global Badminton Academy</h1> */}
            <div className="image-carousel">
                <Slider {...settings}>
                    {images.map(image => (
                        <div className="card" style={{width: '80%'}}>
                            <img src={image} alt=''/>
                        </div>
                    ))}
                </Slider>
            </div>
            <section id="about-section">
                <div className="container">
                    <h3>About</h3>
                    <div className="splash-wrapper">
                        <div className="about-picture">
                            <img className='picture' src={tony} alt=''/>
                        </div>
                        <div className="about-info">
                            <div className="coach-intro">
                                Tony Gunawan, <span className="x-large-font">Olympic Gold Medalist</span>, founded Global Badminton Academy 
                                in 2010. His mission is to share his profound knowledge through intensive training 
                                and world-class competition to as many badminton coaches and students 
                                throughout the US.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about-section">
                <div className="container" id="learn">
                    <h3>What you will learn</h3>
                    
                </div>
            </section>

            {/* <div className="splash-wrapper">
                <div className="splash-info">
                    <div>
                        <h1>
                            Welcome to Global Badminton Academy
                        </h1>
                    </div>
                    <div className="coach-intro">
                        Tony Gunawan, <span className="x-large-font">Olympic Gold Medalist</span>, founded Global Badminton Academy 
                        in 2010. His mission is to share his profound knowledge through intensive training 
                        and world-class competition to as many badminton coaches and students 
                        throughout the US.
                    </div>
                </div>
                <div className="splash-picture">
                    <img className='picture' src={tony} alt=''/>
                </div>
            </div> */}
            {/* </div> */}

        </div>
    );
}



export default Splash
