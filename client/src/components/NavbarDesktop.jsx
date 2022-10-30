import React from 'react'
import InstagramDesktop from '../assets/icons/instagram-desktop.png';
import {Link} from 'react-router-dom'

const NavbarDesktop = () => {
  return (
    <nav className='desktop-navbar'>
      <span className='logo'>neptune</span>
      <div className="links">
          <Link className='link' to="/numeros"><h6 className='desktop-nav-link'>Les numéros</h6></Link>
          <Link className='link' to="/articles"><h6 className='desktop-nav-link'>Les articles</h6></Link>
          <Link className='link' to="/contact"><h6 className='desktop-nav-link'>Nous contacter</h6></Link>
          <Link className='link' to="#"><img src={InstagramDesktop}></img></Link>
      </div>
    </nav>
  )
}

export default NavbarDesktop