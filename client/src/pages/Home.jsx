import React, {useState, useEffect, Suspense} from "react";
import { Link } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';

import HeaderDesktop from '../assets/images/header_desktop.jpg';
import HeaderMobile from '../assets/images/header_mobile.jpg';
import Downward from '../assets/icons/downward.png';
import StatueImage from "../assets/images/neptune_statue.png";
import DoubleDown from "../assets/icons/double_down_100.png";
import DoubleDownSmall from "../assets/icons/double_down.png";
import NeptuneGif from "../assets/images/neptune.gif";

import asset1 from '../assets/images/asset1.jpg'
import asset2 from '../assets/images/asset2.png'
import asset3 from '../assets/images/asset3.jpg'

import BackgroundMobile from "../assets/images/header_mobile.jpg";
import BackgroundDesktop from "../assets/images/header_desktop.jpg";



const Slider = React.lazy(() => import("../components/Slider.jsx"));

const Home = () => {
  const Numeros = [
    {
      img: 'https://i.ibb.co/hfP9HFd/asset1.jpg',
      title: 'Numéro 1',
      desc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nam earum ratione cupiditate corrupti quo placeat recusandae odio, expedita, obcaecati corporis beatae! Repellat, exercitationem magnam!'
    },
    {
      img:'https://i.ibb.co/dDPXWh2/asset2.png',
        title: 'Numéro 2',
      desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum voluptatibus commodi voluptas animi inventore, voluptates debitis ipsum qui blanditiis. Recusandae, dolore.'
    },
    {
      img:'https://i.ibb.co/4ZwB5Cj/asset3.jpg',
        title: 'Numéro 3',
      desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id aut laborum quo esse ratione rem blanditiis culpa?'
    }
  ];
  const Articles = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.unsplash.com/photo-1421757350652-9f65a35effc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    },
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
    <div className='home-page'>
      <header style={screenWidth > 800 ? {backgroundImage:`url(${BackgroundMobile})`} : {backgroundImage:`url(${BackgroundDesktop})`} }>
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
      
      <section className="home-content">

        <h2>Derniers numéros</h2>
        
        <div className="home-slider">
          <Suspense fallback={<div>Loading...</div>}>
            <Slider SliderData={Numeros} />
          </Suspense>         
        </div>

        <div className="ou">
          <p>ou</p>
          <div className="home-link">
            <Link className='link' to="/numeros"><h6>Voir tous les numéros</h6></Link>
          </div>      
        </div>



        {screenWidth < 800 && (
        <div className="home-gif">
          <h2>Neptune</h2>
          <img src={NeptuneGif} alt="neptune gif"></img>
        </div>

        )}
        

        <h2>Derniers articles</h2>

        <div className='articles-container'>
          {Articles.slice(-2).map(article =>(
            <div className='article' key={article.id}>
              <div className='article-img-container'>
                <img src={article.img}></img>
              </div>
              <div className='article-content'>
                <Link className='link' to={`/article/${article.id}`}>
                  <h1 className='article-title'>{article.title}</h1>
                </Link>
                <p className='article-desc'>{article.desc}</p>
                <Link className='button' to={`/article/${article.id}`}>Voir Plus</Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="ou">
          <p>ou</p>
          <div className="home-link">
            <Link className='link' to="/articles"><h6>Voir tous les articles</h6></Link>
          </div>      
        </div>     
      </section>




        
    </div>
  )
}

export default Home