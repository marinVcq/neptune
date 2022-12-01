import React, {useState, useEffect, Suspense} from "react";
import { Link } from 'react-router-dom';

import HeaderDesktop from '../assets/images/header_desktop.jpg';
import HeaderMobile from '../assets/images/header_mobile.jpg';
import Downward from '../assets/icons/downward.png';
import StatueImage from "../assets/images/neptune_statue.png";
import DoubleDown from "../assets/icons/double_down_100.png";
import DoubleDownSmall from "../assets/icons/double_down.png";
import NeptuneGif from "../assets/images/neptune.gif";


import BackgroundMobile from "../assets/images/header_mobile.jpg";
import BackgroundDesktop from "../assets/images/header_desktop.jpg";

import axios from "axios";



const Slider = React.lazy(() => import("../components/Slider.jsx"));

const Home = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [numeros, setNumeros] = useState([]);
  const [articles, setArticles] = useState([]);

  // Fetch numeros
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/numeros`)
        setNumeros(res.data)
      }catch(err){
        console.log(err)

      }
    }
    fetchData();

  },[])

  // Fetch articles
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/articles`)
        setArticles(res.data)
      }catch(err){
        console.log(err)

      }
    }
    fetchData();

  },[])

  // Check the viewport
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  }, [])

  // Convert html to text/html
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent;
  }


  return (
    <div className='home-page'>
      <header style={screenWidth < 800 ? {backgroundImage:`url(${BackgroundMobile})`} : {backgroundImage:`url(${BackgroundDesktop})`} }>
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
        
        <Slider SliderData={numeros} />          


        <div className="home-link">
          <Link className='link' to="/numeros"><h6>Voir tous les numéros</h6></Link>
        </div>      

        {screenWidth < 800 && (
        <div className="home-gif">
          <h2>Neptune</h2>
          <img src={NeptuneGif} alt="neptune gif"></img>
        </div>

        )}
        
        <h2>Derniers articles</h2>

        <div className='articles-container'>
          {articles.slice(-2).map(article =>(
            <div className='article' key={article.id}>
              <div className='article-img-container'>
                <img src={`../upload/${article.img}`}></img>
              </div>
              <div className='article-content'>
                <Link className='link' to={`/article/${article.id}`}>
                  <h1 className='article-title'>{article.title}</h1>
                </Link>
                <p className='article-desc'>{getText(article.desc)}</p>
                <Link className='button' to={`/article/${article.id}`}>Voir Plus</Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="home-link">
          <Link className='link' to="/articles"><h6>Voir tous les articles</h6></Link>
        </div>      
      </section>




        
    </div>
  )
}

export default Home