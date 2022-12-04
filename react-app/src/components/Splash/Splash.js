import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import './Splash.css'

import splash1 from '../../assets/gba_photos/gba_splash.jpeg'
import splash2 from '../../assets/gba_photos/gba_splash2.jpeg'
import splash3 from '../../assets/gba_photos/gba_splash4.jpeg'

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
      <div
        id="splash"
        className="splash-main"
        style={{
          backgroundImage: `url(${images[splashNum]})`,
        }}
      >
        {/* <img src={images[splashNum]} alt=''/> */}
        {/* <div>
          <h1>Global Badminton Academy</h1>
        </div> */}
      </div>
    );
}


export default Splash
