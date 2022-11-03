import React, {useState, useEffect, Suspense} from "react";
import { Link } from 'react-router-dom';

import HeaderDesktop from '../assets/images/header_desktop.jpg';
import HeaderMobile from '../assets/images/header_mobile.jpg';
import Downward from '../assets/icons/downward.png';
import StatueImage from "../assets/images/neptune_statue.png";
import DoubleDown from "../assets/icons/double_down_100.png";
import DoubleDownSmall from "../assets/icons/double_down.png";


const Slider = React.lazy(() => import("../components/Slider.jsx"));


const Home = () => {

const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
// Check the viewport
useEffect(() => {

  const changeWidth = () => {
    setScreenWidth(window.innerWidth);
  }

  window.addEventListener('resize', changeWidth)

}, [])

  return (
    <div className='home'>
      <header>
        <h1 className='header-title'>Neptune magazine</h1>
        <h2 className="header-description">Magazine digital by Open'D</h2>

        {screenWidth > 800 && (
          <>
            <div className="header-image-desktop">
              <img src={StatueImage} alt="statue image"></img>
            </div>
            <div className="doubleDown">
              <img src={DoubleDown} alt="double down arrow"></img>
            </div>
            
          </>
        )}
      </header>
        <Suspense fallback={<div>Loading...</div>}>
            <Slider />
        </Suspense>

        <div className="showmore">
          <img src={DoubleDownSmall} alt="double arrow"></img>
          <Link className='link' to="/numeros"><h6 className="showMore">Voir tous les numéros</h6></Link>
          <img src={DoubleDownSmall} alt="double arrow"></img>
        </div>
        {screenWidth > 800 && (
          <div className="last-articles">
            <h2>Nos dernier articles</h2>
          </div>
        )}
        
    </div>
  )
}

export default Home