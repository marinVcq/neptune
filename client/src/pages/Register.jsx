import React from 'react'
import { useState } from 'react'
import axios from 'axios'

    const Register = () => {

    // set state
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
    })

    const [formErr, setFormErr] = useState(null)

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        // async function because we arre making an api request
        e.preventDefault()

        // Axios module allow us to use api and client codebase at same time
        try{
           const res = await axios.post("auth/register", inputs) 
           console.log(res)
        }
        catch(err){
            setFormErr(err.response.data)
        }

        
    }


  return (
    <div className='register-page'>
        <form>
            <input required type="text" placeholder="username" name="username" onChange={handleChange}></input>
            <input required type="email" placeholder="email" name="email" onChange={handleChange}></input>
            <input required type="password" placeholder="password" name="password" onChange={handleChange}></input>
            <button onClick={handleSubmit}>Register</button>
            {formErr && (<p>{formErr}</p>)}
        </form>
    </div>
  )
}

export default Register