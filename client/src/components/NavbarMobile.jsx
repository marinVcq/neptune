import React, {useState, useEffect} from 'react';
import Burger from '../assets/icons/burger.png';
import Close from '../assets/icons/close.png';
import Instagram from '../assets/icons/instagram.png';
import Snapchat from '../assets/icons/snapchat.png';
import {Link} from 'react-router-dom'

const NavbarMobile = () => {

  const [navbarExpand, setNavbarExpand] = useState(false)
  const [bodyScroll, setBodyScroll] = useState(true)

    useEffect(() => {
      navbarExpand ? setBodyScroll(false) : setBodyScroll(true)
      if(!bodyScroll){
        document.body.style.overflowY = 'hidden';
      }else{
        document.body.style.overflowY = 'scroll';
      }      
    })

  const handleToggle = () => {
    setNavbarExpand(prev => !prev)
  }

  return (
    <>
      <div className={navbarExpand ? "bg-layer active": "bg-layer"}></div>
      <nav className='mobile-navbar'>
        
        <div className='top-container'>
          <Link className='link' to="/"><span className='logo'>neptune</span></Link>
          <img src={!navbarExpand ? Burger: Close} alt="burger btn" className='menu-btn' onClick={handleToggle}></img>
        </div>
        <div className={`menu ${navbarExpand ? " showMenu visible": ""}`}>
            <Link className='link' to="/"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Homepage</h6></Link>
            <Link className='link' to="/numeros"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Les numéros</h6></Link>
            <Link className='link' to="/articles"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Les articles</h6></Link>
            <Link className='link' to="/contact"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Nous contacter</h6></Link>
            <div className='social-links'>
              <Link className='link' to="https://www.instagram.com/">
                <img className='social-link' src={Instagram}></img>
              </Link>
              <Link className='link' to="">
                <img className='social-link' src={Snapchat}></img>
              </Link>              
            </div>

        </div>

      </nav>    
    </>

  )
}

export default NavbarMobile