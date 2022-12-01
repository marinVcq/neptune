import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

// Import assets
import Wink from '../assets/icons/wink.png';

const Contact = () => {

  // Useful state
  const [status, setStatus] = useState("Envoyer");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState("");

  // Submit form function
  const handleSubmit = async (e) =>{
    e.preventDefault()

    setStatus("Envoi en cours...")

    let details = {
      name: name,
      email: email,
      message: message,
    };

    try{
      let res = await axios.post('/contact', details)
      setStatus("Envoyer")
      setResponse(res.data);    
      setName("")
      setEmail("")
      setMessage("")
    }catch(err){
      setResponse("Une erreur est survenue!");
    }

  }
  return (
    <div className='contact-page'>

      <h1>Nous contacter</h1>

      <div className='text'>
        <div className='text-item'>
          <p>Un avis ?</p>
          <p style={{marginLeft: "1rem"}}>Un renseignement ?</p>
          <p style={{marginLeft: "2rem"}}>Une idée ?</p>          
        </div>

        <p style={{display: "flex", alignItems: "flex-end", gap: "1rem"}}><img src={Wink}>
          </img>
          <i>L'équipe de Neptune-magazine s'engage à vous répondre ! </i>
        </p>
      </div>

      <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>

          <div className='row'>
            <label htmlFor='contactName'>Nom</label>
            <input type='text' id="contactName" placeholder='nom' required onChange={(e) => {setName(e.target.value)}} value={name}></input>
          </div>

          <div className='row'>
            <label htmlFor='contactEmail'>Adresse email</label>
            <input type='text' id="contactEmail" placeholder='email' required onChange={(e) => {setEmail(e.target.value)}} value={email}></input>
          </div>

          <div className='row'>
            <label htmlFor='contactMessage'>Message</label>
            <textarea type='text' id="contactMessage" style={{height: "15rem", width: "100%"}} placeholder="Bonjour l'équipe Neptune, blablabla ..." required 
            onChange={(e) => {setMessage(e.target.value)}} value={message}></textarea>
          </div>

          <button type='subtmit'>{status}</button>

          {response.length !== 0 && (<p className={`form-info ${response === "Une erreur est survenue!" && "red"}`}>{response}</p>)}

        </form>

        <div className='bottom'>
          <p>Vous pouvez également nous contacter à l'adresse email suivante: neptune.magazine2022@gmail.com</p>
          <h3>Traitement des données</h3>
          <p>L'association Open'Digital est responsable du traitement de vos données sur son site, nous nous engageons à ne pas vendre ou céder vos
            informations personnelles. Nous traitons vos données afin de satisfaire au mieux votre expérience sur notre site. 
            Vous pouvez nous contacter pour demander une copie ou l'effacement de vos données. En cas de problème vous pouvez effectuer une réclamation auprès de la Commission 
            nationale de l'informatique et des libertés.
            Pour en savoir plus sur la gestion de vos données par Open'D et vos droits, consultez la <Link className='link' to={"/charte"}><span>politique de protection des données Neptune-magazine</span></Link>.
          </p>
        </div>        
      </div>

    </div>
  )
}

export default Contact