import React from 'react'
import OpenD from '../assets/icons/openD.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const FooterDesktop = () => {

  // Login context
  const {currentUser, logout} = useContext(AuthContext);

  return (
    <footer className='footerDesktop'>

      <div className='item'>
        <p>Build with <a href='https://fr.reactjs.org/'>React.js</a> by Open'D</p>
        <Link className='link' to="/charte"><p>Politique de données</p></Link>
        <Link to="/contact" className='link'><p>Contact</p></Link>
      </div>

      <div className='item'>
        {currentUser && (<p>Bienvenue {currentUser? currentUser.username : "invité"}</p>)}
        {currentUser ? <Link className='link' to="/write"><p>Publier un article</p></Link>  : ""}
        {currentUser ? <Link className='link' to="/add"><p>Publier un numéro</p></Link>  : ""}         
        {currentUser ? <button onClick={logout}><b>Me déconnecter</b></button> : <Link to='/login' className='link'><p>Login</p></Link>}
        <img src={OpenD} alt="logo Open'D"></img>

      </div>


    </footer>
  )
}

export default FooterDesktop