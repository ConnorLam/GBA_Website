import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import './Splash.css'

import splash1 from '../../assets/gba_photos/gba_splash.jpeg'
import splash2 from '../../assets/gba_photos/gba_splash2.jpeg'
import splash3 from '../../assets/gba_photos/gba_splash4.jpeg'
import tony from '../../assets/gba_photos/tony.jpeg'


const images = [
  splash1,
  splash2,
  splash3
];

const Splash = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [splashNum, setSplashNum] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const splashInterval = setInterval(() => {
            setSplashNum((prevNum) => ++prevNum % images.length)
        }, 5000)

        return (() => {
            clearInterval(splashInterval)
        })
    }, [])

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
    <div className="four-quadrants white">
        <div className="quadrant-1">
            Little Champions
        </div >
        <div className="quadrant-2">
            Tournament Team
        </div>
        <div className="quadrant-3">
            Our Coaches
        </div>
        <div className="quadrant-4">
            FAQ
        </div>
    </div>
    );
}


export default Splash
