import React from 'react'
import Instagram from '../assets/icons/instagram-desktop.png';
import Snapchat from '../assets/icons/snapchat.png';

import {Link} from 'react-router-dom'

const NavbarDesktop = () => {
  return (
    <nav className='desktop-navbar'>
      <Link className='link' to="/"><span className='logo'>neptune</span></Link>
      <div className="links">
          <Link className='link' to="/"><h6 className='nav-link'>Homepage</h6></Link>
          <Link className='link' to="/numeros"><h6 className='nav-link'>Les numéros</h6></Link>
          <Link className='link' to="/articles"><h6 className='nav-link'>Les articles</h6></Link>
          <Link className='link' to="/contact"><h6 className='nav-link'>Nous contacter</h6></Link>
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
  )
}

export default NavbarDesktop