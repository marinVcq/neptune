import React, {useState, useEffect} from 'react';
import Burger from '../assets/icons/burger.png';
import Close from '../assets/icons/close.png';
import Instagram from '../assets/icons/instagram.png';
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
          <Link className='link' to="/"><span className='logo' onClick={navbarExpand ? handleToggle : null}>neptune</span></Link>
          <img src={!navbarExpand ? Burger: Close} alt="burger btn" className={`menu-btn ${navbarExpand ? "rotate" : ""}`} onClick={handleToggle}></img>
        </div>
        <div className={`menu ${navbarExpand ? " showMenu": ""}`}>
            <Link className='link' to="/numeros"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Numéros</h6></Link>
            <Link className='link' to="/articles"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Articles</h6></Link>
            <Link className='link' to="/contact"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Contact</h6></Link>
            <a href='https://www.instagram.com/neptune_magazine/?hl=fr' target="_blank"><img className='social-link' src={Instagram}></img></a>
        </div>

      </nav>    
    </>

  )
}

export default NavbarMobile