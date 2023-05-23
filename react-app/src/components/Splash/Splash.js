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
import tony from '../../assets/gba_photos/tony.jpeg'
import coaches from '../../assets/gba_photos/coaches.JPG'
import tournamentteam from '../../assets/gba_photos/tournamentteam.JPG'
import circleteam from '../../assets/gba_photos/circleteam.JPG'
import grouppic from '../../assets/gba_photos/IMG_6374.JPG'

const images = [
    grouppic,
  circleteam,
  splash1,
  splash2,
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
            {images.map((image) => (
              <div className="card" style={{ width: "80%" }}>
                <img src={image} alt="" />
              </div>
            ))}
          </Slider>
        </div>
        <section id="about-section">
          <div className="container" id="about-container">
            <h2 className="container-header">About Us</h2>
            <div className="splash-wrapper">
              <div className="about-picture">
                <img className="picture" src={tony} alt="" />
              </div>
              <div className="about-info">
                <div className="coach-intro">
                    <div>
                        Tony Gunawan
                        founded Global Badminton Academy in 2010. His mission is to
                        share his profound knowledge through intensive training and
                        world-class competition to as many badminton coaches and
                        students throughout the US.
                    </div>
                    <div className="tony-accolades">
                        {/* <ul> */}
                            <li>2000 Sydney Olympic Gold Medalist</li>
                            <li>2x World Champion (2001, 2005)</li>
                            <li>1998 Asian Games Champion</li>
                            <li>Southeast Asian Games Champion (1997)</li>
                            <li>3x All England Open Champion (2001, 2002, 2003)</li>
                            <li>2x Thomas Cup Champion (2000, 2002)</li>
                        {/* </ul> */}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="learn-section">
          <div className="container" id="learn">
            <h2 className="container-header reason-color">
              Reasons Why You Should Join GBA
            </h2>
            <div className="learn-growth">
              <div className="reasons-learn">
                <h3 className="reason-learn-header">Important Life Lessons</h3>
                <p className="reason-learn-p">
                  Although badminton is just a sport, it offers numerous
                  valuable life lessons. Through GBA, you can develop a strong
                  work ethic, learn to accept responsibility, embrace healthy
                  competition, thrive under pressure, and enhance your teamwork
                  skills.
                </p>
              </div>
              <div className="reasons-learn">
                <h3 className="reason-learn-header">Health</h3>
                <p className="reason-learn-p">
                  Badminton is an excellent all-around sport that involves a
                  variety of whole-body movements, including running, jumping,
                  and swinging. Engaging in badminton not only helps improve
                  strength but also promotes cardiovascular fitness and heart
                  function.
                </p>
              </div>
              <div className="reasons-learn">
                <h3 className="reason-learn-header">Social</h3>
                <p className="reason-learn-p">
                  Whether you're engaging in training, participating in
                  tournaments, or simply playing for fun, badminton is an
                  excellent sport for building friendships. Global Badminton Academy
                  provides a safe and welcoming space for you to socialize and compete with
                  like-minded individuals who share a passion for the sport.
                </p>
              </div>
              <div className="reasons-learn">
                <h3 className="reason-learn-header">Minimal Injuries</h3>
                <p className="reason-learn-p">
                  Badminton is a low-impact sport, which also makes it safe for
                  your children. There is no hitting, pushing, or any type of
                  contact with other players aside from your partners.
                </p>
              </div>
              <div className="reasons-learn">
                <h3 className="reason-learn-header">Improves Motor Skills</h3>
                <p className="reason-learn-p">
                  Badminton will help in devloping better balance and
                  coordination. Recognized as one of the fastest sports in the
                  world, you will have to be alert and vigilant at all times
                  while playing badminton
                </p>
              </div>
              <div className="reasons-learn">
                <h3 className="reason-learn-header">Mental Resilience</h3>
                <p className="reason-learn-p">
                  Playing badminton, you will be put into high pressure
                  situations where you have to learn how to deal with
                  frustrations and not dwell on the past. Badminton can also act
                  as a healthy stress reliever.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="why-gba-section">
            <div className="container">
                <h2 className="container-header">Why GBA</h2>

            </div>
        </section> */}

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
