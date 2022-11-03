import React, {useState, useEffect, Suspense} from "react";
import { Link } from 'react-router-dom';

import HeaderDesktop from '../assets/images/header_desktop.jpg';
import HeaderMobile from '../assets/images/header_mobile.jpg';
import Downward from '../assets/icons/downward.png';
import StatueImage from "../assets/images/neptune_statue.png";
import DoubleDown from "../assets/icons/double_down_100.png";
import DoubleDownSmall from "../assets/icons/double_down.png";

import asset1 from '../assets/images/asset1.jpg'
import asset2 from '../assets/images/asset2.png'
import asset3 from '../assets/images/asset3.jpg'


const Slider = React.lazy(() => import("../components/Slider.jsx"));

const Home = () => {
  const SliderData = [
    {
      image: 'https://i.ibb.co/hfP9HFd/asset1.jpg',
      titre: 'Numéro 1',
      description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nam earum ratione cupiditate corrupti quo placeat recusandae odio, expedita, obcaecati corporis beatae! Repellat, exercitationem magnam!'
    },
    {
      image:'https://i.ibb.co/dDPXWh2/asset2.png',
        titre: 'Numéro 2',
      description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum voluptatibus commodi voluptas animi inventore, voluptates debitis ipsum qui blanditiis. Recusandae, dolore.'
    },
    {
      image:'https://i.ibb.co/4ZwB5Cj/asset3.jpg',
        titre: 'Numéro 3',
      description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id aut laborum quo esse ratione rem blanditiis culpa?'
    }
  ];
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
            <Slider SliderDate={SliderData} />
        </Suspense>

        <div className="showmore">
          <img src={DoubleDownSmall} alt="double arrow"></img>
          <Link className='link' to="/numeros"><h6 className="showMore">Voir tous les numéros</h6></Link>
          <img src={DoubleDownSmall} alt="double arrow"></img>
        </div>

        <h2>Nos dernier articles</h2>

        
    </div>
  )
}

export default Home