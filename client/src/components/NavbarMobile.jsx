import React, {useState} from 'react';
import Burger from '../assets/icons/burger.png';
import Close from '../assets/icons/close.png';
import Instagram from '../assets/icons/instagram.png';
import {Link} from 'react-router-dom'

const NavbarMobile = () => {

  const [navbarExpand, setNavbarExpand] = useState(false)

  const handleToggle = () => {
    setNavbarExpand(prev => !prev)
  }

  return (
    <nav className='mobile-navbar'>
      <div className='top-container'>
        <span className='logo'>neptune</span>
        <img src={!navbarExpand ? Burger: Close} alt="burger btn" className='menu-btn' onClick={handleToggle}></img>
      </div>
      <div className={`menu ${navbarExpand ? " showMenu": ""}`}>
          <Link className='link' to="/"><h6 className='mobile-nav-link' onClick={navbarExpand ? handleToggle : null}>Homepage</h6></Link>
          <Link className='link' to="/numeros"><h6 className='mobile-nav-link' onClick={navbarExpand ? handleToggle : null}>Les numéros</h6></Link>
          <Link className='link' to="/articles"><h6 className='mobile-nav-link' onClick={navbarExpand ? handleToggle : null}>Les articles</h6></Link>
          <Link className='link' to="/contact"><h6 className='mobile-nav-link' onClick={navbarExpand ? handleToggle : null}>Nous contacter</h6></Link>
          <Link className='link' to="https://www.instagram.com/"><img src={Instagram}></img></Link>
      </div>

    </nav>
  )
}

export default NavbarMobile