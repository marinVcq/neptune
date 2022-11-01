import React from 'react'
import OpenD from '../assets/icons/openD.png'

const FooterMobile = () => {
  return (
    <footer className='footerMobile'>
      <p>Build with <a href='https://fr.reactjs.org/'>React.js</a> by Open'D</p>
      <img src={OpenD} alt="logo Open'D"></img>
    </footer>
  )
}

export default FooterMobile