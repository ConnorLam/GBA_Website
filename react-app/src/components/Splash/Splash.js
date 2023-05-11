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

    const dispatch = useDispatch();
    const history = useHistory();

    const [splashNum, setSplashNum] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const splashInterval = setInterval(() => {
            setSplashNum((splashNum + 1) % images.length)
        }, 5000)

        return (() => {
            clearInterval(splashInterval)
        })
    }, [splashNum])

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    return (
        <div className="main-splash">
            <Slider {...settings}>
                <div className="splash-info">
                    <h1>hi</h1>
                </div>
                <div className="splash-info">
                    <h1>hi</h1>
                </div>
                <div className="splash-info">
                    <h1>hi</h1>
                </div>
                <div className="splash-info">
                    <h1>hi</h1>
                </div>
                <div className="splash-info">
                    <h1>hi</h1>
                </div>
                <div className="splash-info">
                    <h1>hi</h1>
                </div>
                <div className="splash-info">
                    <h1>hi</h1>
                </div>
            </Slider>
        </div>
        // <div className="splash-wrapper">
        //     <div
        //         id="splash"
        //         className="splash-main"
        //         // style={{
        //         // backgroundImage: `url(${images[splashNum]})`,
        //         // }}
        //     >
        //         <img className='rotating-image' src={images[splashNum]} alt=''/>
        //         {/* <div>
        //         <h1>Global Badminton Academy</h1>
        //         </div> */}
        //     </div>
        // </div>
    // <div className="splash-wrapper">
    //     <div className="splash-info">
    //         <div>
    //             <h1>
    //                 Welcome to Global Badminton Academy
    //             </h1>
    //         </div>
    //         <div className="coach-intro">
    //             Tony Gunawan, <span className="x-large-font">Olympic Gold Medalist</span>, founded Global Badminton Academy 
    //             in 2010. His mission is to share his profound knowledge through intensive training 
    //             and world-class competition to as many badminton coaches and students 
    //             throughout the US.
    //         </div>
    //     </div>
    //     <div className="splash-picture">
    //         <img className='picture' src={tony} alt=''/>
    //     </div>
    // </div>
    // <div className="main-splash">

    //     <div className="four-quadrants white">
    //         <div className="top-bottom-quad">
    //             <div className="each-quad">
    //                 <div className="quad-header">
    //                     Little Champions
    //                 </div>
    //                 <img className="background-image" id="little-champions" src={littlechampion} alt=""/>
    //             </div >
    //             <div className="each-quad">
    //                 <div className="quad-header">
    //                     Tournament Team
    //                 </div>
    //                 <img className='background-image' id="tournament-team" src={tournamentteam} alt=""/>
    //             </div>
    //         </div>
    //         <div className="top-bottom-quad">
    //             <div className="each-quad">
    //                 <div className="quad-header">
    //                     Our Coaches
    //                 </div>
    //                 <img className="background-image" id="coaches" src={coaches} alt=""/>
    //             </div>
    //             <div className="each-quad">
    //                 <div className="quad-header">
    //                     FAQ
    //                 </div>
    //                 <img src="" alt=""/>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    );
}



export default Splash
