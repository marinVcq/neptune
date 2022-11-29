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
      <p>Build with <a href='https://fr.reactjs.org/'>React.js</a> by Open'D</p>
      <div className='user-area'>
        <span>Vous êtes connecté en tant qu'{currentUser? currentUser.username : "invité"}</span>

        <div className='user-option'>
          {currentUser ? <span onClick={logout}><b>Me déconnecter</b></span> : <Link to='/login' className='link'>Login</Link>}
          {currentUser ? <span><b><Link className='.link' to="/write">Publier un article</Link></b></span>  : ""}
          {currentUser ? <span><b><Link className='.link' to="/add">Publier un numéro</Link></b></span>  : ""}         

        </div>
      
      </div>

      <img src={OpenD} alt="logo Open'D"></img>
    </footer>
  )
}

export default FooterDesktop