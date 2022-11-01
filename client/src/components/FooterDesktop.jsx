import React from 'react'
import OpenD from '../assets/icons/openD.png'

const FooterDesktop = () => {
  return (
    <footer className='footerDesktop'>
      <p>Build with <a href='https://fr.reactjs.org/'>React.js</a> by Open'D</p>
      <img src={OpenD} alt="logo Open'D"></img>
    </footer>
  )
}

export default FooterDesktop