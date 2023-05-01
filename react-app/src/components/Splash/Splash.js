import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import './Splash.css'

import splash1 from '../../assets/gba_photos/gba_splash.jpeg'
import splash2 from '../../assets/gba_photos/gba_splash2.jpeg'
import splash3 from '../../assets/gba_photos/gba_splash4.jpeg'
import tony from '../../assets/gba_photos/tony.jpeg'


// const images = [
//   splash1,
//   splash2,
//   splash3
// ];

const Splash = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [splashNum, setSplashNum] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // useEffect(() => {
    //     const splashInterval = setInterval(() => {
    //         setSplashNum((prevNum) => ++prevNum % images.length)
    //     }, 5000)

    //     return (() => {
    //         clearInterval(splashInterval)
    //     })
    // }, [])

    return (
    //   <div
    //     id="splash"
    //     className="splash-main"
    //     style={{
    //       backgroundImage: `url(${images[splashNum]})`,
    //     }}
    //   >
    //     {/* <img src={images[splashNum]} alt=''/> */}
    //     {/* <div>
    //       <h1>Global Badminton Academy</h1>
    //     </div> */}
    //   </div>
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
    <div className="main-splash">

        <div className="four-quadrants white">
            <div className="top-bottom-quad">
                <div className="each-quad">
                    <div className="quad-header">
                        Little Champions
                    </div>
                    <img src="" alt=""/>
                </div >
                <div className="each-quad">
                    <div className="quad-header">
                        Tournament Team
                    </div>
                    {/* <img className='background-image' src={splash1} alt=""/> */}
                </div>
            </div>
            <div className="top-bottom-quad">
                <div className="each-quad">
                    <div className="quad-header">
                        Our Coaches
                    </div>
                    <img src="" alt=""/>
                </div>
                <div className="each-quad">
                    <div className="quad-header">
                        FAQ
                    </div>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    </div>
    );
}


export default Splash
