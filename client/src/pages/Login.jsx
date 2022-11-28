import React from 'react'
import { useState } from 'react'
import NavbarDesktop from '../components/NavbarDesktop'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Login = () => {

  const navigate = useNavigate();
  const {login} = useContext(AuthContext)

  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  });

  const [loginErr, setLoginErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      await login(inputs)
      navigate('/')
    } catch(err){
      setLoginErr(err.response.data);
    }
  }

  return (
    <>
      <NavbarDesktop/>
      <div className='login-page'>
        <div className='form-container'>
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='username' name="username" onChange={handleChange}></input>
            <input type="password" placeholder='password'name="password" onChange={handleChange}></input>
            <button type='submit' onClick={handleSubmit}>Se Connecter</button>
          </form>
          { loginErr && (<p className='login-error'>{loginErr}</p>)}
        </div>
      </div>    
    </>

  )
}

export default Login